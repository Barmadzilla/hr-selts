<template>
    <ContentSection>
        <div class="content">
             <transition name="fade" appear mode="out-in">
                <div>
                    <h1>{{ category.name }}</h1>
                    <div v-if="windowWidth > 500">
                        <div v-for="(post, i) in posts" :key="i">
                            <PostCardLarge
                                v-if="category.slug !== 'sundmused'"
                                :props="post"
                            />
                            <EventCardLarge v-else :props="post" />
                        </div>
                    </div>
                    <div v-if="windowWidth && windowWidth < 500">
                        <PostCard
                            v-for="(post, i) in posts"
                            :key="i"
                            :props="post"
                            :allWhite="true"
                            class="card"
                        />
                    </div>
                </div>
            </transition>
            <h2>Kõik postitused</h2>
            <transition
                name="fade"
                appear
                mode="out-in"
                @after-leave="nextTop(current)"
                ><div v-show="show" class="topWrap">
                    <div class="top">
                        <PostCard v-for="tp in top" :key="tp.id" :props="tp" />
                    </div>
                    <div class="pagination" :class="{ first: current === 0 }">
                        <div
                            v-if="current > 0"
                            @click="decrease()"
                            class="prev"
                        />

                        <div
                            v-if="current < total / 3 - 1"
                            @click="increase()"
                            class="next"
                        />
                    </div>
                </div>
            </transition>

            <div class="dotContainer">
                <div
                    v-for="n in Math.round(total / 3) "
                    :key="n"
                    @click="setPage(n)"
                    class="dot"
                    :class="{ active: current === n - 1 }"
                />
            </div>
           
        </div>
    </ContentSection>
</template>

<script>
export default {
    name: "CategoryArchive",
    data: () => ({
        posts: [],
        windowWidth: "",
        current: 0,
        show: true,
    }),
    methods: {
        async getPosts(offset) {
            return await fetch(
                `https://api.hrselts.ee/wp-json/wp/v2/posts?&_fields=id,title,excerpt,date,slug,acf,featured_media&per_page=3&offset=${offset}`
            ).then((res) => res.json());
        },
        getWidth() {
            this.windowWidth = process.client && window.innerWidth;
        },
        async nextTop(page) {
            this.show = true;
            this.top = await this.getPosts(page * 3);
        },
        increase() {
            this.current++;
            this.show = false;
        },
        decrease() {
            this.current--;
            this.show = false;
        },
        setPage(n) {
            this.current = n - 1;
            this.show = false;
        },
    },

    watch: {
        windowHeight(newHeight, oldHeight) {
            this.windowWidth = `it changed to ${newHeight} from ${oldHeight}`;
        },
    },

    async asyncData({ params, error }) {
        const slug = params.catslug; // When calling /abc the slug will be "abc"
        const categories = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/categories?_fields=id,name,slug,&per_page=50"
        ).then((res) => res.json());
        const category = categories.find((item) => item.slug === slug);

        if (category) {
            let total = 0;
            const posts = await fetch(
                `https://api.hrselts.ee/wp-json/wp/v2/posts?categories=${category.id}&_fields=id,title,excerpt,date,slug,featured_media,acf`
            ).then((res) => res.json());
            const top = await fetch(
                `https://api.hrselts.ee/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,slug,featured_media,sticky&per_page=3`
            ).then((res) => {
                total = res.headers.get("X-WP-Total");
                return res.json();
            });
            return { slug, category, posts, top, total };
        } else {
            return error({ statusCode: 404, message: "Post not found" });
        }
    },
    async mounted() {
        // this.posts = await this.getPosts(this.category[0]);

        this.$nextTick(() => {
            process.client && window.addEventListener("resize", this.getWidth);
        });
        this.getWidth();
    },
    beforeDestroy() {
        process.client && window.removeEventListener("resize", this.onResize);
    },
    // async fetch() {
    //     console.log(category);
    // },
    fetchOnServer: false,
};
</script>

<style scoped>
.next,
.prev {
    background: #f3eecf;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.next::after,
.prev::after {
    content: "";
    height: 4rem;
    width: 4rem;
    border: 0.3rem solid #c4c4c4;
    border-radius: 50%;
}
.next {
    transform: translateX(4rem);
    background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem center;
}
.prev {
    background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem center;
    transform: rotate(180deg) translateX(4rem);
}
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
}
</style>
