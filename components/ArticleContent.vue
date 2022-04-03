<template>
    <article class="content">
        <slot />
    </article>
</template>

<script>
export default {
    name: "ArticleContent",
};
</script>

<style scoped>
article h2,
article h3,
article h4,
article h5,
article h6 {
    margin-bottom: 1em;
}
article h2 {
    font-size: 3.5em;
}
article h3 {
    font-size: 3em;
}
article h4 {
    font-size: 3em;
    font-weight: normal;
}
article h5 {
    font-size: 2em;
}
article h6 {
    font-size: 2em;
    font-weight: normal;
}
img {
    max-width: 100%;
}
.content {
    box-sizing: border-box;
    max-width: 80em;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: var(--container-padding) 0;
}
.content figure.wp-block-image img {
    margin-top: 4em;
    object-fit: contain;
    width: 100% !important;
    opacity: 1;
}
@media (max-width: 480px) {
    .content {
        padding: var(--container-padding) 0;
        max-height: unset;
    }
}
</style>
