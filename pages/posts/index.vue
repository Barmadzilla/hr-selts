<template>
    <ContentSection>
        <div class="content">
            <Loading v-if="$fetchState.pending" />
            <div v-else>
                <h2>Uudised</h2>
                <div v-if="windowWidth > 500">
                    <PostCardLarge
                        v-for="(post, i) in posts"
                        :key="i"
                        :props="post"
                    />
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
        </div>
    </ContentSection>
</template>

<script>
import PostCardLarge from "../../components/PostCardLarge.vue";
import Loading from "../../components/Loading.vue";
export default {
    name: "PostsArchive",
    components: { PostCardLarge, Loading },
    data: () => ({
        posts: [],
        windowWidth: "",
    }),
    methods: {
        getWidth() {
            this.windowWidth = process.client && window.innerWidth;
        },
    },
    watch: {
        windowHeight(newHeight, oldHeight) {
            this.windowWidth = `it changed to ${newHeight} from ${oldHeight}`;
        },
    },
    mounted() {
        this.$nextTick(() => {
            process.client && window.addEventListener("resize", this.getWidth);
        });
        this.getWidth();
    },
    beforeDestroy() {
        process.client && window.removeEventListener("resize", this.onResize);
    },
    async fetch() {
        this.posts = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,slug,featured_media&per_page=15"
        ).then((res) => res.json());
    },
    fetchOnServer: false,
};
</script>

<style scoped>
.content {
    max-width: 1024px;
    min-width: 800px;
    margin: 6rem auto;
}
.card {
    margin-bottom: 4rem;
}
@media (max-width: 480px) {
    .content {
        min-width: unset;
        width: 100%;
    }
}
</style>
