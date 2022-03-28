<template>
    <div>
        <h2>Viimased uudised</h2>
        <div class="container">
            <PostCard v-for="(post, i) in posts" :key="i" :props="post" />
        </div>
    </div>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
    name: "PostCardsSlider",
    components: { PostCard },
    data: () => ({
        posts: [],
    }),
    async fetch() {
        this.posts = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,slug,featured_media&per_page=3"
        ).then((res) => res.json());
    },
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
}

</style>
