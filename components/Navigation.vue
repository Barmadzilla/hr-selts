<template>
    <nav>
        <NuxtLink to="/">
            <img
                :src="require('~/assets/images/logo.svg')"
                alt="HR Selts Logo"
            />
        </NuxtLink>
        <div class="menu">
            <div v-for="(item, i) in menu" :key="i">
                <NuxtLink v-if="!item.sub.length" :to="item.to" class="item">
                    {{ item.name }}
                </NuxtLink>

                <div v-else class="sub-container">
                    <a href="#" class="item" @click="item.open = !item.open">
                        {{ item.name }}
                    </a>
                    <transition name="fade" mode="out-in">
                        <div
                            v-if="item.open"
                            class="submenu"
                            @mouseleave="item.open = false"
                        >
                            <NuxtLink
                                v-for="(subitem, m) in item.sub"
                                :key="m"
                                :to="subitem.to"
                                class="item"
                            >
                                {{ subitem.name }}
                            </NuxtLink>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavigationBlock",
    data() {
        return {
            open: false,
            menu: [
                // { name: 'О нас', to: 'about' },
                // { name: "Родителям", to: "for-parents" },
                // {
                //   name: "Тьюторам",
                //   sub: [
                //     { name: "Уже работаю тьютором", to: "supervision" },
                //     { name: "Хочу стать Тьютором", to: "education" },
                //   ],
                // },
                { name: "Tule liikmeks", to: "/tule-liikmeks" },
                // { name: 'Контакты', to: 'contacts' }
            ],
            wpMenu: [],
        };
    },
    computed: {
        menuData() {
            return this.mapItem(this.wpMenu).filter(
                (item) => !Number(item.parent)
            );
        },
    },
    methods: {
        mapItem(item) {
            const setChildren = (id) => {
                return this.mapItem(
                    item.filter(
                        (item) =>
                            item.menu_item_parent !== "0" &&
                            Number(item.menu_item_parent) === id
                    )
                );
            };
            return item.map(
                (item) =>
                    item.post_status && {
                        open: false,
                        name: item.title,
                        to: item.url.replace("https://api.hrselts.ee", ""),
                        order: item.menu_order,
                        id: item.ID,
                        // status: item.post_status,
                        parent: item.menu_item_parent,
                        sub: setChildren(item.ID),
                    }
            );
        },
    },
    async fetch() {
        const res = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/top-menu"
        );
        const data = await res.json();
        this.menu = this.mapItem(data).filter((item) => !Number(item.parent));
    },
};
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu {
    display: flex;
    gap: 2em;
}
.menu .item {
    color: var(--text-link);
    text-decoration: none;
    font-size: 2.2em;
    font-weight: bold;
    /* margin-left: 2em; */
    transition: all 150ms;
    position: relative;
}
.item:hover {
    text-decoration: underline;
}
.item.nuxt-link-active  {

    color: black;
}
.sub-container {
    position: relative;
}
.submenu {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 1rem 1.8rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    z-index: 2;
    margin-top: 0.5rem;
    transition: all 150ms ease;
    opacity: 1;
    min-width: 14rem;
}
.submenu .item:not(.item:last-child) {
    white-space: nowrap;
    margin-bottom: 0.8rem;
}
.submenu .item {
    font-size: 1.6rem;
}

.fade-enter-active {
    transition: all 150ms ease;
}

.fade-leave-active {
    transition: all 350ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-1em);
}
</style>
