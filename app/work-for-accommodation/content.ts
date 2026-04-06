import { RECRUITER_CONTACT_URL } from "../language-jobs/content";

export { RECRUITER_CONTACT_URL };

export type PlatformDetailRow = {
  icon: string;
  label: string;
  value: string;
};

export type WorkExchangePlatform = {
  id: string;
  bestFor: string;
  name: string;
  description: string;
  details: PlatformDetailRow[];
  pros: string[];
  cons: string[];
  quote: string;
  metricLabel: string;
  joinCta: string;
  joinUrl: string;
};

export const PLATFORMS: WorkExchangePlatform[] = [
  {
    id: "workaway",
    bestFor: "Variety",
    name: "Workaway",
    description:
      "The world's leading community for cultural exchange and volunteering.",
    details: [
      { icon: "public", label: "Region", value: "Global (170+ countries)" },
      { icon: "home", label: "Housing", value: "Yes (Included)" },
      { icon: "restaurant", label: "Meals", value: "Often Included" },
      { icon: "schedule", label: "Hours", value: "5 hrs/day, 5 days/week" },
      { icon: "payments", label: "Cost", value: "€49/yr (Single)" },
      { icon: "work", label: "Work Type", value: "Hostels, Farms, Eco" },
    ],
    pros: [
      "Infinite variety of hosts from islands to cities.",
      "Great for finding niche skills like boat building.",
    ],
    cons: [
      "Vetting process is purely review-based.",
      "High volume of applicants in popular cities.",
    ],
    quote:
      "It feels like being part of a global family where your help is genuinely valued over a cup of coffee.",
    metricLabel: "Competition",
    joinCta: "Join Workaway",
    joinUrl: "https://www.workaway.info",
  },
  {
    id: "worldpackers",
    bestFor: "Community",
    name: "Worldpackers",
    description: "Verified opportunities with a heavy focus on safety and solo travelers.",
    details: [
      { icon: "public", label: "Region", value: "Global (Specialty: Americas)" },
      { icon: "home", label: "Housing", value: "Yes (Guaranteed)" },
      { icon: "restaurant", label: "Meals", value: "Frequently Included" },
      { icon: "schedule", label: "Hours", value: "4–6 hrs/day" },
      { icon: "payments", label: "Cost", value: "$49/yr (Solo)" },
      { icon: "work", label: "Work Type", value: "Hostels, NGOs, Social" },
    ],
    pros: [
      "Insurance provided if things don't go as planned.",
      "Strong educational content for first-timers.",
    ],
    cons: [
      "Fewer listings than Workaway in remote areas.",
      "Can feel a bit more corporate and organized.",
    ],
    quote:
      "It feels like traveling with a safety net, perfect for those stepping out alone for the first time.",
    metricLabel: "Effort Required",
    joinCta: "Join Worldpackers",
    joinUrl: "https://www.worldpackers.com",
  },
  {
    id: "wwoof",
    bestFor: "Farming",
    name: "WWOOF",
    description: "Organic farming opportunities. Get your hands dirty in paradise.",
    details: [
      { icon: "public", label: "Region", value: "Global (By Country)" },
      { icon: "agriculture", label: "Housing", value: "Yes (On-farm)" },
      { icon: "local_dining", label: "Meals", value: "Yes (3 Meals/day)" },
      { icon: "hourglass_bottom", label: "Hours", value: "4–6 hrs/day" },
      { icon: "payments", label: "Cost", value: "€20–€40 per country" },
      { icon: "grass", label: "Work Type", value: "Organic Farms Only" },
    ],
    pros: [
      "Deep immersion in nature and local agriculture.",
      "Meals are almost always fresh and organic.",
    ],
    cons: [
      "Physically demanding; not a vacation.",
      "Must pay separately for each country membership.",
    ],
    quote:
      "It feels like returning to roots, swapping the digital noise for the sound of the earth and shared meals.",
    metricLabel: "Effort Required",
    joinCta: "Join WWOOF",
    joinUrl: "https://wwoof.net",
  },
  {
    id: "helpx",
    bestFor: "Simplicity",
    name: "HelpX",
    description: "Classic volunteer platform with a huge European presence.",
    details: [
      { icon: "public", label: "Region", value: "Global (Strong in EU/AU)" },
      { icon: "home", label: "Housing", value: "Yes" },
      { icon: "flatware", label: "Meals", value: "Generally Included" },
      { icon: "av_timer", label: "Hours", value: "4 hrs/day" },
      { icon: "payments", label: "Cost", value: "€20 for 2 years" },
      { icon: "cottage", label: "Work Type", value: "Farmstays, Bed & Breakfasts" },
    ],
    pros: [
      "Cheapest paid platform on the market.",
      "Excellent coverage in rural Europe and Australasia.",
    ],
    cons: [
      "The website UI feels stuck in 2005.",
      "Vetting is less rigorous than competitors.",
    ],
    quote:
      "It feels like the old-school internet, functional and gritty but leads to the most authentic experiences.",
    metricLabel: "Beginner Score",
    joinCta: "Join HelpX",
    joinUrl: "https://www.helpx.net",
  },
  {
    id: "trustedhousesitters",
    bestFor: "Pet Lovers",
    name: "TrustedHousesitters",
    description: "Stay in luxury homes while caring for beloved pets.",
    details: [
      { icon: "public", label: "Region", value: "Global (Prime locations)" },
      { icon: "villa", label: "Housing", value: "Entire Home" },
      { icon: "no_meals", label: "Meals", value: "Rarely Included" },
      { icon: "pets", label: "Hours", value: "24/7 care for pets" },
      { icon: "payments", label: "Cost", value: "€119/yr (Premium)" },
      { icon: "house", label: "Work Type", value: "Pet & House Sitting" },
    ],
    pros: [
      "Stay in incredible homes you'd never afford.",
      "Completely private living space.",
    ],
    cons: [
      "High competition for top locations.",
      "Serious responsibility; pets come first.",
    ],
    quote:
      "It feels like living the high life in exchange for dog walks and cat cuddles.",
    metricLabel: "Competition",
    joinCta: "Join THS",
    joinUrl: "https://www.trustedhousesitters.com",
  },
  {
    id: "nomador",
    bestFor: "Long Stays",
    name: "Nomador",
    description:
      "A global housesitting community with a focus on trust and French-style hospitality.",
    details: [
      { icon: "public", label: "Region", value: "Global (Strongest in FR/EU)" },
      { icon: "home", label: "Housing", value: "Entire Home" },
      { icon: "no_meals", label: "Meals", value: "No" },
      { icon: "watch_later", label: "Hours", value: "Low maintenance" },
      { icon: "payments", label: "Cost", value: "€79/yr (Standard)" },
      { icon: "key", label: "Work Type", value: "Long-term Housesit" },
    ],
    pros: [
      "Features Stopovers – 1–2 night free stays with locals.",
      "Generally less competitive than TrustedHousesitters.",
    ],
    cons: [
      "Heavy focus on French-speaking countries.",
      "Free tier is very limited in functionality.",
    ],
    quote:
      "It feels like being trusted with the keys to a French villa by a distant, sophisticated aunt.",
    metricLabel: "Effort Required",
    joinCta: "Join Nomador",
    joinUrl: "https://www.nomador.com",
  },
  {
    id: "hippohelp",
    bestFor: "Free",
    name: "Hippohelp",
    description: "Map-based free volunteer platform with no membership fees.",
    details: [
      { icon: "public", label: "Region", value: "Global Map" },
      { icon: "home", label: "Housing", value: "Yes" },
      { icon: "restaurant", label: "Meals", value: "Varies" },
      { icon: "schedule", label: "Hours", value: "Negotiable" },
      { icon: "payments", label: "Cost", value: "100% Free" },
      { icon: "map", label: "Work Type", value: "General help" },
    ],
    pros: [
      "Absolutely no paywall to contact hosts.",
      "Map interface is great for visual planning.",
    ],
    cons: [
      "Much smaller host database than giants.",
      "Lower response rates from inactive hosts.",
    ],
    quote:
      "It feels like a wild-west treasure map where some spots are gold and others are empty camps.",
    metricLabel: "Competition",
    joinCta: "Join Hippohelp",
    joinUrl: "https://hippohelp.com",
  },
  {
    id: "helpstay",
    bestFor: "Families",
    name: "HelpStay",
    description: "Carefully vetted projects perfect for beginners and pairs.",
    details: [
      { icon: "public", label: "Region", value: "Global (Vetted)" },
      { icon: "home", label: "Housing", value: "Yes" },
      { icon: "restaurant", label: "Meals", value: "Commonly Included" },
      { icon: "schedule", label: "Hours", value: "4–5 hrs/day" },
      { icon: "payments", label: "Cost", value: "€29/yr (Single)" },
      { icon: "groups", label: "Work Type", value: "Farms, Eco-projects" },
    ],
    pros: [
      "Higher quality host descriptions and vetting.",
      "Easier to find opportunities for couples or families.",
    ],
    cons: [
      "Fewer total listings than Workaway.",
      "Search filters can be a bit rigid.",
    ],
    quote:
      "It feels like a curated boutique experience for those who value quality over quantity.",
    metricLabel: "Effort Required",
    joinCta: "Join HelpStay",
    joinUrl: "https://www.helpstay.com",
  },
  {
    id: "volunteer-world",
    bestFor: "Impact",
    name: "Volunteer World",
    description: "Professional social impact projects across all continents.",
    details: [
      { icon: "public", label: "Region", value: "Global (All continents)" },
      { icon: "home", label: "Housing", value: "Often included" },
      { icon: "restaurant", label: "Meals", value: "Varies by project" },
      { icon: "schedule", label: "Hours", value: "Project-based" },
      { icon: "payments", label: "Cost", value: "Fees vary" },
      { icon: "groups", label: "Work Type", value: "NGOs, wildlife, teaching" },
    ],
    pros: [
      "Searchable database of structured volunteer programs.",
      "Clear project descriptions and expectations.",
    ],
    cons: [
      "Some programs charge placement or program fees.",
      "Less “informal” than classic work exchanges.",
    ],
    quote:
      "It feels like choosing impact first—then building your trip around a mission you care about.",
    metricLabel: "Competition",
    joinCta: "Join Volunteer World",
    joinUrl: "https://www.volunteerworld.com",
  },
  {
    id: "couchsurfing",
    bestFor: "Community",
    name: "Couchsurfing",
    description:
      "Stay with locals for free and meet travelers worldwide—no work exchange required.",
    details: [
      { icon: "public", label: "Region", value: "Global" },
      { icon: "home", label: "Housing", value: "Host homes (varies)" },
      { icon: "restaurant", label: "Meals", value: "Sometimes shared" },
      { icon: "schedule", label: "Hours", value: "Social, not scheduled" },
      { icon: "payments", label: "Cost", value: "Low membership fee" },
      { icon: "groups", label: "Work Type", value: "Hospitality & meetups" },
    ],
    pros: [
      "Huge community and events in major cities.",
      "Great for short stops and cultural exchange.",
    ],
    cons: [
      "Not a structured work-for-stay model.",
      "Safety and comfort depend heavily on the host.",
    ],
    quote:
      "It feels like crashing with a friend of a friend—sometimes magic, sometimes a gamble.",
    metricLabel: "Beginner Score",
    joinCta: "Join Couchsurfing",
    joinUrl: "https://www.couchsurfing.com",
  },
];
