<template>
    <div v-if="post[0]">
        <ExpoTabs />
        <h1>{{ post[0].title.rendered }}</h1>
        <PostFeaturedImage
            v-if="this.post[0].featured_media"
            :id="this.post[0].featured_media"
            size="large"
        />
        <div v-html="this.post[0].content.rendered" />
        <div v-if="partners.length" class="partners">
            <h2>Koostööpartnerid</h2>
            <ExpoMember
                v-for="(partner, i) in partners"
                :key="i"
                :title="partner.title.rendered"
                :logo="partner.featured_media"
                :info="partner.content.rendered"
            />
        </div>
    </div>
</template>

<script>
import ExpoAbout from "./ExpoAbout.vue";
import ExpoMember from "./ExpoMember.vue";
import PostFeaturedImage from "../PostFeaturedImage.vue";
export default {
    name: "ExpoHome",
    components: { ExpoAbout, ExpoMember, PostFeaturedImage },
    data() {
        return {
            post: [],
            partners: [],
        };
    },
    async fetch() {
        const res = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?slug=hr-expo-home&_fields=id,title,content,featured_media`
        );
        this.post = await res.json();

        const allPostsRes = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?&_fields=id,parent,slug,title,menu_order,content,featured_media&per_page=100&parent=950`
        );
        const allPosts = await allPostsRes.json();

        this.partners = allPosts.sort((a, b) => a.menu_order - b.menu_order, 0);
    },
};
</script>

<style scoped> 
h2{
    margin-top: 5rem;
}
</style>
