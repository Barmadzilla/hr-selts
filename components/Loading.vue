<template>
    <transition name="fade" appear>
        <div class="loading">Loading...</div>
    </transition>
</template>

<script>
export default {};
</script>

<style scoped>
p {
    text-align: center;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateX(1rem);
}
.loading {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 22rem;
    height: 18rem;
    margin: 0 auto;
    width: 100%;
    padding-top: 6rem;
    background: url("~/assets/images/bg-diamond.svg") no-repeat center / contain;
    font-size: 1.3rem;
    font-weight: bold;
    color: #00000060;
    text-transform: uppercase;
}
</style>
