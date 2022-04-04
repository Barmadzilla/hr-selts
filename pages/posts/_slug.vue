<template>
    <ContentSection>
        <ArticleContent>
            <transition name="fade" appear mode="out-in">
                <Loading v-if="$fetchState.pending" />
                <div v-else>
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
import PostCardImage from "../../components/PostCardImage.vue";
import ArticleContent from "../../components/ArticleContent.vue";
export default {
    name: "SinglePost",
    components: { PostCardImage, ArticleContent },
    data: () => ({
        post: [],
    }),
    async fetch() {
        this.post = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/posts?slug=${$nuxt.$route.params.slug}&_fields=id,title,content,featured_media,date,categories,author`
        ).then((res) => res.json());
    },
    fetchOnServer: false,
    fallback: false,
};
</script>
