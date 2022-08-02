<template>
    <div class="member">
        <div class="logo" :class="{ hide: logo === 0 }">
            <PostFeaturedImage :id="logo" size="medium" />
        </div>
        <div class="info">
            <h3>{{ title }}</h3>
            <div v-html="info" />
        </div>
    </div>
</template>

<script>
import PostFeaturedImage from "../PostFeaturedImage.vue";
export default {
    name: "ExpoMember",
    props: ["title", "logo", "info", "link"],
    components: { PostFeaturedImage },
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
    box-sizing: border-box;
}
.member:nth-child(even) {
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
.logo.hide {
    display: none;
}
.member .info p {
    font-size: 1em;
}
.member .info p a {
    font-size: 0.8em !important;
}
@media (max-width: 480px) {
    /* .member:nth-child(even) {
        flex-direction: unset;
    } */
    .member,
    .member:nth-child(even) {
        flex-direction: column;
    }
    .member .info p {
        /* hyphens: auto; */
        word-wrap: break-word;
    }
    .logo {
        width: 100%;
    }
    .placeholder {
        margin-bottom: 0;
    }
}
</style>
