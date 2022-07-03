<template>
    <nav>
        <NuxtLink to="/">
            <img
                :src="require('~/assets/images/logo.svg')"
                alt="HR Selts Logo"
            />
        </NuxtLink>
        <div class="burger" v-if="!mobile" @click="mobile = true">
            <span />
            <span />
            <span />
        </div>

        <div
            v-if="mobile || windowWidth > 500"
            class="menu"
            @click="mobile = false"
        >
            <div class="close" />
            <NuxtLink to="/">
                <img
                    class="logo"
                    :src="require('~/assets/images/logo.svg')"
                    alt="HR Selts Logo"
                />
            </NuxtLink>
            <div v-for="(item, i) in menu" :key="i">
                <NuxtLink
                    v-if="!item.sub.length"
                    :to="item.to"
                    class="item"
                    :class="{ tule: item.name === 'Tule liikmeks' }"
                >
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
            mobile: false,
            windowWidth: "",
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
        getWidth() {
            this.windowWidth = process.client && window.innerWidth;
        },
    },
    async fetch() {
        const res = await fetch(
            "https://api.hrselts.ee/wp-json/wp/v2/top-menu"
        );
        const data = await res.json();
        this.menu = this.mapItem(data).filter((item) => !Number(item.parent));
    },
    async mounted() {
        // this.posts = await this.getPosts(this.category[0]);

        this.$nextTick(() => {
            process.client && window.addEventListener("resize", this.getWidth);
        });
        this.getWidth();
    },
    beforeDestroy() {
        process.client && window.removeEventListener("resize", this.onResize);
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
    color: #000000;
    text-decoration: none;
    font-size: 2.2em;
    /* margin-left: 2em; */
    transition: all 150ms;
    position: relative;
}
.menu .item.tule {
    color: var(--text-link);
    text-decoration: none;
    font-size: 2.2em;
    font-weight: bold;
    /* margin-left: 2em; */
    transition: all 150ms;
    position: relative;
}
.item:hover {
    color: black;
}
.item.nuxt-link-active {
    position: relative;
}
.item.nuxt-link-active:after {
    position: absolute;
    bottom: -7rem;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    content: "";
    height: 4rem;
    width: 4rem;
    background: #f3eecf;
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
.logo {
    display: none;
}
@media (max-width: 480px) {
    .menu {
        display: block;
        width: 100vw;
        height: 100vh;
        background: #ffffff50;
        backdrop-filter: blur(1.3rem);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        box-sizing: border-box;
        padding: 3.5rem 8rem;
    }
    .menu .item {
        font-size: 3rem;
        background: #fff;
        box-shadow: 0.4rem 0.4rem 1rem #00000030;
        width: 100%;
        display: block;
        padding: 1rem 3rem;
        border-radius: 1rem;
        box-sizing: border-box;
        margin-bottom: 2rem;
        text-align: center;
    }
    .menu .item.tule {
        font-size: 3rem;
    }
    .logo {
        margin: 0 auto;
        display: block;
        margin-bottom: 2rem;
        width: 34vw;
    }
    .close {
        position: absolute;
        right: 3rem;
        top: 3rem;
        width: 5rem;
        height: 5rem;
        transform: rotate(45deg);
        cursor: pointer;
    }
    .close::after {
        content: "";
        position: absolute;
        width: 2px;
        background: #000;
        height: 100%;
        top: 0;
        left: calc(50% - 0.1px);
    }
    .close::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background: #000;
        top: calc(50% - 1px);
    }
    .burger {
        height: 3.5rem;
        width: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
    .burger span {
        display: block;
        width: 100%;
        height: 2px;
        background: #000;
    }
    .menu .item.nuxt-link-active{
        background: var(--text-link);
        color:white
    }
    .menu .item.nuxt-link-active:after {
        display: none;
    }
}
</style>
