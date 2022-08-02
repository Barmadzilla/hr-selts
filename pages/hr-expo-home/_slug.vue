<template>
    <ContentSection>
        <ArticleContent>
            <transition name="fade" appear mode="out-in">
                <!-- <Loading v-if="$fetchState.pending" /> -->
                <div>
                    <ExpoTabs />
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
import ExpoTabs from "../../components/Expo/ExpoTabs.vue";
export default {
    name: "SinglePost",
    components: { PostCardImage, ArticleContent, ExpoTabs },
    data: () => ({
        // post: [],
    }),
    async asyncData({ params }) {
        const res = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?slug=${params.slug}&_fields=id,title,content,featured_media,date,categories,author`
        );
        const post = await res.json();
        const allPostsRes = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?&_fields=id,parent,slug,title,menu_order,content,featured_media&per_page=100`
        );
        const allPosts = await allPostsRes.json();

        const tabs = allPosts
            .filter((tab) => tab.parent === post[0].id)
            .sort((a, b) => a.menu_order - b.menu_order, 0);

        const partners = allPosts
            .filter((partner) => partner.parent === 950)
            .sort((a, b) => a.menu_order - b.menu_order, 0);

        return { post, tabs, partners };
    },
    // async fetch() {
    //     this.post = await fetch(
    //         `https://api.hrselts.ee/wp-json/wp/v2/posts?slug=${$nuxt.$route.params.slug}&_fields=id,title,content,featured_media,date,categories,author`
    //     ).then((res) => res.json());
    // }
};
</script>
