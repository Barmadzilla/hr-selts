<template>
    <div>
        <Loading v-if="$fetchState.pending" />
        <div v-else>
            <transition
                name="fade"
                appear
                mode="out-in"
                @after-leave="nextTop(current)"
            >
                <div v-show="show" class="topWrap">
                    <div class="top" v-if="$store.state.width < 500">
                        <PostCard :props="top[0]" />
                    </div>
                    <div class="top" v-else>
                        <PostCard v-for="tp in top" :key="tp.id" :props="tp" />
                    </div>
                    <div class="pagination" :class="{ first: current === 0 }">
                        <PrevButton
                            @click.native="decrease()"
                            :current="current"
                        />
                        <NextButton
                            @click.native="increase()"
                            :current="current"
                            :total="totalSlides"
                        />
                    </div>
                </div>
            </transition>

            <div class="dotContainer">
                <div
                    v-show="$store.state.width > 500"
                    v-for="n in totalSlides"
                    :key="n"
                    @click="setPage(n)"
                    class="dot"
                    :class="{ active: current === n - 1 }"
                />
            </div>
        </div>
    </div>
</template>

<script>
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
export default {
    name: "PostsCardsSlider",
    components: { PrevButton, NextButton },
    data: () => ({
        top: [],
        current: 0,
        show: true,
        total: 0,
    }),
    computed: {
        perPage() {
            return this.$store.state.width > 500 ? 3 : 1;
        },
        totalSlides() {
            return Math.round(this.total / this.perPage);
        },
    },
    methods: {
        async getPosts(offset) {
            return await fetch(
                `https://api.hrselts.ee/wp-json/wp/v2/posts?&_fields=id,title,excerpt,date,slug,acf,featured_media&per_page=${this.perPage}&offset=${offset}`
            ).then((res) => res.json());
        },

        async nextTop(page) {
            this.show = true;
            this.top = await this.getPosts(this.current * this.perPage);
        },
        increase() {
            this.current++;
            this.show = false;
        },
        decrease() {
            this.current--;
            this.show = false;
            console.log("dd");
        },
        setPage(n) {
            this.current = n - 1;
            this.show = false;
        },
    },

    async fetch() {
        const res = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,slug,featured_media,sticky&per_page=3`
        );
        this.total = res.headers.get("X-WP-Total");
        this.top = await res.json();

        // return { top, total };
    },
    // async fetch() {
    //     console.log(category);
    // },
    fetchOnServer: false,
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
}
.pagination.first {
    justify-content: flex-end;
}
.content {
    max-width: 1200px;
    min-width: 800px;
    margin: 6rem auto;
}
.card {
    margin-bottom: 4rem;
}
.top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    justify-content: center;
    margin-bottom: var(--container-padding);
}
.topWrap {
    position: relative;
    display: flex;
    align-items: center;
}
.dotContainer {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 4.5rem;
}
.dot {
    --h: 12px;
    background: #c4c4c4;
    border-radius: 50%;
    width: var(--h);
    height: var(--h);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.dot::after {
    content: "";
    position: absolute;
    border: 1px solid #c4c4c4;
    --h: 16px;
    border-radius: 50%;
    width: var(--h);
    height: var(--h);
}
.dot:hover,
.dot.active {
    background: #8a8a8a;
}
.dot:hover::after,
.dot.active::after {
    border-color: #8a8a8a;
}

@media (max-width: 480px) {
    .content {
        min-width: unset;
        width: 100%;
    }
    .top {
        grid-template-columns: repeat(1, 1fr);
    }
    /* .pagination {
        justify-content: space-between;
        position: block;
        width: 100%;
    } */
    /* .topWrap {
        /* align-items: flex-end; */
}
</style>
