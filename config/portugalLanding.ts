/**
 * Content + config for the Portugal relocation campaign (/flyt-til-portugal).
 * Kept separate from a specific employer/job so this page (and its section
 * components) can later become the template for other country campaigns
 * (e.g. /flyt-til-spanien) — same job + bolig + community + relocation shape,
 * different data.
 */

export const CTA_LINK =
  "https://abroader-1746694588.teamtailor.com/da/jobs/8225598-dansktalende-customer-support-agent-flyt-til-portugal";
// TODO: This points at the current live Teamtailor opportunity. If/when this
// page becomes a general Portugal hub with multiple roles, swap this for a
// per-role link instead of one shared CTA_LINK.

export const PORTUGAL_WHATSAPP_URL = "#";
// TODO: Add the live Abroader Portugal WhatsApp number/link once confirmed.

export const FLYT_TIL_PORTUGAL_PATH = "/flyt-til-portugal" as const;

export const portugalNavLinks = [
  { label: "Jobbet", href: "#jobbet" },
  { label: "Boligen", href: "#boligen" },
  { label: "Sådan fungerer det", href: "#saadan-fungerer-det" },
  { label: "FAQ", href: "#faq" },
] as const;

export const portugalNavCta = {
  label: "Ansøg nu",
} as const;

export const portugalFooterContent = {
  tagline: "Flyt til Portugal med et dansk job, hjælp til bolig og et fællesskab fra dag ét.",
  links: [
    { label: "Jobbet", href: "#jobbet" },
    { label: "Boligen", href: "#boligen" },
    { label: "Sådan fungerer det", href: "#saadan-fungerer-det" },
    { label: "FAQ", href: "#faq" },
    { label: "Privatlivspolitik", href: "/privacy" },
    { label: "Vilkår", href: "/terms" },
  ],
  secondaryLinks: [{ label: "Alle muligheder hos Abroader", href: "/hire-with-abroader" }],
  website: { label: "abroader.io", href: "https://abroader.io" },
} as const;

export const portugalMetadata = {
  title: "Dansk kundeservice job i Portugal — bolig & hjælp til flytning | Abroader",
  shortTitle: "Flyt til Portugal med dansk job | Abroader",
  description:
    "Flyt til Portugal med et dansk kundeservicejob. Abroader hjælper dig med job, bolig, relocation og fællesskab, så det bliver lettere at starte dit nye liv i Portugal.",
} as const;

export const portugalOgImage = {
  src: "https://images.unsplash.com/photo-1775478525301-3effd5baadc7?q=80&w=1600&auto=format&fit=crop",
  alt: "Lissabon og broen over Tagus-floden ved solnedgang",
} as const;

export const heroImage = {
  src: "https://images.unsplash.com/photo-1775478525301-3effd5baadc7?q=80&w=2000&auto=format&fit=crop",
  alt: "Lissabon og broen over Tagus-floden ved solnedgang",
} as const;

export const sectionImages = {
  surf: {
    src: "https://images.unsplash.com/photo-1664736069565-9a7ae62fe7fa?q=80&w=1600&auto=format&fit=crop",
    alt: "Surfbrætter på en strand i Portugal",
  },
  tram: {
    src: "https://images.unsplash.com/photo-1784600239647-c442ee9166e1?q=80&w=1600&auto=format&fit=crop",
    alt: "Den gule sporvogn i Lissabons gader",
  },
  cliffHouse: {
    src: "https://images.unsplash.com/photo-1675165185096-1a9600218429?q=80&w=1600&auto=format&fit=crop",
    alt: "Hus på en klippe med udsigt over Atlanterhavet",
  },
  cityHill: {
    src: "https://images.unsplash.com/photo-1639603197257-4b5166bed4e7?q=80&w=1600&auto=format&fit=crop",
    alt: "Udsigt over Lissabon fra en af byens bakker",
  },
} as const;

export type ThreeBarrier = {
  id: "job" | "bolig" | "faellesskab";
  emoji: string;
  title: string;
  short: string;
};

