<template>
    <div class="placeholder">
        <img v-if="url" :src="url" alt="" />
    </div>
</template>

<script>
export default {
    name: "PostFeaturedImage",
    props: ["id", "bg", "size"],
    data: () => ({
        image: false,
    }),
    computed: {
        url() {
            if (this.image) {
                if (this.size) {
                    if (this.image.sizes[this.size]) {
                        return this.image.sizes[this.size].source_url;
                    } else {
                        return this.image.sizes.full.source_url;
                    }
                }
            }
        },
    },
    async fetch() {
        const res = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/media/" +
                this.id +
                "?_fields=media_details"
        );

        const data = res.status == 200 ? await res.json() : false;
        // console.log(data && media_details);

        // console.log(data.media_details);
        this.image = data ? data.media_details : false;
    },
};
</script>

<style scoped>
.placeholder {
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    width: 100%;
    margin-bottom: 6rem;
}
.placeholder.hide {
    display: none;
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
