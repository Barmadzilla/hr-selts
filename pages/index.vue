<template>
  <ContentSection>
    <div class="content">
      <div class="info">
        <h1>Eesti Personalijuhid</h1>
        <p>
          Eesti Personalijuhtide Selts on Eesti suurim, ägedaim, parim ja
          populaarseim personalivaldkonna huviliste selts. (PARE 👅)
        </p>
      </div>
      <div class="placeholder">
        <img :src="require(`~/assets/images/hr-map.png`)" alt="" />
      </div>
    </div>
  </ContentSection>
</template>
<script>
import ContentSection from "../components/ContentSection.vue";
export default {
  components: { ContentSection },
  name: "IndexPage",
};
</script>
<style scoped>
.content {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  padding: var(--section-padding) 0;
  max-height: 75vh;
}
.info{
  max-width: 300px;
}
.info p{
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
