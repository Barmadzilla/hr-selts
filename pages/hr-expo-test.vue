<template>
    <ContentSection>
        <div class="content">
            <h1>HR EXPO</h1>
            <div class="tabs">
                <div
                    v-for="(tab, i) in tabs"
                    :key="i"
                    class="tab"
                    :class="{ show: tab.show }"
                    @click="toggle(i)"
                >
                    {{ tab.name }}
                </div>
                <a class="tab external" href="https://fienta.com/hr-expo" target="_blank">OSTA PILET!</a>
            </div>
            <ExpoAbout v-if="tabs[0].show"/>
            <ExpoEksponendid v-if="tabs[1].show"/>
            <ExpoAjakava v-if="tabs[2].show"/>
            <ExpoPartners v-if="tabs[3].show"/>
        </div>
    </ContentSection>
</template>

<script>
import ExpoAbout from '../components/Expo/ExpoAbout.vue';
export default {
    components: { ExpoAbout },
 
    name: "HrExpo",
    methods: {
        toggle(index) {
            this.tabs = this.tabs.map((item) => ({
                name: item.name,
                show: false,
            }));
            this.tabs[index].show = true;
        },
    },
    data() {
        return {
            tabs: [
                { name: "About", show: true },
                { name: "Eksponendid", show: false },
                { name: "Ajakava", show: false },
                { name: "Koostööpartnerid", show: false },
            ],
        };
    },
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
a{
    text-decoration: none;
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
