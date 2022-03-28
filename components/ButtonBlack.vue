<template>
    <NuxtLink :to="'/' + to" class="btn black"><slot /></NuxtLink>
</template>

<script>
export default {
    name: "BlackButton",
    props: ["to"],
};
</script>
<style scoped>
.btn {
  background: #000;
  display: inline-block;
  padding: .8em 2em;
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-size: 1.4em;
  font-weight: normal;
  line-height: 1;
  border: solid 0.2rem #000;
  transition: all 150ms;
}
.btn:hover {
  background: transparent;
  color: #000;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn:disabled:hover {
  background: var(--main-blue);
  color: white;
}
</style>