export const threeBarriers: ThreeBarrier[] = [
  {
    id: "job",
    emoji: "💼",
    title: "Jobbet",
    short: "Du har en indkomst og et job, som gør flytningen mulig.",
  },
  {
    id: "bolig",
    emoji: "🏠",
    title: "Boligen",
    short: "Du skal ikke starte din boligsøgning alene.",
  },
  {
    id: "faellesskab",
    emoji: "🌊",
    title: "Fællesskabet",
    short: "Du lander ikke i Portugal uden et netværk.",
  },
];

export const heroContent = {
  eyebrow: "Abroader × Portugal",
  headline: "Flyt til Portugal",
  subheadline: "Dansk job. Bolig ordnet. Et nyt liv ved Atlanterhavet.",
  supporting: "Vi hjælper dig fra Danmark til Portugal med job, bolig og et fællesskab fra dag ét.",
  jobLine: "Dansk kundeservice · On-site i Lissabon eller remote · Konkurrencedygtig lønpakke · Hurtig opstart",
  primaryCta: "Ansøg nu — hurtig proces",
  supportingLine: "Kan du starte hurtigt? Så prioriterer vi din ansøgning.",
} as const;

export const everydayLifeContent = {
  heading: "Hvad hvis din næste hverdag var i Portugal?",
  paragraphs: [
    "Du behøver ikke bare finde endnu et job i Danmark. Med dine danske sprogkundskaber kan du bruge dem til at bygge en helt anden hverdag — ved Atlanterhavet, i et internationalt miljø, med varmere vejr året rundt.",
    "Forestil dig at slutte arbejdsdagen og tage direkte mod kysten. Surfe, løbe eller bare sidde med en kaffe i solen, mens du møder mennesker fra hele verden.",
    "Mange daglige udgifter kan være lavere end i Danmark, men boligpriserne varierer meget afhængigt af hvor og hvordan du vælger at bo — det er vi helt ærlige om.",
  ],
} as const;

