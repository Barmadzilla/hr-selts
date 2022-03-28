<template>
    <p class="date">{{ pretty }}</p>
</template>

<script>
export default {
    name: "PrettyDate",
    props: ["date"],
    data: () => ({
        pretty: null,
    }),
    mounted() {
        const dateObj = new Date(this.date);
        this.pretty = dateObj.toLocaleString("ru", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
    },
};
</script>

<style>
.date {
    color: #696969;
}
</style>
