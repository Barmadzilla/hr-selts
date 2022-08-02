<template>
    <div class="tabs">
        <div
            v-for="(tab, i) in tabs"
            :key="i"
            class="tab"
            :class="{ show: tab.show }"
        >
            <nuxt-link :to="`/hr-expo-home/${tab.slug}`">
                {{ tab.title.rendered }}
            </nuxt-link>
        </div>
        <a
            class="tab external"
            href="https://fienta.com/hr-expo"
            target="_blank"
            >OSTA PILET!</a
        >
    </div>
</template>

<script>
export default {
    name: "ExpoTabs",
    data() {
        return {
            tabs: [],
        };
    },
    async fetch() {
        const allPostsRes = await fetch(
            `https://api.hrselts.ee/wp-json/wp/v2/pages?&_fields=id,parent,slug,title,menu_order,content,featured_media&per_page=100`
        );
        const allPosts = await allPostsRes.json();

        this.tabs = allPosts
            .filter((tab) => 908 === tab.parent)
            .sort((a, b) => a.menu_order - b.menu_order, 0);
    },
};
</script>

<style scoped>
.tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    box-sizing: border-box;
}

.tab.show {
    background: white;
    color: black;
}
.tab a,
a {
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    background: black;
    color: white;
    border: 1px solid black;
    display: flex;
}
.tab a.nuxt-link-active {
    background: white;
    color: black;
}
@media (max-width: 480px) {
    .tabs {
       flex-direction: column;
       gap: 1.5rem;
    }
}
</style>