export type PackageCard = {
  id: "job" | "bolig" | "faellesskab";
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const packageSectionContent: { heading: string; subtext: string; cards: PackageCard[] } = {
  heading: "Hele pakken",
  subtext: "Tre ting, der gør flytningen realistisk — ikke kun jobbet.",
  cards: [
    {
      id: "job",
      emoji: "💼",
      title: "Jobbet",
      tagline: "Dansk kundeservice i Lissabon",
      description:
        "Du arbejder med danske kunder for en international virksomhed med et kendt globalt brand.",
      bullets: [
        "Danish-speaking Customer Support",
        "On-site i Lissabon, eller remote hvis du bor >60 km derfra",
        "Fuldtid",
        "Hurtig rekrutteringsproces",
        "Lønpakke + projekt-, sprog- og performancebonusser afhængig af rolle",
      ],
    },
    {
      id: "bolig",
      emoji: "🏠",
      title: "Boligen",
      tagline: "Vi hjælper dig med at finde din bolig",
      description:
        "Du behøver ikke starte boligsøgningen alene. Vi hjælper dig med relevante muligheder og det praktiske omkring at finde et sted at bo. Boligen betaler du selv.",
      bullets: [
        "Vi hjælper med at identificere relevante boligmuligheder",
        "Vi guider dig gennem områder omkring Lissabon",
        "Vi hjælper med de praktiske ting omkring flytningen",
        "Boligen betales af dig selv, medmindre andet specifikt er oplyst",
      ],
    },
    {
      id: "faellesskab",
      emoji: "🌊",
      title: "Livet",
      tagline: "Du lander ikke alene",
      description: "Et socialt netværk fra dag ét — vi hjælper dig ind i de rigtige fællesskaber.",
      bullets: [
        "Andre danskere og internationale i Lissabon-området",
        "Surf-, gym- og løbe-/sportsfællesskaber",
        "Sociale events og lokale communities",
        "Anbefalinger til aktiviteter langs Atlanterhavskysten",
      ],
    },
  ],
};

export const qualifyContent = {
  heading: "Det her passer godt til dig, hvis...",
  items: [
    { emoji: "🇩🇰", text: "Du taler dansk på modersmålsniveau eller flydende niveau" },
    { emoji: "🇵🇹", text: "Du har lyst til faktisk at flytte til Portugal" },
    { emoji: "💬", text: "Du kan lide at hjælpe mennesker og tale med kunder" },
    { emoji: "✈️", text: "Du kan starte inden for relativt kort tid" },
    { emoji: "🌍", text: "Du har lyst til at prøve livet i udlandet" },
  ],
  note: "Du behøver ikke tale portugisisk.",
} as const;

export const compensationGeneralItems: string[] = [
  "Grundløn",
  "Dansk sprogtillæg",
  "Projektbonus eller projekttillæg",
  "Performancebonus",
  "Attendance bonus",
  "Måltidstilskud",
  "Andre projektspecifikke tillæg",
];

export const jobDetailContent = {
  heading: "Jobbet, der gør flytningen mulig",
  position: "Danish-speaking Customer Support Agent",
  location: "Lissabon-området (on-site eller remote, afhængig af bopæl)",
  employerNote:
    "Du kommer til at arbejde for en international virksomhed med et kendt globalt brand. Vi deler alle detaljer om virksomheden med dig som en del af rekrutteringsprocessen.",
  workModel: {
    heading: "On-site eller remote — det afhænger af, hvor du bor",
    intro: "Arbejdsformen er ikke fast for alle. Den afhænger af din bopæl i forhold til Lissabon.",
    options: [
      {
        title: "Bor du længere end 60 km fra Lissabon?",
        badge: "Remote",
        description: "Så arbejder du hjemmefra. Du er ikke bundet til at bo i selve Lissabon for at få jobbet.",
      },
      {
        title: "Bor du inden for 60 km fra Lissabon?",
        badge: "On-site",
        description: "Så arbejder du fra virksomhedens kontor i Lissabon sammen med resten af teamet.",
      },
    ],
  },
  compensation: {
    heading: "Løn og bonusser",
    intro:
      "Din samlede lønpakke afhænger af det konkrete projekt og kan bestå af grundløn, sprogtillæg og forskellige bonusordninger, herunder:",
    generalItems: compensationGeneralItems,
  },
  startDate: {
    heading: "Opstart",
    body: "Hurtig opstart / ASAP. Kandidater, der kan flytte og starte hurtigt, prioriteres — processen kan gå på dage frem for uger.",
  },
} as const;

export type HousingOption = {
  id: "vaerelse" | "lejlighed";
  title: string;
  priceRange: string;
  description: string;
};

export const housingContent: {
  heading: string;
  intro: string;
  options: HousingOption[];
  areaHeading: string;
  areaSubheading: string;
  areaBody: string;
  note: string;
} = {
  heading: "🏠 Hvad koster det at bo i Portugal?",
  intro:
    "En af fordelene ved at arbejde remote er, at du ikke behøver bo i de dyreste storbyområder. Du kan vælge din base efter budget, livsstil og hvor i Portugal du helst vil bo.",
  options: [
    {
      id: "vaerelse",
      title: "Værelse i delebolig",
      priceRange: "Typisk fra ca. €300–500/md.",
      description:
        "En populær og økonomisk måde at starte livet i Portugal på. Prisen varierer efter område, og i de større og mest populære byer skal du forvente højere priser.",
    },
    {
      id: "lejlighed",
      title: "Egen bolig",
      priceRange: "Typisk fra ca. €500–900+/md. i billigere områder",
      description:
        "Der er stor forskel på boligpriserne i Portugal. I mindre byer og områder væk fra de største turistdestinationer kan du finde væsentligt billigere boliger end omkring Lissabon, Porto og de mest populære kystområder.",
    },
  ],
  areaHeading: "🌊 Find et område, der passer til dig",
  areaSubheading: "Kystliv, surf, natur eller en mindre portugisisk by?",
  areaBody:
    "Abroader hjælper dig med at undersøge områder og boligmuligheder, der passer til dit budget og den hverdag, du ønsker.",
  note: "Priserne er vejledende og afhænger blandt andet af område, sæson, boligtype og standard. Boligen betales af dig selv, og lejeaftalen indgås mellem dig og udlejer.",
};

export const lifeInPortugalContent = {
  heading: "Mere end bare et job",
  headline: "Arbejd i Lissabon. Lev tæt på Atlanterhavet.",
  paragraphs: [
    "Portugal handler ikke kun om jobbet. Det er Atlanterhavskysten, surf, strande og et internationalt fællesskab. Det er gym og sport, portugisisk mad og caféer — og muligheden for at opleve et andet land og møde mennesker fra hele Europa.",
    "Mange daglige udgifter kan være lavere end i Danmark, men boligpriserne varierer meget afhængigt af hvor og hvordan du vælger at bo.",
  ],
  highlights: [
    { icon: "waves" as const, label: "Atlanterhavet & surf" },
    { icon: "sun" as const, label: "Strande & udendørsliv" },
    { icon: "users" as const, label: "Internationale fællesskaber" },
    { icon: "dumbbell" as const, label: "Gym & sport" },
    { icon: "utensils" as const, label: "Portugisisk mad & caféer" },
    { icon: "compass" as const, label: "Selvstændighed i udlandet" },
  ],
} as const;

export const communityContent = {
  heading: "Du skal ikke starte fra nul",
  intro:
    "En af de sværeste dele ved at flytte til udlandet er ikke nødvendigvis jobbet — det er at bygge en ny hverdag. Det vil vi gerne gøre nemmere.",
  line: "Jobbet får dig til Portugal. Fællesskabet får Portugal til at føles som hjemme.",
  items: [
    "Danske og internationale fællesskaber",
    "Sportsklubber og løbegrupper",
    "Gym og træningsfællesskaber",
    "Surf-communities",
    "Sociale meetups og aktiviteter",
  ],
} as const;

export type RelocationStep = { title: string; description: string };

export const howItWorksContent: { heading: string; steps: RelocationStep[]; supporting: string; cta: string } = {
  heading: "Fra Danmark til Portugal",
  steps: [
    { title: "Ansøg", description: "Fortæl os lidt om dig selv, og hvornår du kan starte." },
    {
      title: "Kort samtale",
      description: "Vi tager en hurtig snak om jobbet, og om Portugal faktisk passer til dig.",
    },
    {
      title: "Jobsamtale",
      description: "Vi hjælper dig videre til virksomheden. Processen er hurtig og kan tage dage frem for uger.",
    },
    {
      title: "Vi hjælper med boligen",
      description: "Når jobbet er på plads, hjælper vi dig med boligmuligheder og det praktiske omkring flytningen.",
    },
    {
      title: "Velkommen til Portugal 🇵🇹",
      description: "Du starter jobbet, og vi hjælper dig videre mod communities, sport og dit nye liv i Portugal.",
    },
  ],
  supporting: "Fra ansøgning til jobtilbud kan gå hurtigt. Kan du starte hurtigt? Så prioriterer vi din ansøgning.",
  cta: "Jeg vil til Portugal",
};

export const relocationSupportContent = {
  heading: "Vi hjælper dig med landingen",
  intro:
    "Som dansk statsborger behøver du ikke et arbejdsvisum for at tage et job i Portugal, da både Danmark og Portugal er medlemmer af EU. Der kan stadig være lokale registreringer og praktiske ting, der skal ordnes efter flytningen — dem hjælper vi dig med at forstå.",
  points: [
    { title: "Flytningen", description: "Praktisk forberedelse og overblik, inden du rejser." },
    { title: "Boligen", description: "Guidning gennem boligmuligheder og områder omkring Lissabon." },
    {
      title: "Praktiske ting",
      description: "Hjælp til at forstå lokale registreringer og formaliteter efter flytningen.",
    },
    { title: "Landingen", description: "Introduktion til relevante fællesskaber, så du ikke starter alene." },
  ],
} as const;

export type FaqItem = { question: string; answer: string };

export const faqContent: { heading: string; items: FaqItem[] } = {
  heading: "Ofte stillede spørgsmål",
  items: [
    {
      question: "Hvad tjener jeg?",
      answer:
        "Lønpakken varierer fra projekt til projekt og kan bestå af grundløn, dansk sprogtillæg, projektbonus, performancebonus, attendance bonus og måltidstilskud. Du får altid den præcise lønpakke oplyst, inden du accepterer et job.",
    },
    {
      question: "Er boligen gratis?",
      answer:
        'Nej. Når vi skriver "bolig ordnet", betyder det, at Abroader hjælper dig med at finde relevante boligmuligheder og komme igennem det praktiske omkring boligsøgningen. Du betaler som udgangspunkt selv din husleje.',
    },
    {
      question: "Skal jeg have visum?",
      answer:
        "Som dansk statsborger behøver du ikke et arbejdsvisum for at arbejde i Portugal, da både Danmark og Portugal er medlemmer af EU. Der kan dog være lokale registreringer og praktiske formaliteter i forbindelse med flytningen.",
    },
    {
      question: "Hvad med skat og forsikring, når jeg flytter?",
      answer:
        "Det afhænger af din personlige situation. Som udgangspunkt bliver du skattepligtig i Portugal, når du bor og arbejder der, og din danske sygesikring dækker ikke automatisk, når du er bosat i udlandet. Vi hjælper dig med at forstå de praktiske skridt, som lokal registrering og forsikring — men anbefaler altid, at du også undersøger din egen situation, fx via SKAT eller en rådgiver, inden du flytter.",
    },
    {
      question: "Hvor hurtigt går processen?",
      answer:
        "Hurtigt. For kandidater, der passer til rollen og kan starte snart, kan processen gå fra første samtale til jobtilbud på få dage.",
    },
    {
      question: "Skal jeg tale portugisisk?",
      answer: "Nej. Rollen er baseret på dine danske sprogfærdigheder, og portugisisk er ikke et krav.",
    },
    {
      question: "Skal jeg bo i selve Lissabon?",
      answer:
        "Nej, ikke nødvendigvis. Bor du inden for 60 km fra Lissabon, arbejder du on-site fra kontoret. Bor du længere væk, er rollen remote, og du arbejder hjemmefra. Det giver dig mere frihed til at vælge, hvor i Portugal du vil bo.",
    },
    {
      question: "Hvem arbejder jeg for?",
      answer:
        "Du vil arbejde for en international virksomhed med et kendt globalt brand/projekt. Vi deler alle virksomhedens detaljer med dig som en del af rekrutteringsprocessen.",
    },
    {
      question: "Hvad hjælper Abroader med?",
      answer:
        "Vi hjælper med jobprocessen, relocation-vejledning, boligsøgning, praktisk forberedelse, anbefalinger til fællesskaber og at lande godt i Portugal. Udgifter som husleje og lignende er som udgangspunkt dit eget ansvar.",
    },
  ],
};

export const trustSectionContent = {
  heading: "Fra første samtale til din første uge i Portugal",
  body: "Abroader hjælper dig hele vejen fra beslutningen om at flytte til de praktiske ting omkring din nye hverdag i Portugal.",
} as const;

export const finalCtaContent = {
  heading: "Måske er det Portugal, du har ventet på 🇵🇹",
  bodyLines: ["Dansk job. Hjælp til bolig. Et fællesskab at lande i.", "Du skal bare være klar til at tage springet."],
  primaryCta: "Ledige muligheder lige nu — ansøg i dag",
  supporting: "Hurtig proces for kandidater, der kan starte snart.",
} as const;
