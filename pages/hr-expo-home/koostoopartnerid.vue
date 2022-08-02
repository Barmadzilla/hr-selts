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
                    <ExpoMember
                            v-for="(partner, i) in partners"
                            :key="i"
                            :title="partner.title.rendered"
                            :logo="partner.featured_media"
                            :info="partner.content.rendered"
                        />
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
    name: "ExpoKoostoopartnerid",
    components: { PostCardImage, ArticleContent, ExpoTabs },
    async asyncData({ params }) {
        const res = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?slug=koostoopartnerid&_fields=id,title,content,featured_media,date,categories,author`
        );
        const post = await res.json();
        const allPostsRes = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?&_fields=id,slug,title,menu_order,content,featured_media&per_page=100&parent=914`
        );
        const allPosts = await allPostsRes.json();

        const partners = allPosts
            .sort((a, b) => a.menu_order - b.menu_order, 0);
        return { post, partners };
    },
};
</script>

<style></style>
