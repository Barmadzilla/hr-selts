<template>
    <ContentSection>
        <ArticleContent>
            <transition name="fade" appear mode="out-in">
                <ExpoHome />
            </transition>
        </ArticleContent>
    </ContentSection>
</template>

<script>
import ExpoAbout from "../../components/Expo/ExpoAbout.vue";
import ExpoMember from "../../components/Expo/ExpoMember.vue";
export default {
    components: { ExpoAbout, ExpoMember },
    name: "HrExpo",
};
</script>

<style scoped>
.content {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 6rem 0;
    max-width: 95rem;
    margin: 4rem auto 0;
}
.tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
}
.tab {
    font-size: 1.6rem;
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    background: black;
    color: white;
}
.tab.show {
    background: white;
    color: black;
}
a {
    text-decoration: none;
}
.partners {
    margin-top: 5rem;
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
