import type { OpportunityLanding } from "./types";
import { SURF_INSTRUCTOR_ABROAD } from "./surf-instructor-abroad";
import { TEACH_ENGLISH_ABROAD } from "./teach-english-abroad";
import { YACHT_SAILING_CREW_JOBS } from "./yacht-sailing-crew-jobs";
import { SKI_RESORT_SEASONAL_WORK } from "./ski-resort-seasonal-work";
import { CAMP_COUNSELLOR_ABROAD } from "./camp-counsellor-abroad";
import { WINERY_HARVEST_WORK } from "./winery-harvest-work";
import { AU_PAIR_ABROAD } from "./au-pair-abroad";
import { BARTENDING_JOBS_ABROAD } from "./bartending-jobs-abroad";
import { DIVE_INSTRUCTOR_ABROAD } from "./dive-instructor-abroad";
import { HOSTEL_WORK_ABROAD } from "./hostel-work-abroad";
import { FRUIT_PICKING_JOBS_ABROAD } from "./fruit-picking-jobs-abroad";
import { CRUISE_SHIP_JOBS } from "./cruise-ship-jobs";
import { NANNY_JOBS_ABROAD } from "./nanny-jobs-abroad";
import { HIKING_GUIDE_JOBS } from "./hiking-guide-jobs";
import { FARM_WORK_ABROAD } from "./farm-work-abroad";
import { CAMP_COUNSELOR_ABROAD } from "./camp-counselor-abroad";
import { SURF_RETREAT_ABROAD } from "./surf-retreat-abroad";
import { YOGA_MEDITATION_RETREAT } from "./yoga-meditation-retreat";
import { KITESURFING_CAMP_ABROAD } from "./kitesurfing-camp-abroad";
import { MARTIAL_ARTS_RETREAT_ABROAD } from "./martial-arts-retreat-abroad";
import { MOTORCYCLE_TOUR_RETREAT } from "./motorcycle-tour-retreat";
import { COLD_WATER_RETREAT } from "./cold-water-retreat";
import { PILATES_RETREAT_ABROAD } from "./pilates-retreat-abroad";
import { FITNESS_CAMP_ABROAD } from "./fitness-camp-abroad";
import { CREATIVE_ARTS_RETREAT } from "./creative-arts-retreat";
import { BURNOUT_WELLNESS_RETREAT } from "./burnout-wellness-retreat";
import { SEA_TURTLE_CONSERVATION } from "./sea-turtle-conservation";
import { WILDLIFE_CONSERVATION_VOLUNTEER } from "./wildlife-conservation-volunteer";
import { MARINE_REEF_CONSERVATION } from "./marine-reef-conservation";
import { TEACHING_COMMUNITY_VOLUNTEER } from "./teaching-community-volunteer";
import { CONSTRUCTION_VOLUNTEER_ABROAD } from "./construction-volunteer-abroad";
import { DIGITAL_NOMAD_COLIVING } from "./digital-nomad-coliving";
import { ECO_VILLAGE_LIVING_ABROAD } from "./eco-village-living-abroad";
import { ISLAND_BASED_REMOTE_WORKING } from "./island-based-remote-working";
import { SAILBOAT_LIVING_ABROAD } from "./sailboat-living-abroad";
import { HOUSE_SITTING_ABROAD } from "./house-sitting-abroad";
import { WORKCATION_HOTSPOT_GUIDE } from "./workcation-hotspot-guide";
import { CAREER_BREAK_SABBATICAL_ABROAD } from "./career-break-sabbatical-abroad";
import { ECO_FARM_PERMACULTURE_VOLUNTEER } from "./eco-farm-permaculture-volunteer";
import { MEDICAL_HEALTHCARE_VOLUNTEER } from "./medical-healthcare-volunteer";
import { ANIMAL_SHELTER_RESCUE_VOLUNTEER } from "./animal-shelter-rescue-volunteer";
import { REFUGEE_COMMUNITY_SUPPORT } from "./refugee-community-support";
import { SURF_OCEAN_THERAPY_VOLUNTEER } from "./surf-ocean-therapy-volunteer";
import { LANGUAGE_IMMERSION_ABROAD } from "./language-immersion-abroad";
import { COOKING_SCHOOL_ABROAD } from "./cooking-school-abroad";
import { PHOTOGRAPHY_TRAVEL_COURSE } from "./photography-travel-course";
import { CODING_BOOTCAMP_ABROAD } from "./coding-bootcamp-abroad";
import { SAILING_SCHOOL_ABROAD } from "./sailing-school-abroad";
import { DANCE_PERFORMING_ARTS_ABROAD } from "./dance-performing-arts-abroad";
import { ADVENTURE_CERTIFICATION_ABROAD } from "./adventure-certification-abroad";
import { WINE_COURSE_ABROAD } from "./wine-course-abroad";
import { AYURVEDA_TRADITIONAL_MEDICINE_RETREAT } from "./ayurveda-traditional-medicine-retreat";
import { STARGAZING_ASTRONOMY_TRAVEL } from "./stargazing-astronomy-travel";

export type { OpportunityLanding };
export type { ProviderCategory, Provider, ProviderGroup, Region, FaqItem, SalaryHighlight, RoleType, SeasonalCalendarEntry, GoodToKnowTip, YoutubeVideo } from "./types";

