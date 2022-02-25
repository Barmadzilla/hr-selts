<template>
  <footer>
    <content-section>
      <div class="content">
        <div>&copy; 2022 | Eesti Personalijuhtide Selts</div>
        <div>
          <a href="mailto:info@eestipersonalijuhid.ee"
            >info@eestipersonalijuhid.ee</a
          >
        </div>
        <div>Tagasiside</div>
      </div>
    </content-section>
  </footer>
</template>

<script>
import ContentSection from "./ContentSection.vue";
export default {
  name: "FooterBlock",
  components: { ContentSection },
  data() {
    return {
      description:
        "Платформа создана при поддержке гранта InclusivityLab. Сайт подготовлен при финансовой поддержке Европейского Союза. Содержание сайта является предметом ответственности инклюзивного центра «Йом-йом» и не отражает точку зрения Европейского Союза.",
    };
  },
};
</script>

<style scoped>
p {
  color: var(--text-light);
  font-size: 1.2em;
}
footer {
  align-self: end;
  padding: 3em;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5em;
  align-items: center;
}
.content * {
  font-size: 1.6rem;
}
</style>
