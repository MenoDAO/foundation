export type Locale = "en" | "sw";

export type TruthCategory = "established" | "protocol" | "pilot" | "pipeline";

export interface NavItem {
  href: string;
  label: string;
}

export interface Content {
  meta: {
    locale: Locale;
    translationStatus: "complete" | "pending";
    siteName: string;
    titleDefault: string;
    description: string;
  };
  nav: {
    items: NavItem[];
    cta: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  common: {
    skipToContent: string;
    required: string;
    optional: string;
    submitting: string;
    submitSuccess: string;
    submitError: string;
    whatsappUnavailable: string;
    phonePlaceholderLabel: string;
    logoPending: string;
    photoPending: string;
    dpaConsent: string;
    safeguardingConsent: string;
    dataSource: string;
    logoSlotNote: string;
    logoWord: string;
    submissionsRouted: string;
    evidenceBankLead: string;
    notFoundTitle: string;
    notFoundBody: string;
    notFoundCta: string;
    brandLocation: string;
    heroBadge: string;
    selectCounty: string;
    selectCadre: string;
    selectAvailability: string;
    selectClassification: string;
    selectInquiry: string;
    pathwayLabel: string;
    packageLabel: string;
    componentLabel: string;
    specificationLabel: string;
    stepLabel: string;
    relatedParty: string;
  };
  truth: {
    categories: Record<TruthCategory, { label: string; description: string }>;
  };
  home: {
    eyebrow: string;
    h1: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryLead: string;
    tertiaryLink: string;
    challengeTitle: string;
    challengeCards: { title: string; body: string }[];
    pillarsTitle: string;
    pillars: { title: string; body: string; href: string; cta: string }[];
    letterEyebrow: string;
    letterTitle: string;
    letterBody: string;
    letterName: string;
    letterRole: string;
    letterPhotoAlt: string;
    involvedEyebrow: string;
    involvedTitle: string;
    involvedBody: string;
    involvedCta: string;
    schoolTeaserTitle: string;
    schoolTeaserBody: string;
    schoolTeaserCta: string;
  };
  story: {
    eyebrow: string;
    h1: string;
    body: string;
    campsTitle: string;
    episodicTitle: string;
    episodicBody: string;
    continuumTitle: string;
    continuumBody: string;
    philosophy: { title: string; body: string }[];
    ctaPillars: string;
    ctaLetter: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    tabasamuTitle: string;
    tabasamuSettingLabel: string;
    tabasamuSetting: string;
    tabasamuProtocolsLabel: string;
    tabasamuProtocols: string[];
    tabasamuSafeguardingLabel: string;
    tabasamuSafeguarding: string;
    clinicalTitle: string;
    clinicalClassification: string;
    clinicalAnchorLabel: string;
    clinicalPartnersLead: string;
    clinicalCapabilitiesLabel: string;
    clinicalCapabilities: string[];
    clinicalReferralLabel: string;
    clinicalReferral: string;
    clinicalMentorshipLabel: string;
    clinicalMentorship: string;
    menodaoTitle: string;
    menodaoBody: string;
    menodaoCta: string;
    menoaiTag: string;
    menoaiTitle: string;
    menoaiScope: string[];
    menoaiDisclaimer: string;
    requestOutreach: string;
    viewClinicalBase: string;
  };
  menodao: {
    eyebrow: string;
    h1: string;
    subhead: string;
    rulesTitle: string;
    rules: { component: string; specification: string }[];
    flowTitle: string;
    flow: { title: string; body: string }[];
    safeguardsTitle: string;
    safeguards: string[];
    pilotCta: string;
    deskCta: string;
  };
  impact: {
    eyebrow: string;
    h1: string;
    subhead: string;
    strip: { stat: string; label: string; caption: string }[];
    cards: {
      title: string;
      stat: string;
      statSuffix?: string;
      label: string;
      note: string;
      source: string;
    }[];
    truthEyebrow: string;
    truthTitle: string;
    truthBody: string;
    truthClosing: string;
    appendixCta: string;
    evidenceCta: string;
  };
  involved: {
    eyebrow: string;
    h1: string;
    subhead: string;
    schoolsTitle: string;
    schoolsBody: string;
    schoolsSubmit: string;
    volunteerTitle: string;
    volunteerBody: string;
    volunteerSubmit: string;
    facilityTitle: string;
    facilityBody: string;
    facilitySubmit: string;
    donorsTitle: string;
    donorsBody: string;
    packages: { title: string; body: string }[];
    donorsContactLead: string;
    whatsappBook: string;
    whatsappVolunteer: string;
    whatsappFacility: string;
  };
  contact: {
    eyebrow: string;
    h1: string;
    subhead: string;
    locationsTitle: string;
    hqLabel: string;
    hqDetail: string;
    hqHours: string;
    baseLabel: string;
    baseDetail: string;
    endpointsTitle: string;
    endpoints: { email: string; purpose: string }[];
    formTitle: string;
    formSubmit: string;
  };
  forms: {
    school: Record<string, string>;
    volunteer: Record<string, string>;
    facility: Record<string, string>;
    general: Record<string, string>;
    options: {
      counties: { value: string; label: string }[];
      ages: { value: string; label: string }[];
      cadres: { value: string; label: string }[];
      availability: { value: string; label: string }[];
      facilityClass: { value: string; label: string }[];
      procedures: { value: string; label: string }[];
      inquiry: { value: string; label: string }[];
    };
  };
  disclaimers: {
    regionLabel: string;
    legalTitle: string;
    legal: string;
    clinicalTitle: string;
    clinical: string;
    privacyTitle: string;
    privacy: string;
  };
  footer: {
    tagline: string;
    legalForm: string;
    explore: string;
    programs: string;
    contact: string;
    copyright: string;
    tabasamu: string;
    clinicalBase: string;
    menoai: string;
    whatsappPending: string;
    locationLine: string;
  };
}
