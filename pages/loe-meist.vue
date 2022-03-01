<template>
    <ContentSection>
        <div class="content">
            <h1>Eesti HR Selts</h1>
            <div>
                <p>
                    Eesti aktiivsed personalijuhid asutasid 28. veebruaril Eesti
                    HR Seltsi, mis oma ligi 1400-liikmelise kogukonnaga
                    LinkedInis on oluliseks personalijuhtimise valdkonna
                    mõjutajaks ja uuendajaks Eestis. Seltsi asutasid 14
                    personalivaldkonnaga seotud Eesti tipptegijat.
                </p>
                <p>
                    Eesti HR Selts kasvas välja Eesti personalijuhtide LinkedIni
                    grupist, mis loodi kaks aastat tagasi ja on selle ajaga
                    saanud väga populaarseks valdkonna huviliste hulgas. “Oleme
                    aktiivsemate grupi liikmetega õhinapõhiselt uut gruppi
                    vedanud kaasates palju erinevate vajadustega ja taustadega
                    personalivaldkonna tegijaid ning tõstatanud päevakajalisi
                    aruteluteemasid. Vajadust taolise seltsi ellukutsumiseks on
                    näidanud grupi väga kiire areng kui ka meie liikmetelt
                    saadud tagasiside”, selgitab Helo Tamme seltsingu loomise
                    tausta.
                </p>
                <p>
                    Seltsi põhiline eesmärk on luua personalivaldkonna
                    huvilistest inimestest üksteist toetav ja innustav
                    võrgustik. Seltsi märksõnad on #kiirus #agiilsus #avatus
                    #uuendusmeelsus #ausus #lihtsus #koossuudamepalju. “Kuigi
                    Eestis on pikalt personalivaldkonna eestvedajana olnud ka
                    teisi nii formaalseid kui mitteformaalseid ühendusi, leiame,
                    et tänane kiiresti muutuv maailm ja seega ka
                    personalivaldkond vajavad uudsemat, kiiremat, värskemat ja
                    agiilsemat lähenemist, mida oma seltsiga saamegi pakkuda,”
                    selgitab Tamme seltsingu väärtust.
                </p>
                <p>
                    Seni on võrgustikuga korraldatud erinevaid kogukonnale
                    suunatud tegevusi nii virtuaalselt kui ka füüsiliste
                    kohtumiste vormis.
                </p>
                <p>
                    Seltsi asutasid Eesti oma valdkonna tipptegijad:
                    <a
                        href="https://www.linkedin.com/in/helo-tamme/"
                        target="_blank"
                        >Helo Tamme</a
                    >,
                    <a href="https://www.linkedin.com/in/palmi/" target="_blank"
                        >Palmi Lindjärv</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/gelly-mikko/"
                        target="_blank"
                        >Gelly Mikko</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/sirlispelman/"
                        target="_blank"
                        >Sirli Spelman</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/helenparli-your-talent-partner/"
                        target="_blank"
                        >Helen Pärli</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/marge-litvinova/"
                        target="_blank"
                        >Marge Litvinova</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/renitak%C3%A4sper/"
                        target="_blank"
                        >Renita Käsper</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/liinahindrem%C3%A4e/"
                        target="_blank"
                        >Liina Hindremäe</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/egle-saska/"
                        target="_blank"
                        >Egle Saska</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/berit-grossberg/"
                        target="_blank"
                        >Berit Grossberg</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/admatikainen/"
                        target="_blank"
                        >Aleksander Daniel Matikainen</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/saarma/"
                        target="_blank"
                        >Jüri Saarma</a
                    >,
                    <a
                        href="https://www.linkedin.com/in/riinaeinberg/"
                        target="_blank"
                        >Riina Einberg</a
                    >, ja
                    <a
                        href="https://www.linkedin.com/in/hanno-ahonen/"
                        target="_blank"
                        >Hanno Ahonen</a
                    >.
                </p>
                <p>
                    Eesti HR Seltsiga on oodatud liituma kõik
                    personalijuhtimisest huvituvad entusiastid: nii valdkonnas
                    pikka aega toimetanud kui ka alles esimesi samme astujad,
                    aga ka need, kelle töökohustuste hulka personalitööga
                    seonduv osaliselt kuulub või valdkonnana huvi pakub.
                    Seltsiga liitumine ja liikmelisus on tasuta.
                </p>
                <p>
                    <a href="https://drive.google.com/file/d/15vYN2ZAt4vDXFFswYFD9cRBuKZ5QQyKo/view" target="_blank">Tutvu Eesti HR Seltsi seltsingulepinguga</a>
                </p>
                <img :src="require(`~/assets/images/hr-map.png`)" alt="" />
            </div>
        </div>
    </ContentSection>
</template>
<script>
import ContentSection from "../components/ContentSection.vue";
export default {
    components: { ContentSection },
    name: "LoeMeist",
};
</script>
<style scoped>
.content {
    box-sizing: border-box;
    max-width: 80em;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: var(--container-padding) 0;
}
img {
    margin-top: 4em;
    object-fit: contain;
    width: 100%;
    opacity: 1;
}
@media (max-width: 480px) {
    .content {
        padding: var(--container-padding) 0;
        max-height: unset;
    }
}
</style>
