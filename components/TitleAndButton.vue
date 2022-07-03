<template>
    <div class="header">
        <h2>{{ title }}</h2>
        <NuxtLink v-if="button" :to="button.to" class="btn">{{ button.title }}</NuxtLink>
    </div>
</template>

<script>
export default {
    name: "TitleAndButton",
    props: ["title", "button"],
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7.5rem 0 4rem;
}
.header h2 {
    margin: 0;
}
</style>
