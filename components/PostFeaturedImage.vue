<template>
    <div class="placeholder">
        <img v-if="image" :src="image.large.source_url" alt="" />
    </div>
</template>

<script>
export default {
    name: "PostFeaturedImage",
    props: ["id"],
    data: () => ({
        image: null,
    }),
    async fetch() {
        if (this.id) {
            const res = await fetch(
                "https://api.hrselts.ee/wp-json/wp/v2/media/" +
                    this.id +
                    "?_fields=media_details"
            );
            const data = await res.json();
            this.image = data?.media_details ? data.media_details.sizes : false;
        }
    },
};
</script>

<style scoped>
.placeholder {
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    width: 100%;
    background: #00000015;
    margin-bottom: 6rem;
}
.placeholder img {
    margin: 0;
    padding: 0;
    object-fit: cover;
    width: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
}
</style>
