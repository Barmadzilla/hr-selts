<template>
    <section>
        <div class="header">
            <h2>Viimased uudised</h2>
            <NuxtLink to="/posts" class="btn">Uudised</NuxtLink>
        </div>
        <Loading v-if="$fetchState.pending" />
        <div v-else class="container">
            <PostCard v-for="(post, i) in posts" :key="i" :props="post" />
        </div>
    </section>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loading from "./Loading.vue";
export default {
    name: "PostCardsSlider",
    components: { PostCard, Loading },
    data: () => ({
        posts: [],
    }),
    async fetch() {
        this.posts = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/posts?_fields=id,title,excerpt,date,slug,featured_media&per_page=3"
        ).then((res) => res.json());
    }
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    justify-content: center;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
}
.header h2 {
    margin-bottom: 0;
}
@media (max-width: 480px) {
    .container {
    grid-template-columns: repeat(1, 1fr);
}
}
</style>
