import type { Content } from "./types";
import { EMAILS, HOURS, LOCATIONS, ROUTES } from "../lib/constants";

export const en: Content = {
  meta: {
    locale: "en",
    translationStatus: "complete",
    siteName: "Dr. Papi Foundation",
    titleDefault: "Dr. Papi Foundation — Community Oral Health, Coastal Kenya",
    description:
      "We work across Mombasa and Kwale counties to eliminate preventable dental suffering through school education, early clinical screening, and community care financing.",
  },
  nav: {
    items: [
      { href: ROUTES.home, label: "Home" },
      { href: ROUTES.story, label: "Our Story" },
      { href: ROUTES.work, label: "What We Do" },
      { href: ROUTES.menodao, label: "MenoDAO" },
      { href: ROUTES.impact, label: "Our Impact" },
      { href: ROUTES.involved, label: "Get Involved" },
      { href: ROUTES.contact, label: "Contact" },
    ],
    cta: "Support the Mission",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  common: {
    skipToContent: "Skip to content",
    required: "Required",
    optional: "Optional",
    submitting: "Sending…",
    submitSuccess: "Thank you. Your submission has been received.",
    submitError: "We could not send this form. Please try again or email us directly.",
    whatsappUnavailable:
      "WhatsApp Community Desk number will be published when available.",
    phonePlaceholderLabel: "Phone number pending",
    logoPending: "Official logo to be placed",
    photoPending:
      "Authentic field photograph pending — illustration shown in the interim.",
    dpaConsent:
      "I consent to the Dr. Papi Foundation securely storing and processing the submitted details in accordance with the Kenya Data Protection Act (DPA 2019) solely for institutional communication and program coordination. I understand that my information will never be shared with third-party advertisers.",
    safeguardingConsent:
      "I confirm this request will proceed only with advance institutional authorization and documented caregiver consent, and that the Foundation’s Rule of Two safeguarding standard will be observed.",
    dataSource: "Data source:",
    logoSlotNote: "Official logo file pending pixel-accurate placement",
    logoWord: "Logo",
    submissionsRouted: "Submissions are routed to",
    evidenceBankLead: "Evidence Bank inquiries:",
    notFoundTitle: "This page is not on the map",
    notFoundBody:
      "The address you followed is not one of the Foundation’s seven public pages.",
    notFoundCta: "Return home",
    brandLocation: "Coastal Kenya",
    heroBadge: "Tabasamu classroom visit",
    selectCounty: "Select county / sub-county",
    selectCadre: "Select professional cadre",
    selectAvailability: "Select availability",
    selectClassification: "Select classification",
    selectInquiry: "Select inquiry category",
    pathwayLabel: "Pathway",
    packageLabel: "Package",
    componentLabel: "Component",
    specificationLabel: "Specification",
    stepLabel: "Step",
    relatedParty:
      "Related-party disclosure: operational control remains with Dr. Said Athuman Ruwa. This statement is a governance transparency commitment.",
  },
  truth: {
    categories: {
      established: {
        label: "Established Facts",
        description:
          "Real-world metrics backed by physical registries, corporate incorporation, and documented field activities.",
      },
      protocol: {
        label: "Active Field Protocols",
        description:
          "Verified operational systems — such as physical referral vouchers, classroom screenings, and child safeguarding measures — currently deployed in the community.",
      },
      pilot: {
        label: "Controlled Pilot Testing",
        description:
          "Financial pooling models (MenoDAO) operating with small, monitored cohorts to validate solvency and claim verification before general expansion.",
      },
      pipeline: {
        label: "Future Innovation Pipeline",
        description:
          "Technical architectures (such as MenoAI) in development that are clearly demarcated from active clinical operations.",
      },
    },
  },
  home: {
    eyebrow: "Community Oral Health Ecosystem • Coastal Kenya",
    h1: "Everybody has teeth. Everybody deserves a way to care for them.",
    subhead:
      "We work across Mombasa and Kwale counties to eliminate preventable dental suffering through school education, early clinical screening, and community care financing.",
    primaryCta: "Support the Mission",
    secondaryCta: "Request a School Visit",
    tertiaryLead: "Oral health inquiry?",
    tertiaryLink: "Chat with our Community Desk on WhatsApp",
    challengeTitle: "Why Oral Health Can No Longer Be An Afterthought",
    challengeCards: [
      {
        title: "Undetected Disease",
        body: "In many coastal communities, childhood tooth decay goes undetected and untreated until acute pain or facial swelling forces an emergency visit. Early screening identifies lesions before irreversible structural destruction occurs.",
      },
      {
        title: "The Economic Barrier",
        body: "For households without formal coverage, out-of-pocket restorative treatment represents a significant financial burden, making prevention, early detection, and community financing essential.",
      },
      {
        title: "The Access Deficit",
        body: "Licensed dental personnel and dedicated operatories are concentrated in commercial city centers, leaving peri-urban settlements and rural school communities without accessible clinical touchpoints.",
      },
    ],
    pillarsTitle: "Three Interlocking Solutions",
    pillars: [
      {
        title: "Tabasamu School Outreach",
        body: "School and community screenings delivering oral health literacy, visual triage, and topical fluoride applications directly into classrooms.",
        href: `${ROUTES.work}#tabasamu`,
        cta: "Explore School Programs →",
      },
      {
        title: "Anchor Clinical Base (Mikindani Hospital Dental Unit)",
        body: "Secondary clinical assessments, restorative composite fillings, and surgical procedures anchored in a dedicated, sterile operatory.",
        href: `${ROUTES.work}#anchor-clinical-base`,
        cta: "View Clinical Operations →",
      },
      {
        title: "MenoDAO Mutual Aid",
        body: "An incubated, fiat-denominated community micro-savings pool removing out-of-pocket payment shocks for participating families.",
        href: ROUTES.menodao,
        cta: "How MenoDAO Works →",
      },
    ],
    letterEyebrow: "A Personal Note",
    letterTitle: "A Letter from Dr. Said Athuman Ruwa",
    letterBody:
      "I didn't start this Foundation because I wanted to build another organization. I started it because of an eight-year-old boy. While volunteering as a dentist in a public facility after completing my training abroad, a mother walked into the clinic holding her son's hand. His first permanent molar—the tooth designed to anchor his dentition for life—could have been saved through a routine restoration. But to his mother, the only treatment she had ever known, and the only option within financial reach, was extraction. That tooth was removed. That day fundamentally changed how I view clinical dentistry. Families in our communities do not lack resolve or love for their children. They lack information, early screening, and accessible pathways to restorative care. Every classroom we enter, every screening voucher we distribute, and every community savings pool we test with MenoDAO exists to ensure fewer families ever face that impossible choice again.",
    letterName: "Dr. Said Athuman Ruwa",
    letterRole: "Founder & Dental Surgeon (BDS), Dr. Papi Foundation",
    letterPhotoAlt: "Portrait of Dr. Said Athuman Ruwa",
    involvedEyebrow: "Participate & Collaborate",
    involvedTitle: "There is a structured pathway to collaborate",
    involvedBody:
      "Schools, clinicians, accredited facilities, and institutional donors each have a transparent route to work with us.",
    involvedCta: "See all pathways",
    schoolTeaserTitle: "Request a School or Madrasa Screening Visit",
    schoolTeaserBody:
      "We partner with primary schools, early childhood centers, and madrasas across Mombasa and Kwale to deliver classroom oral health education and non-invasive visual screenings.",
    schoolTeaserCta: "Open the school visit form",
  },
  story: {
    eyebrow: "Origin & Purpose",
    h1: "Built From the Frontlines of Coastal Dentistry",
    body: "Following his dental surgery training abroad and subsequent clinical rotations in Kenya, Dr. Said Athuman Ruwa encountered a consistent systemic pattern in community facilities: patients presented only when pathology was advanced, pain was agonizing, and surgical intervention was unavoidable. Oral healthcare was treated not as continuous preventive maintenance, but as an emergency expense of last resort. The loss of that eight-year-old boy's permanent molar became the turning point. It exposed the structural failure of an oral healthcare delivery system that operates purely downstream, waiting for teeth to rot before offering care. The Dr. Papi Foundation was incorporated as a Company Limited by Guarantee to shift clinical focus upstream through early screening, verified clinical referrals, and collective care financing.",
    campsTitle: "Building Continuity Over One-Day Camps",
    episodicTitle: "The Episodic Medical Camp",
    episodicBody:
      "Traditional outreach models arrive unannounced, extract hundreds of teeth in temporary non-sterile spaces, distribute toothbrushes, and depart. When post-operative infections occur or another quadrant begins to ache, patients are left without clinical recourse.",
    continuumTitle: "The Dr. Papi Continuous Continuum",
    continuumBody:
      "We build structured institutional relationships with schools, madrasas, and communities. Every screened child requiring intervention receives a documented, physical referral voucher connected directly to our anchor clinical facility at the Mikindani Hospital Dental Unit, guaranteeing sterile instrumentation, licensed clinicians, and long-term postoperative records.",
    philosophy: [
      {
        title: "Screen Upstream",
        body: "Identify enamel demineralization and early lesions inside classrooms before pulpal involvement occurs.",
      },
      {
        title: "Anchor Clinical Delivery",
        body: "Conduct restorative procedures exclusively within accredited, equipped operatories.",
      },
      {
        title: "Eliminate Financial Panic",
        body: "Use community micro-savings so out-of-pocket costs never dictate clinical outcomes.",
      },
    ],
    ctaPillars: "Explore Our Pillars",
    ctaLetter: "Read Founder's Letter",
  },
  work: {
    eyebrow: "Care Continuum",
    title: "The Care Continuum & Anchor Base",
    intro:
      "Three interlocking pillars move care from the classroom to a sterile operatory — and keep financial panic from deciding the outcome.",
    tabasamuTitle: "Tabasamu School & Community Outreach",
    tabasamuSettingLabel: "Setting",
    tabasamuSetting:
      "Early childhood centers, primary schools, madrasas across Mombasa and Kwale.",
    tabasamuProtocolsLabel: "Protocols",
    tabasamuProtocols: [
      "Classroom oral-health literacy (Swahili/English)",
      "Non-invasive visual screening with mouth mirrors and LED headlights",
      "Topical fluoride application",
      "Screening reports and parent care cards",
    ],
    tabasamuSafeguardingLabel: "Safeguarding",
    tabasamuSafeguarding:
      "Screenings proceed only with advance institutional authorization and documented caregiver consent. “Rule of Two” enforced — no child examined without an educator, parent, or second volunteer present. No invasive procedures outside formal clinical facilities.",
    clinicalTitle: "Anchor Clinical Base (Mikindani Hospital Dental Unit)",
    clinicalClassification:
      "Dedicated Anchor Clinical Base, operated under the clinical leadership and operational control of Dr. Said Athuman Ruwa.",
    clinicalAnchorLabel: "Anchor",
    clinicalPartnersLead: "Also in the approved clinical network:",
    clinicalCapabilitiesLabel: "Capabilities",
    clinicalCapabilities: [
      "Dedicated dental chairs",
      "Regulated autoclave sterilization",
      "Restorative composite fillings, ART, root canal therapy",
      "Pediatric care, periodontal scaling, complex surgical extractions",
    ],
    clinicalReferralLabel: "Referral voucher integration",
    clinicalReferral:
      "Screened patients present serialized vouchers, matched against field screening registries, cared for under pre-negotiated community rates.",
    clinicalMentorshipLabel: "Professional mentorship",
    clinicalMentorship:
      "Structured clinical volunteer rotations for Kenyan dental surgeons, COHOs, and students.",
    menodaoTitle: "Community Care Financing (MenoDAO)",
    menodaoBody:
      "A community-governed mutual aid collective reducing out-of-pocket financial barriers to dental care, with direct clinical claim settlement between the fund and the anchor clinical base.",
    menodaoCta: "How MenoDAO Works",
    menoaiTag: "In Active Development",
    menoaiTitle: "Looking Forward: MenoAI Care Navigation",
    menoaiScope: [
      "Multi-tenant WhatsApp Business Cloud API interface",
      "Structured care-navigation pathways to clinic hours/schedules",
      "Administrative booking and reminders",
      "Verified Swahili/English scripts for Community Health Volunteers",
    ],
    menoaiDisclaimer:
      "MenoAI does not provide automated clinical diagnosis or severity triage. All clinical assessments and surgical procedures remain strictly with licensed professionals at our anchor clinical base.",
    requestOutreach: "Request Outreach",
    viewClinicalBase: "View Clinical Base",
  },
  menodao: {
    eyebrow: "Healthcare Financing Innovation",
    h1: "When Pain Strikes, Money Shouldn't Be the First Emergency.",
    subhead:
      "MenoDAO is an incubated mutual-aid initiative exploring how collective micro-contributions can shield families from catastrophic out-of-pocket dental costs.",
    rulesTitle: "Operating Rules",
    rules: [
      {
        component: "Baseline Monthly Tier",
        specification: "Structured tier starting at KES 350/month",
      },
      {
        component: "Currency Rails",
        specification: "100% Fiat/KES via audited M-PESA channels",
      },
      {
        component: "Virtual Assets Policy",
        specification: "Zero cryptocurrency, zero stablecoins, zero tokens",
      },
      {
        component: "Settlement Target",
        specification:
          "Direct claim reimbursement to the anchor clinical facility upon authorized treatment",
      },
      {
        component: "Pilot Status",
        specification:
          "Controlled pilot testing solvency and claim verification in Mombasa",
      },
    ],
    flowTitle: "The Four-Step Human Flow Model",
    flow: [
      {
        title: "Community Enrollment",
        body: "Families, informal workers, and school parents register during outreach dialogues.",
      },
      {
        title: "Micro-Care Contributions",
        body: "Regular voluntary contributions from KES 350/month via mobile money into an audited pool.",
      },
      {
        title: "Screening & Presentation",
        body: "Member or dependent presents at the anchor clinical base with an active membership record.",
      },
      {
        title: "Direct Claim Settlement",
        body: "Pool pays pre-negotiated clinical fees directly to Mikindani Hospital Dental Unit; patient receives care without high out-of-pocket debt.",
      },
    ],
    safeguardsTitle: "Financial & Regulatory Safeguards",
    safeguards: [
      "VASP Exemption: strictly fiat/KES via mobile money — no crypto-assets, tokens, or custodial wallets, exempting it from Kenyan VASP liquidity mandates.",
      "Closed-loop disbursement directly to the registered facility Till/Paybill.",
      "Controlled pilot scope, intentionally small cohort in Mombasa before countywide scaling.",
    ],
    pilotCta: "Read the audited baseline",
    deskCta: "Community Desk on WhatsApp",
  },
  impact: {
    eyebrow: "Audited Baseline (2026)",
    h1: "Measured Progress. Zero Inflated Metrics.",
    subhead:
      "We measure success by clinical continuity and verifiable community participation, not estimated projections. Below is the audited operational baseline of the Dr. Papi Foundation as of early 2026.",
    strip: [
      {
        stat: "—",
        label: "Registered MenoDAO Members",
        caption: "Verified Membership Registry",
      },
      {
        stat: "—",
        label: "Contributing Members — Active Paid Core",
        caption: "Active Subscriptions",
      },
      {
        stat: "—",
        label: "Approved Clinical Facilities",
        caption: "Anchor Plus Partner Clinics",
      },
      {
        stat: "2",
        label: "Counties",
        caption: "Operational Territory",
      },
    ],
    cards: [
      {
        title: "Community Engagement",
        stat: "—",
        label: "Registered MenoDAO Members",
        note: "People who have created a verified MenoDAO membership account. This figure updates as new participants sign up.",
        source: "MenoDAO membership registry.",
      },
      {
        title: "Active Contributing Core",
        stat: "—",
        label: "Active Contributing Members",
        note: "Members with an active paid subscription who are currently contributing to the MenoDAO health pool.",
        source: "MenoDAO subscription ledger (active paid memberships).",
      },
      {
        title: "Clinical Network",
        stat: "—",
        label: "Approved Clinical Facilities",
        note: "The named anchor — Mikindani Hospital Dental Unit — plus every other clinic approved in the MenoDAO partner registry.",
        source: "MenoDAO approved clinic registry.",
      },
      {
        title: "Operational Territory",
        stat: "2",
        statSuffix: "Counties",
        label: "Operational Territory",
        note: "Active community screening, school visits, and health dialogues across targeted sub-counties in Mombasa and Kwale.",
        source: "Field mission schedules and authorized school clearance letters.",
      },
    ],
    truthEyebrow: "Data Governance Standard",
    truthTitle: "Why We Publish Exact Baselines",
    truthBody:
      "In community healthcare, the pressure to demonstrate rapid scale often leads organizations to publish unverified estimates, speculative projections, or inflated beneficiary numbers. We reject this practice. At the Dr. Papi Foundation, our reporting distinguishes between four operational realities:",
    truthClosing:
      "Every number published on this page corresponds to a documented individual, an active voucher, or an authenticated clinical record. As our pilot cohorts grow, our metrics update based on verified ledger entries.",
    appendixCta: "Truth Appendix",
    evidenceCta: "Evidence Bank inquiries",
  },
  involved: {
    eyebrow: "Participate & Collaborate",
    h1: "Join Us in Protecting Coastal Smiles",
    subhead:
      "Whether you lead a school, practice dental medicine, direct a healthcare center, or wish to underwrite field equipment, there is a transparent, structured pathway to collaborate.",
    schoolsTitle: "Request a School or Madrasa Screening Visit",
    schoolsBody:
      "We partner with primary schools, early childhood centers, and madrasas across Mombasa and Kwale to deliver classroom oral health education, tooth-brushing instructions, non-invasive visual screenings, and topical fluoride varnish. Every outreach operates with strict safeguarding standards, requiring prior institutional authorization and documented caregiver consent.",
    schoolsSubmit: "Submit School Visit Request",
    volunteerTitle: "Volunteer Your Clinical Expertise",
    volunteerBody:
      "We welcome licensed oral health professionals, general clinicians, community health promoters, and healthcare students to participate in structured community outreaches.",
    volunteerSubmit: "Register as Clinical Volunteer",
    facilityTitle: "Clinical Network Collaboration",
    facilityBody:
      "While our primary clinical operations are anchored at the Mikindani Hospital Dental Unit, the Foundation is open to exploring referral collaborations with accredited healthcare facilities across the coastal region.",
    facilitySubmit: "Initiate Facility Dialogue",
    donorsTitle: "Support Field Outreach & Clinical Hardware",
    donorsBody:
      "We direct donor and philanthropic support exclusively to tangible, auditable operational assets: portable diagnostic kits, autoclave units, child-appropriate preventive supplies, and educational charts. We do not solicit speculative general funds.",
    packages: [
      {
        title: "Portable Diagnostic Unit",
        body: "Field LED headlamps, mouth mirrors, probes, sterilization pouches.",
      },
      {
        title: "School Preventive Cohort",
        body: "Fluoride varnish, applicator brushes, instructional materials for a 300-student outreach.",
      },
      {
        title: "Learner Hygiene Packs",
        body: "Toothbrushes + fluoride toothpaste.",
      },
    ],
    donorsContactLead: "Grant-makers, embassies, and corporate partners:",
    whatsappBook: "Book via WhatsApp Community Desk",
    whatsappVolunteer: "Connect with Volunteer Coordinator",
    whatsappFacility: "Inquire via WhatsApp Desk",
  },
  contact: {
    eyebrow: "Communication & Coordination",
    h1: "Get in Touch with Our Team",
    subhead:
      "Reach our outreach directors, schedule educational programs, or inquire about our clinical continuum. All inquiries are reviewed directly by our administration and clinical coordinators.",
    locationsTitle: "Operational Locations",
    hqLabel: "Headquarters & program operations",
    hqDetail: LOCATIONS.headquarters,
    hqHours: HOURS,
    baseLabel: "Anchor Clinical Base",
    baseDetail: LOCATIONS.clinicalBase,
    endpointsTitle: "Direct Electronic Endpoints",
    endpoints: [
      { email: EMAILS.general, purpose: "General institutional correspondence" },
      { email: EMAILS.outreach, purpose: "Outreach & school visit booking" },
      {
        email: EMAILS.partnerships,
        purpose: "Institutional partnerships, donors, grant-makers",
      },
    ],
    formTitle: "General Coordination Intake",
    formSubmit: "Send Message",
  },
  forms: {
    school: {
      institution: "Institution Name",
      county: "County / Sub-County",
      contact: "Lead Contact Person",
      role: "Role / Title",
      whatsapp: "WhatsApp Phone",
      email: "Email",
      population: "Estimated Learner Population",
      ages: "Target Age Range",
      timing: "Preferred Timing",
    },
    volunteer: {
      name: "Full Name",
      cadre: "Professional Cadre",
      license: "Registration / License Number",
      whatsapp: "WhatsApp Phone",
      email: "Email",
      location: "Primary Base Location",
      availability: "Availability",
      mentorship: "I am interested in clinical mentorship rotations",
    },
    facility: {
      name: "Facility Name",
      location: "Physical Location / Sub-County",
      accreditation: "Facility Accreditation / Registration",
      director: "Clinical Director / In-Charge Name",
      classification: "Facility Classification",
      chairs: "Number of Operatories / Chairs",
      procedures: "Restorative Procedures Provided",
      phone: "Contact Phone",
      email: "Email",
    },
    general: {
      name: "Full Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      category: "Inquiry Category",
      message: "Message",
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
        { value: "other", label: "Other" },
      ],
      ages: [
        { value: "4-6", label: "4–6" },
        { value: "7-10", label: "7–10" },
        { value: "11-14", label: "11–14" },
        { value: "older", label: "Older" },
      ],
      cadres: [
        { value: "dental-surgeon", label: "Dental surgeon" },
        { value: "coho", label: "Community Oral Health Officer (COHO)" },
        { value: "general-clinician", label: "General clinician" },
        { value: "chv", label: "Community health promoter / CHV" },
        { value: "student", label: "Healthcare student" },
        { value: "other", label: "Other licensed oral health professional" },
      ],
      availability: [
        { value: "weekday-mornings", label: "Weekday mornings" },
        { value: "weekday-afternoons", label: "Weekday afternoons" },
        { value: "weekends", label: "Weekends" },
        { value: "school-term", label: "School-term outreach windows" },
        { value: "flexible", label: "Flexible / on request" },
      ],
      facilityClass: [
        { value: "hospital-dental-unit", label: "Hospital dental unit" },
        { value: "standalone-clinic", label: "Standalone dental clinic" },
        { value: "community-health-center", label: "Community health center" },
        { value: "other", label: "Other accredited facility" },
      ],
      procedures: [
        { value: "composite", label: "Restorative composite fillings" },
        { value: "art", label: "ART" },
        { value: "rct", label: "Root canal therapy" },
        { value: "pediatric", label: "Pediatric care" },
        { value: "scaling", label: "Periodontal scaling" },
        { value: "extractions", label: "Surgical extractions" },
      ],
      inquiry: [
        { value: "school-visit", label: "School Visit Request" },
        { value: "volunteer", label: "Volunteer Program" },
        { value: "menodao", label: "MenoDAO Pilot Question" },
        { value: "clinical-referral", label: "Clinical Referral Question" },
        { value: "partnership-media", label: "Partnership / Media" },
        { value: "general", label: "General Inquiry" },
      ],
    },
  },
  disclaimers: {
    regionLabel: "Statutory, regulatory and clinical boundary disclaimers",
    legalTitle: "Corporate Legal Status",
    legal:
      "The Dr. Papi Foundation is incorporated under the Companies Act of the Laws of Kenya as a non-profit Company Limited by Guarantee (without share capital). The Foundation is organized exclusively for charitable, educational, and public healthcare promotion purposes.",
    clinicalTitle: "Clinical & Diagnostic Boundary Notice",
    clinical:
      "The Dr. Papi Foundation is an oral health promotion and community triage entity. Information provided across this website, through Tabasamu school materials, educational dialogues, or via our WhatsApp community desk is strictly for health literacy and administrative navigation. It does not constitute formal medical diagnosis, specialized dental advice, or emergency treatment. Community members suffering from severe dental pain, cellulitis, facial swelling, systemic fever, or traumatic maxillofacial injuries should not await outreach visits; they must report immediately to an accredited healthcare facility or emergency department. All formal clinical evaluations, extractions, and surgical interventions are conducted strictly by licensed dental practitioners within accredited clinical facilities.",
    privacyTitle: "Data Protection & Privacy Statement (DPA 2019)",
    privacy:
      "The Dr. Papi Foundation operates in strict compliance with the Kenya Data Protection Act (2019). Personal identity data, school screening forms, referral logs, and clinical records are collected under explicit informed consent, encrypted, and processed exclusively for authorized program continuity. We do not commercialize or share personal data with external third parties.",
  },
  footer: {
    tagline: "Community oral health ecosystem for coastal Kenya.",
    legalForm:
      "Non-profit Company Limited by Guarantee, incorporated under the Companies Act of Kenya, without share capital. Governed by a registered four-member Board of Directors.",
    explore: "Explore",
    programs: "Programs",
    contact: "Contact",
    copyright: "Dr. Papi Foundation",
    tabasamu: "Tabasamu Outreach",
    clinicalBase: "Anchor Clinical Base",
    menoai: "MenoAI pipeline",
    whatsappPending: "WhatsApp Community Desk — number pending",
    locationLine: "Mombasa County, Republic of Kenya",
  },
};
