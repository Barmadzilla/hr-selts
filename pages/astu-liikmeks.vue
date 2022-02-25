<template>
    <ContentSection>
        <div class="content">
            <BigForm title="Astu liikmeks" :fields="fields" />
        </div>
    </ContentSection>
</template>
<script>
import ContentSection from "../components/ContentSection.vue";
import BigForm from "../components/Forms/BigForm.vue";
export default {
    components: { ContentSection, BigForm },
    name: "IndexPage",
    data() {
        return {
            fields: [
                [
                    {
                        label: "",
                        placeholder: "Имя Фамилия",
                        type: "text",
                        name: "FullName",
                        value: "",
                        required: true,
                    },
                    {
                        placeholder: "Ваш телефон",
                        type: "text",
                        name: "phone",
                        value: "",
                        required: true,
                    },
                    {
                        label: "",
                        placeholder: "E-mail для связи",
                        type: "email",
                        value: "",
                        name: "email",
                        required: true,
                    },
                    {
                        type: "checkbox",
                        value: [],
                        name: "personalData",
                        chose: ["Согласен на обработку данных"],
                        required: true,
                    },
                ],
            ],
        };
    },
};
</script>
<style scoped>
.content {
    box-sizing: border-box;
    background: url("~/assets/images/bg-diamond.svg") no-repeat center / contain;
    align-items: center;
    padding: var(--section-padding) 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
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
