import type { Content } from "./types";
import { EMAILS, ROUTES } from "../lib/constants";

export const sw: Content = {
  meta: {
    locale: "sw",
    translationStatus: "complete",
    siteName: "Dr. Papi Foundation",
    titleDefault: "Dr. Papi Foundation — Afya ya Meno ya Jamii, Pwani ya Kenya",
    description:
      "Tunafanya kazi katika kaunti za Mombasa na Kwale kuondoa mateso ya meno yanayoweza kuzuilika kupitia elimu shuleni, uchunguzi wa kliniki mapema, na ufadhili wa pamoja wa huduma za jamii.",
  },
  nav: {
    items: [
      { href: ROUTES.home, label: "Nyumbani" },
      { href: ROUTES.story, label: "Historia" },
      { href: ROUTES.work, label: "Kazi Yetu" },
      { href: ROUTES.menodao, label: "MenoDAO" },
      { href: ROUTES.impact, label: "Athari" },
      { href: ROUTES.involved, label: "Shiriki" },
      { href: ROUTES.contact, label: "Wasiliana" },
    ],
    cta: "Tuunge Mkono",
    openMenu: "Fungua menyu",
    closeMenu: "Funga menyu",
    languageLabel: "Lugha",
  },
  common: {
    skipToContent: "Ruka hadi maudhui",
    required: "Inahitajika",
    optional: "Si lazima",
    submitting: "Inatuma…",
    submitSuccess: "Asante. Maombi yako yamepokelewa.",
    submitError:
      "Hatukuweza kutuma fomu hii. Tafadhali jaribu tena au tutumie barua pepe moja kwa moja.",
    whatsappUnavailable:
      "Nambari ya Dawati la Jamii la WhatsApp itachapishwa ikipatikana.",
    phonePlaceholderLabel: "Nambari ya simu bado haijatajwa",
    logoPending: "Nembo rasmi itapangwa",
    photoPending:
      "Picha halisi ya uga inasubiri — mchoro unaonyeshwa kwa sasa.",
    dpaConsent:
      "Ninakubali Dr. Papi Foundation kuhifadhi na kushughulikia taarifa nilizowasilisha kwa usalama kwa mujibu wa Sheria ya Ulinzi wa Data ya Kenya (DPA 2019) kwa mawasiliano ya kitaasisi na uratibu wa programu pekee. Ninaelewa kuwa taarifa zangu hazitashirikiwa na watangazaji wa nje.",
    safeguardingConsent:
      "Ninathibitisha kuwa ombi hili litaendelea tu baada ya idhini rasmi ya taasisi na ridhaa iliyoandikwa ya mlezi, na kwamba kiwango cha ulinzi cha Kanuni ya Wawili cha Foundation kitazingatiwa.",
    dataSource: "Chanzo cha data:",
    logoSlotNote: "Faili rasmi la nembo linasubiri kuwekwa kwa usahihi",
    logoWord: "Nembo",
    submissionsRouted: "Maombi yanapelekwa kwa",
    evidenceBankLead: "Maswali ya Benki ya Ushahidi:",
    notFoundTitle: "Ukurasa huu haupo kwenye ramani",
    notFoundBody:
      "Anwani uliyofuata si mojawapo ya kurasa saba za umma za Foundation.",
    notFoundCta: "Rudi nyumbani",
    brandLocation: "Pwani ya Kenya",
    heroBadge: "Ziara ya darasani ya Tabasamu",
    selectCounty: "Chagua kaunti / eneo ndogo",
    selectCadre: "Chagua kada ya kitaalamu",
    selectAvailability: "Chagua upatikanaji",
    selectClassification: "Chagua uainishaji",
    selectInquiry: "Chagua aina ya swali",
    pathwayLabel: "Njia",
    packageLabel: "Kifurushi",
    componentLabel: "Kipengele",
    specificationLabel: "Maelezo",
    stepLabel: "Hatua",
    relatedParty:
      "Ufichuzi wa uhusiano: udhibiti wa uendeshaji unabaki kwa Dkt. Said Athuman Ruwa. Taarifa hii ni ahadi ya uwazi wa utawala.",
  },
  truth: {
    categories: {
      established: {
        label: "Ukweli Uliothibitishwa",
        description:
          "Vipimo halisi vinavyoungwa mkono na rejista za karatasi, usajili wa kampuni, na shughuli za uga zilizoandikwa.",
      },
      protocol: {
        label: "Itifaki Tendaji za Uga",
        description:
          "Mifumo iliyothibitishwa — kama vocha za rufaa, uchunguzi darasani, na hatua za kulinda watoto — inayotumika sasa katika jamii.",
      },
      pilot: {
        label: "Jaribio Lililodhibitiwa",
        description:
          "Mifano ya kuunganisha rasilimali (MenoDAO) inayofanya kazi na vikundi vidogo vilivyofuatiliwa ili kuthibitisha uthabiti na ukaguzi wa madai kabla ya upanuzi.",
      },
      pipeline: {
        label: "Mstari wa Uvumbuzi wa Baadaye",
        description:
          "Miundo ya kiufundi (kama MenoAI) iliyo katika maendeleo na inayotenganishwa wazi na shughuli tendaji za kliniki.",
      },
    },
  },
  home: {
    eyebrow: "Mfumo wa Afya ya Meno ya Jamii • Pwani ya Kenya",
    h1: "Kila mtu ana meno. Kila mtu anastahili njia ya kuyatunza.",
    subhead:
      "Tunafanya kazi katika kaunti za Mombasa na Kwale kuondoa mateso ya meno yanayoweza kuzuilika kupitia elimu shuleni, uchunguzi wa kliniki mapema, na ufadhili wa pamoja wa huduma za jamii.",
    primaryCta: "Saidia Dhamira",
    secondaryCta: "Omba Ziara Shuleni",
    tertiaryLead: "Swali kuhusu afya ya meno?",
    tertiaryLink: "Ongea na Dawati letu la Jamii kwenye WhatsApp",
    challengeTitle: "Kwa Nini Afya ya Meno Haiwezi Tena Kuwa Jambo la Pembeni",
    challengeCards: [
      {
        title: "Magonjwa Yasiyotambuliwa",
        body: "Katika jamii nyingi za pwani, kuoza kwa meno ya watoto hakutambuliwi wala kutibiwa hadi maumivu makali au uvimbe wa uso kulazimisha ziara ya dharura. Uchunguzi mapema hugundua vidonda kabla ya uharibifu wa kudumu wa muundo kutokea.",
      },
      {
        title: "Kikwazo cha Kiuchumi",
        body: "Kwa kaya zisizo na ulinzi rasmi wa gharama, matibabu ya kurekebisha kwa malipo ya mfukoni ni mzigo mkubwa wa kifedha, hivyo kinga, utambuzi mapema, na ufadhili wa pamoja wa jamii ni muhimu.",
      },
      {
        title: "Upungufu wa Upatikanaji",
        body: "Wataalamu wa meno walioidhinishwa na vyumba maalum vya matibabu vimejilimbikizia katika vituo vya biashara mjini, na kuacha makazi ya pembezoni na jamii za shule vijijini bila sehemu za kliniki zinazofikika.",
      },
    ],
    pillarsTitle: "Suluhisho Tatu Zinazoungana",
    pillars: [
      {
        title: "Ufikaji wa Shule wa Tabasamu",
        body: "Uchunguzi shuleni na katika jamii unaotoa elimu ya afya ya meno, uchunguzi wa kuona, na fluoride ya juu juu moja kwa moja darasani.",
        href: `${ROUTES.work}#tabasamu`,
        cta: "Chunguza Programu za Shule →",
      },
      {
        title: "Kituo Kikuu cha Kliniki (Mikindani Hospital Dental Unit)",
        body: "Tathmini za pili za kliniki, kujaza composite, na taratibu za upasuaji katika chumba maalum, safi cha matibabu.",
        href: `${ROUTES.work}#anchor-clinical-base`,
        cta: "Tazama Shughuli za Kliniki →",
      },
      {
        title: "Msaada wa Pamoja wa MenoDAO",
        body: "Dimbwi lililochangiwa la akiba ndogo za jamii katika sarafu ya kawaida, linaloondoa mshtuko wa malipo ya mfukoni kwa familia zinazoshiriki.",
        href: ROUTES.menodao,
        cta: "MenoDAO Inavyofanya Kazi →",
      },
    ],
    letterEyebrow: "Barua ya Kibinafsi",
    letterTitle: "Barua kutoka kwa Dkt. Said Athuman Ruwa",
    letterBody:
      "Sikuanzisha Foundation hii kwa sababu nilitaka kujenga shirika lingine. Niliianzisha kwa sababu ya mvulana wa miaka minane. Nilipokuwa najitolea kama daktari wa meno katika kituo cha umma baada ya kumaliza mafunzo nje ya nchi, mama mmoja aliingia kliniki akiwa amemshika mwanawe mkono. Molar yake ya kwanza ya kudumu—jino lililoundwa kushikilia meno yake maisha yote—lingeliokolewa kwa urekebishaji wa kawaida. Lakini kwa mama yake, matibabu pekee aliyoyajua, na chaguo pekee lililokuwa ndani ya uwezo wake, lilikuwa kung’oa. Jino hilo liling’olewa. Siku hiyo ilibadilisha kabisa jinsi ninavyoona daktari wa meno. Familia katika jamii zetu hazikosi azimio wala upendo kwa watoto wao. Zinakosa taarifa, uchunguzi mapema, na njia zinazofikika za matibabu ya kurekebisha. Kila darasa tunaloingia, kila vocha ya uchunguzi tunayosambaza, na kila dimbwi la akiba ya jamii tunalojaribu na MenoDAO lipo ili familia chache zikabiliane tena na chaguo hilo lisilowezekana.",
    letterName: "Dkt. Said Athuman Ruwa",
    letterRole: "Mwanzilishi na Daktari wa Meno (BDS), Dr. Papi Foundation",
    letterPhotoAlt: "Picha ya Dkt. Said Athuman Ruwa",
    involvedEyebrow: "Shiriki na Shirikiana",
    involvedTitle: "Kuna njia iliyopangwa ya kushirikiana",
    involvedBody:
      "Shule, madaktari, vituo vilivyoidhinishwa, na wafadhili wa kitaasisi kila mmoja ana njia wazi ya kufanya kazi nasi.",
    involvedCta: "Tazama njia zote",
    schoolTeaserTitle: "Omba Ziara ya Uchunguzi Shuleni au Madrasani",
    schoolTeaserBody:
      "Tunashirikiana na shule za msingi, vituo vya utotoni, na madarasa katika Mombasa na Kwale kutoa elimu ya afya ya meno darasani na uchunguzi wa kuona usioingilia mwili.",
    schoolTeaserCta: "Fungua fomu ya ziara shuleni",
  },
  story: {
    eyebrow: "Asili na Kusudi",
    h1: "Imejengwa Kutoka Mstari wa Mbele wa Tiba ya Meno Pwani",
    body: "Baada ya mafunzo yake ya upasuaji wa meno nje ya nchi na zamu za kliniki nchini Kenya, Dkt. Said Athuman Ruwa alikumbana na muundo thabiti katika vituo vya jamii: wagonjwa walikuja tu pale ugonjwa ulipokuwa umeendelea, maumivu yalikuwa makali, na upasuaji haukuweza kuepukika. Huduma ya meno haikuonekana kama utunzaji endelevu wa kinga, bali kama gharama ya dharura ya mwisho. Kupotea kwa molar ya kudumu ya mvulana huyo wa miaka minane kulikuwa kigeugeu. Kulifichua kushindwa kwa muundo wa mfumo unaofanya kazi chini tu, ukisubiri meno kaoze kabla ya kutoa huduma. Dr. Papi Foundation ilisajiliwa kama Kampuni Isiyo na Hisa (Company Limited by Guarantee) ili kuhamisha umakini wa kliniki juu kupitia uchunguzi mapema, rufaa zilizothibitishwa, na ufadhili wa pamoja wa huduma.",
    campsTitle: "Kujenga Muendelezo Badala ya Kambi za Siku Moja",
    episodicTitle: "Kambi ya Matibabu ya Mara Moja",
    episodicBody:
      "Mifano ya kawaida ya ufikaji hufika bila tangazo, hung’oa meno mengi katika nafasi za muda zisizo safi, husambaza mswaki, kisha huondoka. Maambukizi yanapotokea baada ya upasuaji au sehemu nyingine inapoanza kuuma, wagonjwa wanabaki bila njia ya kliniki.",
    continuumTitle: "Muendelezo Endelevu wa Dr. Papi",
    continuumBody:
      "Tunajenga uhusiano wa kitaasisi na shule, madarasa, na jamii. Kila mtoto aliyechunguzwa anayehitaji matibabu hupokea vocha halisi ya rufaa iliyounganishwa moja kwa moja na kituo chetu kikuu cha kliniki katika Mikindani Hospital Dental Unit, ikihakikisha vifaa safi, wataalamu walioidhinishwa, na rekodi za muda mrefu baada ya matibabu.",
    philosophy: [
      {
        title: "Chunguza Mapema",
        body: "Tambua kudhoofika kwa enamel na vidonda vya awali ndani ya madarasa kabla ya uharibifu kufika kwenye pulpa.",
      },
      {
        title: "Ankia Utoaji wa Kliniki",
        body: "Fanya taratibu za kurekebisha katika vyumba vilivyoidhinishwa na vilivyo na vifaa pekee.",
      },
      {
        title: "Ondoa Hofu ya Kifedha",
        body: "Tumia akiba ndogo za jamii ili gharama za mfukoni zisiamue matokeo ya kliniki.",
      },
    ],
    ctaPillars: "Chunguza Nguzo Zetu",
    ctaLetter: "Soma Barua ya Mwanzilishi",
  },
  work: {
    eyebrow: "Mnyororo wa Huduma",
    title: "Mnyororo wa Huduma na Kituo Kikuu",
    intro:
      "Nguzo tatu zinazoungana huhamisha huduma kutoka darasani hadi chumba safi cha matibabu — na kuzuia hofu ya kifedha kuamua matokeo.",
    tabasamuTitle: "Ufikaji wa Shule na Jamii wa Tabasamu",
    tabasamuSettingLabel: "Mazingira",
    tabasamuSetting:
      "Vituo vya utotoni, shule za msingi, na madarasa katika Mombasa na Kwale.",
    tabasamuProtocolsLabel: "Itifaki",
    tabasamuProtocols: [
      "Elimu ya afya ya meno darasani (Kiswahili/Kiingereza)",
      "Uchunguzi wa kuona usioingilia mwili kwa vioo vya kinywa na taa za LED",
      "Kuweka fluoride juu juu",
      "Ripoti za uchunguzi na kadi za malezi kwa wazazi",
    ],
    tabasamuSafeguardingLabel: "Ulinzi",
    tabasamuSafeguarding:
      "Uchunguzi unaendelea tu baada ya idhini rasmi ya taasisi na ridhaa iliyoandikwa ya mlezi. “Kanuni ya Wawili” inatekelezwa — hakuna mtoto anayechunguzwa bila mwalimu, mzazi, au mjitolea wa pili kuwepo. Hakuna taratibu zinazoingilia mwili nje ya vituo rasmi vya kliniki.",
    clinicalTitle: "Kituo Kikuu cha Kliniki (Mikindani Hospital Dental Unit)",
    clinicalAnchorLabel: "Kituo kikuu",
    clinicalPartnersLead: "Vituo vingine vilivyoidhinishwa:",
    clinicalClassification:
      "Kituo Kikuu maalum cha Kliniki, kinachoendeshwa chini ya uongozi wa kliniki na udhibiti wa uendeshaji wa Dkt. Said Athuman Ruwa.",
    clinicalCapabilitiesLabel: "Uwezo",
    clinicalCapabilities: [
      "Viti maalum vya meno",
      "Kuua vijidudu kwa autoclave iliyodhibitiwa",
      "Kujaza composite, ART, tiba ya mizizi",
      "Huduma za watoto, kusafisha periodontali, kung’oa kwa upasuaji tata",
    ],
    clinicalReferralLabel: "Muunganiko wa vocha za rufaa",
    clinicalReferral:
      "Wagonjwa waliochunguzwa huleta vocha zenye namba, zinazolinganishwa na rejista za uga, na kuhudumiwa kwa bei za jamii zilizokubaliwa awali.",
    clinicalMentorshipLabel: "Ushauri wa kitaalamu",
    clinicalMentorship:
      "Zamu zilizopangwa za kujitolea kwa madaktari wa meno wa Kenya, COHO, na wanafunzi.",
    menodaoTitle: "Ufadhili wa Huduma za Jamii (MenoDAO)",
    menodaoBody:
      "Kikundi cha msaada wa pamoja kinachoongozwa na jamii kinachopunguza vizuizi vya kifedha vya huduma ya meno, kwa malipo ya moja kwa moja kati ya mfuko na kituo kikuu cha kliniki.",
    menodaoCta: "MenoDAO Inavyofanya Kazi",
    menoaiTag: "Inaendelezwa",
    menoaiTitle: "Tukitazama Mbele: Uelekezaji wa Huduma wa MenoAI",
    menoaiScope: [
      "Kiolesura cha WhatsApp Business Cloud API kwa wateja wengi",
      "Njia zilizopangwa za kuelekeza huduma kwenye saa/ratiba za kliniki",
      "Uhifadhi wa miadi na vikumbusho vya kiutawala",
      "Maandiko yaliyothibitishwa ya Kiswahili/Kiingereza kwa Wahudumu wa Afya ya Jamii",
    ],
    menoaiDisclaimer:
      "MenoAI haitoi utambuzi wa kliniki wa kiotomatiki wala upangaji wa ukali. Tathmini zote za kliniki na taratibu za upasuaji zinabaki kwa wataalamu walioidhinishwa katika kituo chetu kikuu cha kliniki.",
    requestOutreach: "Omba Ufikaji",
    viewClinicalBase: "Tazama Kituo cha Kliniki",
  },
  menodao: {
    eyebrow: "Uvumbuzi wa Ufadhili wa Huduma",
    h1: "Maumivu Yanapopiga, Pesa Isiwe Dharura ya Kwanza.",
    subhead:
      "MenoDAO ni hatua iliyochangiwa ya msaada wa pamoja inayochunguza jinsi michango midogo ya pamoja inavyoweza kuwalinda familia dhidi ya gharama kubwa za meno za mfukoni.",
    rulesTitle: "Kanuni za Uendeshaji",
    rules: [
      {
        component: "Kiwango cha Msingi cha Kila Mwezi",
        specification: "Kiwango kilichopangwa kuanzia KES 350/mwezi",
      },
      {
        component: "Njia za Sarafu",
        specification: "Sarafu/KES asilia 100% kupitia njia za M-PESA zilizokaguliwa",
      },
      {
        component: "Sera ya Mali Pepe",
        specification: "Hakuna cryptocurrency, hakuna stablecoins, hakuna tokeni",
      },
      {
        component: "Lengo la Malipo",
        specification:
          "Malipo ya moja kwa moja ya dai kwa kituo kikuu cha kliniki baada ya matibabu yaliyoidhinishwa",
      },
      {
        component: "Hali ya Jaribio",
        specification:
          "Jaribio lililodhibitiwa la uthabiti na ukaguzi wa madai Mombasa",
      },
    ],
    flowTitle: "Mfano wa Hatua Nne za Binadamu",
    flow: [
      {
        title: "Usajili wa Jamii",
        body: "Familia, wafanyakazi wa kawaida, na wazazi wa shule hujisajili wakati wa mazungumzo ya ufikaji.",
      },
      {
        title: "Michango Midogo ya Huduma",
        body: "Michango ya hiari ya kawaida kuanzia KES 350/mwezi kupitia pesa za simu kwenye dimbwi lililokaguliwa.",
      },
      {
        title: "Uchunguzi na Kujitokeza",
        body: "Mwanachama au mtegemezi hujitokeza katika kituo kikuu cha kliniki akiwa na rekodi tendaji ya uanachama.",
      },
      {
        title: "Malipo ya Moja kwa Moja ya Dai",
        body: "Dimbwi hulipa ada zilizokubaliwa moja kwa moja kwa Mikindani Hospital Dental Unit; mgonjwa hupata huduma bila deni kubwa la mfukoni.",
      },
    ],
    safeguardsTitle: "Kinga za Kifedha na Kisheria",
    safeguards: [
      "Msamaha wa VASP: sarafu/KES asilia tu kupitia pesa za simu — hakuna mali-crypto, tokeni, wala pochi za kuhifadhi, hivyo haiko chini ya madai ya ukwasi wa VASP nchini Kenya.",
      "Malipo yaliyofungwa moja kwa moja kwenye Till/Paybill ya kituo kilichosajiliwa.",
      "Wigo wa jaribio uliodhibitiwa, kikundi kidogo kimakusudi Mombasa kabla ya upanuzi wa kaunti.",
    ],
    pilotCta: "Soma msingi uliokaguliwa",
    deskCta: "Dawati la Jamii kwenye WhatsApp",
  },
  impact: {
    eyebrow: "Msingi Uliokaguliwa (2026)",
    h1: "Maendeleo Yaliyopimwa. Hakuna Takwimu Kuu Bandia.",
    subhead:
      "Tunapima mafanikio kwa muendelezo wa kliniki na ushiriki wa jamii unaothibitishwa, si makadirio. Ifuatayo ni msingi wa uendeshaji uliokaguliwa wa Dr. Papi Foundation kufikia mapema 2026.",
    strip: [
      {
        stat: "—",
        label: "Wanachama wa MenoDAO Waliosajiliwa",
        caption: "Rejista ya Uanachama Iliyothibitishwa",
      },
      {
        stat: "—",
        label: "Wanachama Wanaochangia — Kiini Tendaji",
        caption: "Usajili Tendaji Ulolipwa",
      },
      {
        stat: "—",
        label: "Vituo vya Kliniki Vilivyoidhinishwa",
        caption: "Kituo Kikuu na Washirika",
      },
      {
        stat: "2",
        label: "Kaunti",
        caption: "Eneo la Uendeshaji",
      },
    ],
    cards: [
      {
        title: "Ushiriki wa Jamii",
        stat: "—",
        label: "Wanachama wa MenoDAO Waliosajiliwa",
        note: "Watu waliofungua akaunti ya uanachama wa MenoDAO. Takwimu hii inasasishwa wanachama wapya wanapojisajili.",
        source: "Rejista ya uanachama wa MenoDAO.",
      },
      {
        title: "Kiini Tendaji Kinachochangia",
        stat: "—",
        label: "Wanachama Tendaji Wanaochangia",
        note: "Wanachama wenye usajili tendaji uliolipwa wanaochangia mfuko wa afya wa MenoDAO.",
        source: "Leja ya usajili wa MenoDAO (uanachama tendaji uliolipwa).",
      },
      {
        title: "Mtandao wa Kliniki",
        stat: "—",
        label: "Vituo vya Kliniki Vilivyoidhinishwa",
        note: "Kituo kikuu — Mikindani Hospital Dental Unit — pamoja na kila kliniki nyingine iliyoidhinishwa katika rejista ya washirika wa MenoDAO.",
        source: "Rejista ya kliniki zilizoidhinishwa za MenoDAO.",
      },
      {
        title: "Eneo la Uendeshaji",
        stat: "2",
        statSuffix: "Kaunti",
        label: "Eneo la Uendeshaji",
        note: "Uchunguzi wa jamii, ziara shuleni, na mazungumzo ya afya katika maeneo yaliyolengwa ya Mombasa na Kwale.",
        source: "Ratiba za misheni za uga na barua za idhini za shule.",
      },
    ],
    truthEyebrow: "Kiwango cha Utawala wa Data",
    truthTitle: "Kwa Nini Tunachapisha Misingi Kamili",
    truthBody:
      "Katika afya ya jamii, shinikizo la kuonyesha ukuaji wa haraka mara nyingi husababisha mashirika kuchapisha makadirio yasiyothibitishwa, utabiri, au idadi kubwa ya walionufaika. Tunakataa desturi hiyo. Katika Dr. Papi Foundation, ripoti zetu zinatofautisha hali nne za uendeshaji:",
    truthClosing:
      "Kila namba iliyochapishwa kwenye ukurasa huu inahusiana na mtu aliyeandikishwa, vocha tendaji, au rekodi ya kliniki iliyothibitishwa. Vikundi vya jaribio vinapokua, vipimo vyetu vinasasishwa kulingana na ingizo za leja zilizothibitishwa.",
    appendixCta: "Kiambatisho cha Ukweli",
    evidenceCta: "Maswali ya Benki ya Ushahidi",
  },
  involved: {
    eyebrow: "Shiriki na Shirikiana",
    h1: "Jiunge Nasi Kulinda Tabasamu za Pwani",
    subhead:
      "Iwe unaongoza shule, unafanya tiba ya meno, unaongoza kituo cha afya, au unataka kufadhili vifaa vya uga, kuna njia wazi na iliyopangwa ya kushirikiana.",
    schoolsTitle: "Omba Ziara ya Uchunguzi Shuleni au Madrasani",
    schoolsBody:
      "Tunashirikiana na shule za msingi, vituo vya utotoni, na madarasa katika Mombasa na Kwale kutoa elimu ya afya ya meno darasani, maelekezo ya kusugua meno, uchunguzi wa kuona usioingilia mwili, na varnish ya fluoride. Kila ufikaji unaendeshwa kwa viwango mkali vya ulinzi, vikihitaji idhini ya awali ya taasisi na ridhaa iliyoandikwa ya mlezi.",
    schoolsSubmit: "Wasilisha Ombi la Ziara Shuleni",
    volunteerTitle: "Jitolee Utaalamu Wako wa Kliniki",
    volunteerBody:
      "Tunakaribisha wataalamu wa afya ya meno walioidhinishwa, madaktari wa jumla, wahamasishaji wa afya ya jamii, na wanafunzi wa afya kushiriki katika ufikaji uliopangwa wa jamii.",
    volunteerSubmit: "Jisajili kama Mjitolea wa Kliniki",
    facilityTitle: "Ushirikiano wa Mtandao wa Kliniki",
    facilityBody:
      "Ingawa shughuli zetu kuu za kliniki zimejikita katika Mikindani Hospital Dental Unit, Foundation iko tayari kuchunguza ushirikiano wa rufaa na vituo vya afya vilivyoidhinishwa katika eneo la pwani.",
    facilitySubmit: "Anzisha Mazungumzo ya Kituo",
    donorsTitle: "Saidia Ufikaji wa Uga na Vifaa vya Kliniki",
    donorsBody:
      "Tunaelekeza msaada wa wafadhili kwa mali halisi, zinazoweza kukaguliwa: vifaa vya uchunguzi vinavyobebeka, autoclave, vifaa vya kinga vinavyofaa watoto, na chati za elimu. Hatuombi fedha za jumla zisizo na lengo.",
    packages: [
      {
        title: "Kifaa cha Uchunguzi Kinachobebeka",
        body: "Taa za kichwa za LED za uga, vioo vya kinywa, probe, mifuko ya kuua vijidudu.",
      },
      {
        title: "Kundi la Kinga la Shule",
        body: "Varnish ya fluoride, brashi za kuweka, na vifaa vya kufundishia kwa ufikaji wa wanafunzi 300.",
      },
      {
        title: "Vifurushi vya Usafi vya Wanafunzi",
        body: "Mswaki + dawa ya meno yenye fluoride.",
      },
    ],
    donorsContactLead: "Wafadhili, ubalozi, na washirika wa kampuni:",
    whatsappBook: "Weka nafasi kupitia Dawati la Jamii la WhatsApp",
    whatsappVolunteer: "Wasiliana na Mratibu wa Wajitolea",
    whatsappFacility: "Uliza kupitia Dawati la WhatsApp",
  },
  contact: {
    eyebrow: "Mawasiliano na Uratibu",
    h1: "Wasiliana na Timu Yetu",
    subhead:
      "Fikia wakurugenzi wetu wa ufikaji, panga programu za elimu, au uliza kuhusu mnyororo wetu wa kliniki. Maswali yote hukaguliwa moja kwa moja na utawala na waratibu wa kliniki.",
    locationsTitle: "Maeneo ya Uendeshaji",
    hqLabel: "Makao makuu na uendeshaji wa programu",
    hqDetail: "Kaunti ya Mombasa, Jamhuri ya Kenya",
    hqHours: "Jumatatu–Ijumaa, 8:30 AM–5:00 PM EAT",
    baseLabel: "Kituo Kikuu cha Kliniki",
    baseDetail: "Mikindani Hospital Dental Unit, Mikindani, Mombasa, Kenya",
    endpointsTitle: "Njia za Moja kwa Moja za Kielektroniki",
    endpoints: [
      { email: EMAILS.general, purpose: "Mawasiliano ya jumla ya kitaasisi" },
      { email: EMAILS.outreach, purpose: "Ufikaji na kuweka ziara shuleni" },
      {
        email: EMAILS.partnerships,
        purpose: "Ushirikiano wa kitaasisi, wafadhili, watoaji ruzuku",
      },
    ],
    formTitle: "Fomu ya Uratibu wa Jumla",
    formSubmit: "Tuma Ujumbe",
  },
  forms: {
    school: {
      institution: "Jina la Taasisi",
      county: "Kaunti / Eneo ndogo",
      contact: "Mtu Mkuu wa Mawasiliano",
      role: "Wadhifa / Cheo",
      whatsapp: "Simu ya WhatsApp",
      email: "Barua pepe",
      population: "Idadi Inayokadiriwa ya Wanafunzi",
      ages: "Kundi la Umri Linalolengwa",
      timing: "Muda Unaopendelewa",
    },
    volunteer: {
      name: "Jina Kamili",
      cadre: "Kada ya Kitaalamu",
      license: "Nambari ya Usajili / Leseni",
      whatsapp: "Simu ya WhatsApp",
      email: "Barua pepe",
      location: "Eneo Kuu la Kazi",
      availability: "Upatikanaji",
      mentorship: "Nina nia ya zamu za ushauri wa kliniki",
    },
    facility: {
      name: "Jina la Kituo",
      location: "Mahali / Eneo ndogo",
      accreditation: "Uidhinishaji / Usajili wa Kituo",
      director: "Jina la Mkurugenzi wa Kliniki / Msimamizi",
      classification: "Uainishaji wa Kituo",
      chairs: "Idadi ya Vyumba / Viti",
      procedures: "Taratibu za Kurekebisha Zinazotolewa",
      phone: "Simu ya Mawasiliano",
      email: "Barua pepe",
    },
    general: {
      name: "Jina Kamili",
      email: "Barua pepe",
      phone: "Simu / WhatsApp",
      category: "Aina ya Swali",
      message: "Ujumbe",
    },
    options: {
      counties: [
        { value: "mombasa-jomvu", label: "Mombasa — Jomvu" },
        { value: "mombasa-changamwe", label: "Mombasa — Changamwe" },
        { value: "mombasa-mvita", label: "Mombasa — Mvita" },
        { value: "mombasa-likoni", label: "Mombasa — Likoni" },
        { value: "mombasa-nyali", label: "Mombasa — Nyali" },
        { value: "mombasa-kisauni", label: "Mombasa — Kisauni" },
        { value: "kwale-matuga", label: "Kwale — Matuga" },
        { value: "kwale-msambweni", label: "Kwale — Msambweni" },
        { value: "other", label: "Nyingine" },
      ],
      ages: [
        { value: "4-6", label: "4–6" },
        { value: "7-10", label: "7–10" },
        { value: "11-14", label: "11–14" },
        { value: "older", label: "Wakubwa zaidi" },
      ],
      cadres: [
        { value: "dental-surgeon", label: "Daktari wa meno" },
        { value: "coho", label: "Afisa wa Afya ya Meno ya Jamii (COHO)" },
        { value: "general-clinician", label: "Daktari wa jumla" },
        { value: "chv", label: "Mhamasishaji wa afya ya jamii / CHV" },
        { value: "student", label: "Mwanafunzi wa afya" },
        { value: "other", label: "Mtaalamu mwingine wa meno aliyeidhinishwa" },
      ],
      availability: [
        { value: "weekday-mornings", label: "Asubuhi za siku za kazi" },
        { value: "weekday-afternoons", label: "Mchana wa siku za kazi" },
        { value: "weekends", label: "Wikendi" },
        { value: "school-term", label: "Dirisha la ufikaji wa muhula" },
        { value: "flexible", label: "Rahisi / kwa ombi" },
      ],
      facilityClass: [
        { value: "hospital-dental-unit", label: "Kitengo cha meno hospitalini" },
        { value: "standalone-clinic", label: "Kliniki ya meno huru" },
        { value: "community-health-center", label: "Kituo cha afya ya jamii" },
        { value: "other", label: "Kituo kingine kilichoidhinishwa" },
      ],
      procedures: [
        { value: "composite", label: "Kujaza composite" },
        { value: "art", label: "ART" },
        { value: "rct", label: "Tiba ya mizizi" },
        { value: "pediatric", label: "Huduma za watoto" },
        { value: "scaling", label: "Kusafisha periodontali" },
        { value: "extractions", label: "Kung’oa kwa upasuaji" },
      ],
      inquiry: [
        { value: "school-visit", label: "Ombi la Ziara Shuleni" },
        { value: "volunteer", label: "Programu ya Kujitolea" },
        { value: "menodao", label: "Swali la Jaribio la MenoDAO" },
        { value: "clinical-referral", label: "Swali la Rufaa ya Kliniki" },
        { value: "partnership-media", label: "Ushirikiano / Vyombo vya habari" },
        { value: "general", label: "Swali la Jumla" },
      ],
    },
  },
  disclaimers: {
    regionLabel: "Tahadhari za kisheria, udhibiti, na mipaka ya kliniki",
    legalTitle: "Hali ya Kisheria ya Kampuni",
    legal:
      "Dr. Papi Foundation imesajiliwa chini ya Sheria ya Makampuni ya Kenya kama Kampuni Isiyo ya Faida Isiyo na Hisa (Company Limited by Guarantee). Foundation imeandaliwa kwa madhumuni ya hisani, elimu, na kukuza afya ya umma pekee.",
    clinicalTitle: "Ilani ya Mipaka ya Kliniki na Utambuzi",
    clinical:
      "Dr. Papi Foundation ni taasisi ya kukuza afya ya meno na upangaji wa jamii. Taarifa kwenye tovuti hii, kupitia vifaa vya shule vya Tabasamu, mazungumzo ya elimu, au dawati letu la jamii la WhatsApp ni kwa elimu ya afya na uratibu wa kiutawala tu. Si utambuzi rasmi wa kimatibabu, ushauri maalum wa meno, wala matibabu ya dharura. Wanajamii wenye maumivu makali ya meno, cellulitis, uvimbe wa uso, homa ya mwili, au majeraha ya uso na taya wasisubiri ziara za ufikaji; wajitokeze mara moja katika kituo kilichoidhinishwa cha afya au idara ya dharura. Tathmini rasmi zote za kliniki, kung’oa, na upasuaji hufanywa na madaktari wa meno walioidhinishwa ndani ya vituo vilivyoidhinishwa pekee.",
    privacyTitle: "Taarifa ya Ulinzi wa Data na Faragha (DPA 2019)",
    privacy:
      "Dr. Papi Foundation inazingatia Sheria ya Ulinzi wa Data ya Kenya (2019). Data ya utambulisho, fomu za uchunguzi shuleni, kumbukumbu za rufaa, na rekodi za kliniki hukusanywa kwa ridhaa wazi, husimbwa, na hushughulikiwa kwa muendelezo wa programu ulioidhinishwa pekee. Hatuzuii wala kushiriki data binafsi na wahusika wa nje kwa biashara.",
  },
  footer: {
    tagline: "Mfumo wa afya ya meno ya jamii kwa pwani ya Kenya.",
    legalForm:
      "Kampuni Isiyo ya Faida Isiyo na Hisa, iliyosajiliwa chini ya Sheria ya Makampuni ya Kenya. Inaongozwa na Bodi ya Wakurugenzi wenye wanachama wanne waliosajiliwa.",
    explore: "Chunguza",
    programs: "Programu",
    contact: "Wasiliana",
    copyright: "Dr. Papi Foundation",
    tabasamu: "Ufikaji wa Tabasamu",
    clinicalBase: "Kituo Kikuu cha Kliniki",
    menoai: "Mstari wa MenoAI",
    whatsappPending: "Dawati la Jamii la WhatsApp — nambari inasubiri",
    locationLine: "Kaunti ya Mombasa, Jamhuri ya Kenya",
  },
};
