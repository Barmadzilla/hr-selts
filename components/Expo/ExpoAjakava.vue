<template>
    <div>
        <h2>Ajakava</h2>
        <div class="schedule">
            <div v-for="(section, i) in data" :key="i" class="section">
                <h3>{{ section.name }}</h3>
                <div class="tab" v-for="(tab, i) in section.table" :key="i"><p>{{tab.time}}</p><p>{{tab.title}}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExpoAjakava",
    data() {
        return {
            data: [
                {
                    name: "Saal 1",
                    table: [
                        { time: "10:00-11:00", title: "Kirjeldus" },
                        { time: "10:00-11:00", title: "Kirjeldus" },
                    ],
                },
                {
                    name: "Saal 2",
                    table: [
                        { time: "10:00-11:00", title: "Kirjeldus" },
                        { time: "10:00-11:00", title: "Kirjeldus" },
                    ],
                },
                {
                    name: "Saal 3",
                    table: [
                        { time: "10:00-11:00", title: "Kirjeldus" },
                        { time: "10:00-11:00", title: "Kirjeldus" },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.schedule {
    display: grid;
    margin-bottom: 4rem;
}
.tab{
    display: grid;
    grid-template-columns: 1fr 3fr;
}
h3{
    margin-bottom: 2rem;
}
.section{
    margin-bottom: 2rem;
}
</style>
