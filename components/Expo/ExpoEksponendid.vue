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
    name: "ExpoEksponendid",
    data() {
        return {
            members: [
                {
                    title: "COURSY",
                    logo: "coursy_io",
                    link: "https://www.coursy.io/",
                    info: "Muuda uue töötaja sisseelamine ja inimeste arendamine efektiivsemaks. <strong>Coursy</strong> on PARE poolt tunnustatud e-õppe keskkond, mida kasutavad Elisa, Eesti Energia, Coop pank ja pajud teised tuntud Eesti ettevõtted.",
                },
                {
                    title: "Peero",
                    logo: "peero",
                    link: "https://peero.app/",
                    info: "<strong>Peero</strong> on töökaaslas(t)e tunnustamise ja HR analüütika platvorm, mille eesmärk on pöörata tähelepanu ettevõtte väärtustele ja suurepärasele tööle kujundamaks nii toetavat organisatsioonikultuuri. Peero aitab kiirendada ettevõtte väärtuste juurutamist inimeste igapäevasesse käitumisse ja toetab nii positiivse töökeskkonna loomist, võimaldades samaaegselt otsustajatel mõõta töötajate heaolu ja teha andmepõhiseid otsuseid.",
                },
                {
                    title: "COURSY",
                    logo: "coursy_io",
                    link: "https://www.coursy.io/",
                    info: "Muuda uue töötaja sisseelamine ja inimeste arendamine efektiivsemaks. <strong>Coursy</strong> on PARE poolt tunnustatud e-õppe keskkond, mida kasutavad Elisa, Eesti Energia, Coop pank ja pajud teised tuntud Eesti ettevõtted.",
                },
                {
                    title: "Peero",
                    logo: "peero",
                    link: "https://peero.app/",
                    info: "<strong>Peero</strong> on töökaaslas(t)e tunnustamise ja HR analüütika platvorm, mille eesmärk on pöörata tähelepanu ettevõtte väärtustele ja suurepärasele tööle kujundamaks nii toetavat organisatsioonikultuuri. Peero aitab kiirendada ettevõtte väärtuste juurutamist inimeste igapäevasesse käitumisse ja toetab nii positiivse töökeskkonna loomist, võimaldades samaaegselt otsustajatel mõõta töötajate heaolu ja teha andmepõhiseid otsuseid.",
                },
                {
                    title: "COURSY",
                    logo: "coursy_io",
                    link: "https://www.coursy.io/",
                    info: "Muuda uue töötaja sisseelamine ja inimeste arendamine efektiivsemaks. <strong>Coursy</strong> on PARE poolt tunnustatud e-õppe keskkond, mida kasutavad Elisa, Eesti Energia, Coop pank ja pajud teised tuntud Eesti ettevõtted.",
                },
                {
                    title: "Peero",
                    logo: "peero",
                    link: "https://peero.app/",
                    info: "<strong>Peero</strong> on töökaaslas(t)e tunnustamise ja HR analüütika platvorm, mille eesmärk on pöörata tähelepanu ettevõtte väärtustele ja suurepärasele tööle kujundamaks nii toetavat organisatsioonikultuuri. Peero aitab kiirendada ettevõtte väärtuste juurutamist inimeste igapäevasesse käitumisse ja toetab nii positiivse töökeskkonna loomist, võimaldades samaaegselt otsustajatel mõõta töötajate heaolu ja teha andmepõhiseid otsuseid.",
                },
            ],
        };
    },
};
</script>

<style></style>
