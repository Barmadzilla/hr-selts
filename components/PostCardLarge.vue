<template>
    <div class="post-card">
        <PostCardImage :id="props.featured_media" />
        <div class="content">
            <div class="description">
                <h2>{{ props.title.rendered }}</h2>
                <div v-html="props.excerpt.rendered"></div>
            </div>
            <div class="info">
                <PrettyDate :date="props.date" />
                <ButtonBlack :to="'posts/' + props.slug"
                    >Loe rohkem</ButtonBlack
                >
            </div>
        </div>
    </div>
</template>

<script>
import PostCardImage from "./PostCardImage.vue";
import PrettyDate from "./PrettyDate.vue";
import ButtonBlack from "./ButtonBlack.vue";
export default {
    name: "PostCardLarge",
    props: {
        props: {
            type: Object,
            default: null,
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
    background: #fff;
    padding: 3rem;
    border-radius: 2rem;
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 3fr 5fr;
    margin-bottom: 3rem;
    transition: all 450ms;

}
.post-card:hover {
    box-shadow: 0.3rem 0.4rem 0 #00000025;
    transform: translate(-0.3rem, -0.4rem);
}
.content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
