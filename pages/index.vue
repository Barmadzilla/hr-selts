<template>
    <ContentSection>
        <div class="content">
            <div class="info">
                <h1>Eesti HR Selts</h1>
                <p>
                    Seltsi põhiline eesmärk on luua personalivaldkonna
                    huvilistest inimestest üksteist toetav ja innustav
                    võrgustik.
                </p>
                <p>
                    Seltsi märksõnad on #kiirus, #agiilsus, #avatus,
                    #uuendusmeelsus, #ausus, #koossuudamepalju
                </p>
                <NuxtLink to="/loe-meist" class="btn">Loe meist</NuxtLink>
            </div>
            <div class="placeholder">
                <img
                    :src="require(`~/assets/images/hr-map.jpg`)"
                    alt="Eesti HR Selts map"
                />
            </div>
        </div>
        <PostCardsSlider />
    </ContentSection>
</template>
<script>
import ContentSection from "../components/ContentSection.vue";
import PostCardsSlider from "../components/PostCardsSlider.vue";

export default {
    components: { ContentSection, PostCardsSlider },
    name: "IndexPage",
};
</script>
<style scoped>
.content {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 35% 65%;
    align-items: center;
    padding: 6rem 0;
}
.info {
    max-width: 300px;
}
.info p {
    font-size: 1.8rem;
}
.placeholder {
    display: flex;
    max-height: 70vh;
    width: 100%;
}

img {
    object-fit: contain;
    width: 100%;
}
@media (max-width: 480px) {
    .content {
        grid-template-columns: 1fr;
        padding: var(--container-padding) 0;
        grid-gap: 5em;
        max-height: unset;
    }
}
</style>
