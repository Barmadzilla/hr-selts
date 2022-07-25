<template>
    <div class="member">
        <div class="logo">
            <img
                v-if="logo"
                :src="require('~/assets/expo/members/' + logo + '.png')"
                :alt="title"
            />
        </div>
        <div class="info">
            <h3>{{ title }}</h3>
            <p v-html="info" />
            <a :href="link">{{ link }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExpoMember",
    props: ["title", "logo", "info", "link"],
};
</script>

<style scoped>
.member {
    display: flex;
    justify-content: flex-start;
    gap: 4rem;
    background: white;
    border-radius: 2rem;
    padding: 4rem;
    margin-bottom: 4rem;
}
.member:nth-child(even){
    flex-direction: row-reverse;
}
img {
    width: 100%;
}
h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
}
.logo {
    width: 30%;
    flex-shrink: 0;
}
a {
    font-size: 1.2rem;
}
</style>
