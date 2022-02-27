<template>
  <nav>
    <NuxtLink to="/">
      <img :src="require('~/assets/images/logo.svg')" alt="Логотип ТьюторХаб" />
    </NuxtLink>
    <div class="menu">
      <div v-for="(item, i) in menu" :key="i">
        <NuxtLink v-if="!item.sub" :to="item.to" class="item">
          {{ item.name }}
        </NuxtLink>

        <div v-else class="sub-container">
          <a href="#" class="item" @click="open = !open">
            {{ item.name }}
          </a>
          <transition name="fade" mode="out-in">
            <div v-if="open" class="submenu" @mouseleave="open = false">
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
        { name: "Tule liikmeks", to: "tule-liikmeks" },
        // { name: 'Контакты', to: 'contacts' }
      ],
    };
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
.item:hover{
  text-decoration: underline;
}
.item.active-link {
  text-decoration: underline;
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
}
.submenu .item:not(.item:last-child) {
  white-space: nowrap;
  margin-bottom: 0.8rem;
}
.submenu .item {
  font-size: 1.2rem;
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
