<template>
    <div v-if="current > 0" class="prev" />
</template>

<script>
export default {
    name: "PrevButton",
    props: ["current"],
};
</script>

<style scoped>
.prev {
    background: #f3eecf;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.prev::after {
    content: "";
    height: 4rem;
    width: 4rem;
    border: 0.3rem solid #c4c4c4;
    border-radius: 50%;
}
.prev {
    background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem center;
    transform: rotate(180deg) translateX(4rem);
}
@media (max-width: 480px) {
    .prev {
        background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem
            center / 25%;
    }
}
</style>
