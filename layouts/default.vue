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
    name: "LayoutMain"
};
</script>

<style scoped>
.wrapper {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 1fr fit-content(100%) 1fr;
    /* grid-template-rows: auto; */
}
main{
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
