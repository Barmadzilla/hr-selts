<template>
    <ContentSection>
        <div class="content">
            <h1>Isikuandmete töötlemise põhimõtted</h1>
            <PrivacyPolicy />
        </div>
    </ContentSection>
</template>
<script>
import ContentSection from "../components/ContentSection.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
export default {
    components: { ContentSection, PrivacyPolicy },
    name: "IsikuandmeteTootlemisePohimotted",
};
</script>
<style scoped>
.main{
      background: url("~/assets/images/bg-diamond.svg") no-repeat center / 90%;
}
.content {
    box-sizing: border-box;
    height: 100%;
    max-width: 100em;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding:var(--container-padding) 0;
}
.info {
    max-width: 300px;
}
.info p {
    font-size: 2.2rem;
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
</style>
