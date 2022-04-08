<template>
    <transition name="fade" appear mode="out-in">
        <div class="post-card" :class="{ white: allWhite }">
            <div>
                <PostCardImage :id="props.featured_media" />
                <div class="description">
                    <h2>{{ props.title.rendered }}</h2>
                    <div v-html="props.excerpt.rendered"></div>
                </div>
            </div>
            <div class="info">
                <PrettyDate :date="props.date" />
                <ButtonBlack :to="'posts/' + props.slug"
                    >Loe rohkem</ButtonBlack
                >
            </div>
        </div>
    </transition>
</template>

<script>
import PostCardImage from "./PostCardImage.vue";
import PrettyDate from "./PrettyDate.vue";
import ButtonBlack from "./ButtonBlack.vue";
export default {
    name: "PostCard",
    props: {
        props: {
            type: Object,
            default: null,
        },
        allWhite: {
            type: Boolean,
            default: false,
        },
    },
    components: { PostCardImage, PrettyDate, ButtonBlack },
};
</script>

<style scoped>
h2 {
    font-size: 2rem;
}
.post-card {
    background: #eec9db;
    padding: 3rem;
    border-radius: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
}
.post-card:nth-child(2) {
    background: #ddd7bc;
}
.post-card:nth-child(3) {
    background: #fff;
}
.post-card.white {
    background: #fff;
}
.description {
    margin-top: 2rem;
}
.info {
    justify-self: end;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
}
.info p {
    margin-bottom: 0;
}
</style>
