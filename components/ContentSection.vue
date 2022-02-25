<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContentSection",
  props: {
    color: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
section.gray {
  background: var(--bg-light-gray);
}
section.theme {
  background: var(--theme-block-bg-color);
  padding-bottom: var(--section-padding);
}

section {
  padding: var(--section-padding) 0;
}
section:last-child {
  padding-bottom: var(--section-padding);
}
section.header {
  padding: var(--header-padding);
}
section.footer {
  padding: var(--footer-padding);
  margin-top: var(--footer-padding);
}

.container {
  margin: 0 auto;
  width: 100%;
  min-width: 1024px;
  padding: 0 var(--container-padding);
}
section.theme.action {
  padding: 4rem 0;
}
</style>
