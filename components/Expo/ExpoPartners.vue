<template>
    <div>
        <h2>Eksponendid</h2>
        <ExpoMember
            v-for="member in members"
            :key="member.title"
            :title="member.title"
            :logo="member.logo"
            :link="member.link"
            :info="member.info"
        />
    </div>
</template>

<script>
import ExpoMember from "./ExpoMember.vue";
export default {
    components: { ExpoMember },
    name: "ExpoPartners",
    data() {
        return {
            members: [
                {
                    title: "Rose de paris",
                    logo: "rosedeparis",
                    link: "http://www.peopleoperations.eu/",
                    info: "Rose de Paris kaubamärk on loodud kahe õe poolt, kes soovivad pakkuda romantilist lillede kinkimise traditsiooni. Rose de Paris roosikarbid koosnevad tõelistest Ecuadori kauasäilivatest roosidest ja nende eluiga võib korralikult hooldades olla kauem kui üks aasta.",
                },
            ],
        };
    },
};
</script>

<style></style>
