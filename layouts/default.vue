<template>
    <div class="wrapper">
        <Header />
        <main>
            <nuxt />
        </main>
        <Footer />
    </div>
</template>
<script>
export default {
    name: "LayoutMain",
    methods: {
        getWidth() {
             this.$store.commit("add", process.client && window.innerWidth); 
        },
    },
    async mounted() {
        // this.posts = await this.getPosts(this.category[0]);

        this.$nextTick(() => {
            process.client && window.addEventListener("resize", this.getWidth);
        });
        this.getWidth();
    },
    beforeDestroy() {
        process.client && window.removeEventListener("resize", this.onResize);
    },
};
</script>

<style scoped>
.wrapper {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 1fr auto 1fr;
    /* grid-template-rows: auto; */
}
main {
    align-self: stretch;
}
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
    transition: opacity 0.3s;
}
.layout-enter,
.layout-leave-to {
    opacity: 0;
}
</style>
