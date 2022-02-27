<template>
    <ContentSection>
        <div class="content">
            <h1>Eesti HR Selts</h1>
            <div>
                <!-- <p>
                    Eesti HR Selts kasvas välja Eesti personalijuhtide LinkedIni
                    grupist, mis loodi kaks aastat tagasi ja on selle ajaga
                    saanud väga populaarseks valdkonna huviliste hulgas.
                </p>
                <p>
                    Eesti HR Seltsi põhiliseks eesmärgiks on koondada kokku
                    Eesti personalijuhtimise valdkonna huvilised, toetada
                    erialast võrgustamist ning valdkonna arengut.
                </p>
                <p>
                    Selts soovib tuua uudset, värsket ja agiilsemat lähenemist
                    personalijuhtimisse ja toetada järelkasvu.
                </p> -->

                <p>
                    Eesti aktiivsed personalijuhid asutasid 28. veebruaril Eesti
                    HR Seltsi, mis oma ligi 1400-liikmelise kogukonnaga
                    LinkedInis on oluliseks personalijuhtimise valdkonna
                    mõjutajaks ja uuendajaks Eestis. Seltsingu asutasid 14
                    personalivaldkonnaga seotud Eesti tipptegijat.
                </p>
                <p>
                    Eesti HR Selts kasvas välja Eesti personalijuhtide LinkedIni
                    grupist, mis loodi kaks aastat tagasi ja on selle ajaga
                    saanud väga populaarseks valdkonna huviliste hulgas. “Oleme
                    aktiivsemate grupi liikmetega õhinapõhiselt uut gruppi
                    vedanud kaasates palju erinevate vajadustega ja taustadega
                    personalivaldkonna tegijaid ning tõstatanud päevakajalisi
                    aruteluteemasid. Vajadust taolise seltsingu ellukutsumiseks
                    on näidanud grupi väga kiire areng kui ka meie liikmetelt
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
                    agiilsemat lähenemist, mida oma seltsinguga saamegi
                    pakkuda,” selgitab Tamme seltsingu väärtust.
                </p>
                <p>
                    Seni on võrgustikuga korraldatud erinevaid kogukonnale
                    suunatud tegevusi nii virtuaalselt kui ka füüsiliste
                    kohtumiste vormis. Seltsingu juhtgruppi kuuluvad tuntud
                    Eesti personalijuhid Helo Tamme, Palmi Lindjärv, Gelly
                    Mikko, Sirli Spelman ja Helen Pärli.
                </p>
                <p>
                    Lisaks juhtgrupi liikmetele on Eesti HR Seltsi
                    asutajaliikmeteks Marge Litvinova, Renita Käsper, Liina
                    Hindremäe, Egle Saska, Berit Grossberg, Aleksander Daniel
                    Matikainen, Jüri Saarma, Riina Einberg ja Hanno Ahonen.
                </p>
                <p>
                    Eesti HR Seltsiga on oodatud liituma kõik
                    personalijuhtimisest huvituvad entusiastid: nii valdkonnas
                    pikka aega toimetanud kui ka alles esimesi samme astujad,
                    aga ka need, kelle töökohustuste hulka personalitööga
                    seonduv osaliselt kuulub või valdkonnana huvi pakub.
                    Seltsinguga liitumine ja liikmelisus on tasuta.
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
</style>
