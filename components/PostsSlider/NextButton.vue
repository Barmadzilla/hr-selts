<template>
    <div v-if="current < total - 1" class="next" />
</template>

<script>
export default {
    name: "NextButton",
    props: ["current","total"],
};
</script>

<style scoped>
.next {
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
.next::after {
    content: "";
    height: 4rem;
    width: 4rem;
    border: 0.3rem solid #c4c4c4;
    border-radius: 50%;
}
.next {
    transform: translateX(4rem);
    background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem center;
}
@media (max-width: 480px) {
    .next {
        /* transform: unset; */
        background: #f3eecf url("~/assets/images/arr.svg") no-repeat 2.4rem
            center / 25%;
    }
}
</style>
