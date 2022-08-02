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
    name: "Eksponendid",
};
</script>


