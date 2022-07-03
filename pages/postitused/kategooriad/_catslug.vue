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
                        <div v-for="(post, i) in posts" :key="i">
                            <PostCard
                                v-if="category.slug !== 'sundmused'"
                                :props="post"
                                :allWhite="true"
                                class="card"
                            />
                            <EventCardLarge v-else :props="post" />
                        </div>
                    </div>
                </div>
            </transition>
            <TitleAndButton title="Kõik postitused" />
            <PostsCardsSlider />
        </div>
    </ContentSection>
</template>

<script>
export default {
    name: "CategoryArchive",
    data: () => ({
        posts: [],
        windowWidth: "",
        show: true,
    }),

    methods: {
        getWidth() {
            this.windowWidth = process.client && window.innerWidth;
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
            return { slug, category, posts, total };
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
h2 {
    margin-top: 7.5rem;
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

    .next {
        /* transform: unset; */
        background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem
            center / 25%;
    }
    .prev {
        background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem
            center / 25%;
    }
}
</style>
