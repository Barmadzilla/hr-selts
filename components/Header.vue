<template>
  <header>
    <ContentSection>
      <Navigation />
    </ContentSection>
  </header>
</template>

<script>
import ContentSection from "./ContentSection.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "HeaderBlock",
  components: { ContentSection, Navigation },
};
</script>

<style>
header {
  padding: 2em 0;
  background: white;
  align-self: start;
}
</style>
