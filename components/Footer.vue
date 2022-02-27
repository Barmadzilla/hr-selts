<template>
    <footer>
        <content-section>
            <div class="content">
                <div>&copy; 2022 | Eesti HR Selts</div>
                <div>
                    <a href="mailto:info@eestipersonalijuhid.ee"
                        >info@hrselts.ee</a
                    >
                </div>
                <div class="socials">
                    <a v-for="(s, i) in social" :key="i" :href="s.link">
                        <img
                            :src="require(`~/assets/icons/${s.name}.svg`)"
                            :alt="s.name + ' icon'"
                        />
                    </a>
                </div>
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
            description: "",
            social: [
                // { name: "facebook", link: "#" },
                // { name: "instagram", link: "#" },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/groups/8872870/",
                },
            ],
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
    padding: 0 0 3em;
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
.socials {
    display: flex;
    gap: 1rem;
}
@media (max-width: 480px) {
    .content * {
        font-size: 1.4rem;
        gap: 1rem;
    }
}
</style>
