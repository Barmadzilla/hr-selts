<template>
    <ContentSection>
        <ArticleContent>
            <transition name="fade" appear mode="out-in">
                <div>
                    <h1>{{ post[0].title.rendered }}</h1>
                    <PostFeaturedImage
                        v-if="this.post[0].featured_media"
                        :id="this.post[0].featured_media"
                    />
                    <div v-html="this.post[0].content.rendered" />
                </div>
            </transition>
        </ArticleContent>
    </ContentSection>
</template>

<script>
import PostFeaturedImage from "../components/PostCardImage.vue";
import ArticleContent from "../components/ArticleContent.vue";
import Loading from "../components/Loading.vue";
export default {
    name: "SinglePage",
    components: { PostFeaturedImage, ArticleContent, Loading },
    data: () => ({
        post: [],
    }),
    async asyncData({ params }) {
        const res = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?slug=${params.page}&_fields=id,title,content,featured_media,date,categories,author`
        );
        const post = await res.json();
        return { post };
    },

    // async fetch() {
    //     const res = await fetch(
    //         `https://api.hrselts.ee/wp-json/wp/v2/pages?slug=${$nuxt.$route.params.page}&_fields=id,title,content,featured_media,date,categories,author`
    //     );
    //     this.post = await res.json();
    // },
    // fetchOnServer: false,
};
</script>

<style scoped></style>
