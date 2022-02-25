<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
export default {
  name: "LayoutMain",
  components: { Footer, Header },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  min-height: 100vh;
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
