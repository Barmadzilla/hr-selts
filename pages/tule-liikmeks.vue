<template>
    <ContentSection>
        <div class="content">
            <h1>Eesti HR Seltsi liitumise avaldus</h1>
            <p>
                Eesti Personalijuhtide Seltsinguga on oodatud liituma kõik
                personalijuhtimisest huvituvad entusiastid: nii valdkonnas pikka
                aega toimetanud kui ka alles esimesi samme astujad, aga ka need
                kelle töökohustuste hulka personalitööga seonduv osaliselt
                kuulub või valdkonnana huvi pakub.
            </p>
            <p>Seltsinguga liitumine ja liikmelisus on tasuta.</p>
            <p>
                Seltsinguga liitumiseks tuleb täita käesolev liitumise avaldus.
            </p>
            <BigForm title="Tule liikmeks" :fields="fields" />
        </div>
    </ContentSection>
</template>
<script>
import ContentSection from "../components/ContentSection.vue";
import BigForm from "../components/Forms/BigForm.vue";
export default {
    components: { ContentSection, BigForm },
    name: "FormPage",
    data() {
        return {
            fields: [
                [
                    {
                        label: "",
                        placeholder:
                            "Too välja, miks soovid seltsinguga liituda?",
                        type: "text",
                        value: "",
                        name: "reason",
                        required: true,
                    },
                    {
                        label: "",
                        placeholder: "Ees- ja perekonnanimi",
                        type: "text",
                        name: "FullName",
                        value: "",
                        required: true,
                    },
                    {
                        label: "",
                        placeholder: "Isiklik e-posti aadress",
                        type: "email",
                        value: "",
                        name: "email",
                        required: true,
                    },
                    {
                        placeholder: "Telefoninumber",
                        type: "text",
                        name: "phone",
                        value: "",
                        required: true,
                    },
                    {
                        label: "Olen nõus saama HR Seltsilt teavet elektroonposti teel",
                        message: "Nõusolek teave saamiseks",
                        type: "radio",
                        value: [],
                        chose: ["Jah", "Ei"],
                        required: true,
                    },
                    // {
                    //     type: "separator",
                    // },
                    // {
                    //     label: "Sinu kompetentsid, mille osas oled valmis teisi seltsinglasi toetama",
                    //     type: "checkbox",
                    //     value: [],
                    //     name: "competencies",
                    //     chose: [
                    //         "Personaliarvestus",
                    //         "Personali dokumentatsiooni haldamine",
                    //         "Sourcing",
                    //         "Värbamine ja valik",
                    //         "Uue töötaja sisseelamine",
                    //         "Värbamisturundus",
                    //         "Tööandja bränding",
                    //         "Personali planeerimine",
                    //         "Töötajate tasustamine",
                    //         "Töötajate hüved",
                    //         "Tööseadusandlus",
                    //         "Vaimne tervis ja läbipõlemine",
                    //         "Töötajate heaolu, sh vaimse tervise ja läbipõlemise teemad",
                    //         "Mitmekesisus ja kaasamine",
                    //         "Töötajate järelkasv",
                    //         "Mentorlus ja coaching",
                    //         "Tööajaarvestus",
                    //         "Personalijuhtimine startupisInimeste koolitamine ja arendamine",
                    //         "Personalitöö tarkvara",
                    //         "Värbamistarkvara",
                    //         "Töösuhete lõpetamine ja väljajuhtimine",
                    //         "Talendijuhtimine",
                    //         "Töötajakogemus",
                    //         "Rahvusvaheline personalijuhtimine",
                    //         "Personalijuhtimise mõõdikud",
                    //         "Uuringute läbiviimine",
                    //         "Välisvärbamine ja relokatsioon",
                    //         "Juhtide kompetentsi toetamine",
                    //         "Organisatsioonikultuuri kujundamine",
                    //     ],
                    //     required: true,
                    // },
                    // {
                    //     label: "",
                    //     placeholder: "Muu ...",
                    //     type: "text",
                    //     name: "FullName",
                    //     value: "",
                    // },
                    // {
                    //     type: "separator",
                    // },
                    // {
                    //     label: "Kuidas oleksid valmis oma kogemusi grupiliikmetele või muudele huvilistele jagama?",
                    //     type: "checkbox",
                    //     value: [],
                    //     name: "personalShare",
                    //     chose: [
                    //         "Nõuandmine ja arutelu",
                    //         "Teenusena (konsultatsioon, koolitus vmt)",
                    //     ],
                    //     required: true,
                    // },
                    // {
                    //     label: "",
                    //     placeholder: "Muu ...",
                    //     type: "text",
                    //     name: "FullName",
                    //     value: "",
                    // },
                    {
                        type: "separator",
                    },
                    // {
                    //     label: "Miks soovid seltsinguga liituda?",
                    //     type: "textarea",
                    //     name: "whyYou",
                    // },

                    {
                        type: "info",
                    },
                    {
                        message: "Kinnitus",
                        type: "checkbox",
                        value: [],
                        name: "personalData",
                        chose: ["Kinnitan"],
                        required: true,
                    },
                    {
                        type: "separator",
                    },
                ],
            ],
        };
    },
};
</script>
<style scoped>
.content {
    box-sizing: border-box;
    padding: var(--section-padding) 0;
    height: 100%;
    max-width: 80em;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.info {
    max-width: 300px;
}
.info p {
    font-size: 2.2rem;
}
.placeholder {
    display: flex;
    max-height: 70vh;
    width: 100%;
}

img {
    object-fit: contain;
    width: 100%;
}
@media (max-width:480px) {
  .content{
      padding: 0;
  }

}
</style>
