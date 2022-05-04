<template>
    <p class="date">{{ eventDate }}</p>
</template>

<script>
export default {
    name: "PrettyDate",
    props: ["date"],
    data: () => ({
        pretty: null,
    }),
    computed: {
        eventDate() {
            const dateObj =
                !!this.date["event_date"] &&
                new Date(
                    this.date["event_date"].slice(0, 4) +
                        "-" +
                        this.date["event_date"].slice(4, 6) +
                        "-" +
                        this.date["event_date"].slice(6, 8)
                );
            return dateObj
                ? dateObj.toLocaleString("et", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
        },
    },
};
</script>

<style scoped>
.date {
    color: black;
    font-weight: bold;
    font-size: 2.5rem;
}
</style>