const REGISTRY: Record<string, OpportunityLanding> = {
  "surf-instructor-abroad": SURF_INSTRUCTOR_ABROAD,
  "teach-english-abroad": TEACH_ENGLISH_ABROAD,
  "yacht-sailing-crew-jobs": YACHT_SAILING_CREW_JOBS,
  "ski-resort-seasonal-work": SKI_RESORT_SEASONAL_WORK,
  "camp-counsellor-abroad": CAMP_COUNSELLOR_ABROAD,
  "winery-harvest-work": WINERY_HARVEST_WORK,
  "au-pair-abroad": AU_PAIR_ABROAD,
  "bartending-jobs-abroad": BARTENDING_JOBS_ABROAD,
  "dive-instructor-abroad": DIVE_INSTRUCTOR_ABROAD,
  "hostel-work-abroad": HOSTEL_WORK_ABROAD,
  "fruit-picking-jobs-abroad": FRUIT_PICKING_JOBS_ABROAD,
  "cruise-ship-jobs": CRUISE_SHIP_JOBS,
  "nanny-jobs-abroad": NANNY_JOBS_ABROAD,
  "hiking-guide-jobs": HIKING_GUIDE_JOBS,
  "farm-work-abroad": FARM_WORK_ABROAD,
  "camp-counselor-abroad": CAMP_COUNSELOR_ABROAD,
  "surf-retreat-abroad": SURF_RETREAT_ABROAD,
  "yoga-meditation-retreat": YOGA_MEDITATION_RETREAT,
  "kitesurfing-camp-abroad": KITESURFING_CAMP_ABROAD,
  "martial-arts-retreat-abroad": MARTIAL_ARTS_RETREAT_ABROAD,
  "motorcycle-tour-retreat": MOTORCYCLE_TOUR_RETREAT,
  "cold-water-retreat": COLD_WATER_RETREAT,
  "pilates-retreat-abroad": PILATES_RETREAT_ABROAD,
  "fitness-camp-abroad": FITNESS_CAMP_ABROAD,
  "creative-arts-retreat": CREATIVE_ARTS_RETREAT,
  "burnout-wellness-retreat": BURNOUT_WELLNESS_RETREAT,
  "sea-turtle-conservation": SEA_TURTLE_CONSERVATION,
  "wildlife-conservation-volunteer": WILDLIFE_CONSERVATION_VOLUNTEER,
  "marine-reef-conservation": MARINE_REEF_CONSERVATION,
  "teaching-community-volunteer": TEACHING_COMMUNITY_VOLUNTEER,
  "construction-volunteer-abroad": CONSTRUCTION_VOLUNTEER_ABROAD,
  "digital-nomad-coliving": DIGITAL_NOMAD_COLIVING,
  "eco-village-living-abroad": ECO_VILLAGE_LIVING_ABROAD,
  "island-based-remote-working": ISLAND_BASED_REMOTE_WORKING,
  "sailboat-living-abroad": SAILBOAT_LIVING_ABROAD,
  "house-sitting-abroad": HOUSE_SITTING_ABROAD,
  "workcation-hotspot-guide": WORKCATION_HOTSPOT_GUIDE,
  "career-break-sabbatical-abroad": CAREER_BREAK_SABBATICAL_ABROAD,
  "eco-farm-permaculture-volunteer": ECO_FARM_PERMACULTURE_VOLUNTEER,
  "medical-healthcare-volunteer": MEDICAL_HEALTHCARE_VOLUNTEER,
  "animal-shelter-rescue-volunteer": ANIMAL_SHELTER_RESCUE_VOLUNTEER,
  "refugee-community-support": REFUGEE_COMMUNITY_SUPPORT,
  "surf-ocean-therapy-volunteer": SURF_OCEAN_THERAPY_VOLUNTEER,
  "language-immersion-abroad": LANGUAGE_IMMERSION_ABROAD,
  "cooking-school-abroad": COOKING_SCHOOL_ABROAD,
  "photography-travel-course": PHOTOGRAPHY_TRAVEL_COURSE,
  "coding-bootcamp-abroad": CODING_BOOTCAMP_ABROAD,
  "sailing-school-abroad": SAILING_SCHOOL_ABROAD,
  "dance-performing-arts-abroad": DANCE_PERFORMING_ARTS_ABROAD,
  "adventure-certification-abroad": ADVENTURE_CERTIFICATION_ABROAD,
  "wine-course-abroad": WINE_COURSE_ABROAD,
  "ayurveda-traditional-medicine-retreat": AYURVEDA_TRADITIONAL_MEDICINE_RETREAT,
  "stargazing-astronomy-travel": STARGAZING_ASTRONOMY_TRAVEL,
};

export const OPPORTUNITY_SLUGS = Object.keys(REGISTRY) as [string, ...string[]];

/** One row per provider card across all `/opportunities/[slug]` guides (job boards, programmes, etc.). */
export function countOpportunityProviders(): number {
  let total = 0;
  for (const landing of Object.values(REGISTRY)) {
    for (const group of landing.providerGroups) {
      total += group.providers.length;
    }
  }
  return total;
}

export function getOpportunityLanding(slug: string): OpportunityLanding | null {
  return REGISTRY[slug] ?? null;
}

export function isOpportunitySlug(slug: string): slug is string {
  return slug in REGISTRY;
}
