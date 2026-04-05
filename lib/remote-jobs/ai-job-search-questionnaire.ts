import type { BrowseJobDto } from "@/lib/remote-jobs/browse-data";
import {
  jobMatchesEmploymentType,
  jobMatchesLocationRegion,
  jobMatchesQuestionnaireSalary,
  jobMatchesRole,
  jobMatchesSeniority,
  type LocationRegionFilter,
  type QuestionnaireSalaryExpectation,
  type QuestionnaireSeniority,
  type RoleFilter,
  type TypeFilter,
} from "@/lib/remote-jobs/job-filters";

export const AI_JOB_SEARCH_TOTAL_STEPS = 5;

export type QuestionnaireAnswers = {
  category: string;
  region: string;
  employmentType: string;
  seniority: string;
  salaryExpectation: string;
};

export type QuestionOption = { value: string; label: string };

export type QuestionStepDef = {
  id: keyof QuestionnaireAnswers;
  prompt: string;
  options: QuestionOption[];
};

export const QUESTION_STEPS: QuestionStepDef[] = [
  {
    id: "category",
    prompt: "What type of job are you looking for?",
    options: [
      { value: "customer-support", label: "Customer Support" },
      { value: "sales", label: "Sales" },
      { value: "marketing", label: "Marketing" },
      { value: "tech-developer", label: "Tech / Developer" },
      { value: "design", label: "Design" },
      { value: "finance", label: "Finance" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "region",
    prompt: "Where can you work from?",
    options: [
      { value: "worldwide", label: "Worldwide" },
      { value: "europe", label: "Europe" },
      { value: "americas", label: "Americas" },
      { value: "asia-oceania", label: "Asia / Oceania" },
    ],
  },
  {
    id: "employmentType",
    prompt: "What type of job do you want?",
    options: [
      { value: "full-time", label: "Full-time" },
      { value: "part-time", label: "Part-time" },
      { value: "contract-freelance", label: "Contract / Freelance" },
    ],
  },
  {
    id: "seniority",
    prompt: "What's your experience level?",
    options: [
      { value: "entry", label: "Entry level" },
      { value: "mid", label: "Mid level" },
      { value: "senior", label: "Senior" },
    ],
  },
  {
    id: "salaryExpectation",
    prompt: "Salary expectation",
    options: [
      { value: "not-important", label: "Not important" },
      { value: "under-2000", label: "Under €2,000/month" },
      { value: "2000-4000", label: "€2,000–€4,000/month" },
      { value: "4000-plus", label: "€4,000+/month" },
    ],
  },
];

function categoryToRoleFilter(category: string): RoleFilter {
  switch (category) {
    case "customer-support":
      return "customer-success";
    case "sales":
      return "sales";
    case "marketing":
      return "marketing";
    case "tech-developer":
      return "engineering";
    case "design":
      return "design";
    case "finance":
      return "finance-ops";
    case "other":
    default:
      return "all";
  }
}

function regionToLocationFilter(region: string): LocationRegionFilter {
  switch (region) {
    case "worldwide":
      /** "Worldwide" means no region constraint; the browse `worldwide` filter is too strict (most rows list specific regions). */
      return "all";
    case "europe":
      return "europe";
    case "americas":
      return "americas";
    case "asia-oceania":
      return "asia-pacific";
    default:
      return "all";
  }
}

function employmentToTypeFilter(employment: string): TypeFilter {
  switch (employment) {
    case "full-time":
      return "full-time";
    case "part-time":
      return "part-time";
    case "contract-freelance":
      return "freelance";
    default:
      return "all";
  }
}

function parseSeniority(s: string): QuestionnaireSeniority | null {
  if (s === "entry" || s === "mid" || s === "senior") return s;
  return null;
}

function parseSalaryExpectation(s: string): QuestionnaireSalaryExpectation | null {
  if (s === "not-important" || s === "under-2000" || s === "2000-4000" || s === "4000-plus") return s;
  return null;
}

export function filterJobsByAnswers(jobs: BrowseJobDto[], answers: QuestionnaireAnswers): BrowseJobDto[] {
  const role = categoryToRoleFilter(answers.category);
  const location = regionToLocationFilter(answers.region);
  const employment = employmentToTypeFilter(answers.employmentType);
  const seniority = parseSeniority(answers.seniority);
  const salaryExp = parseSalaryExpectation(answers.salaryExpectation);

  return jobs.filter((job) => {
    if (!jobMatchesLocationRegion(job, location)) return false;
    if (!jobMatchesRole(job, role)) return false;
    if (!jobMatchesEmploymentType(job, employment)) return false;
    if (answers.seniority && !seniority) return false;
    if (answers.salaryExpectation && !salaryExp) return false;
    if (seniority && !jobMatchesSeniority(job, seniority)) return false;
    if (salaryExp && !jobMatchesQuestionnaireSalary(job, salaryExp)) return false;
    return true;
  });
}

export function isCompleteAnswers(a: QuestionnaireAnswers): boolean {
  return (
    a.category !== "" &&
    a.region !== "" &&
    a.employmentType !== "" &&
    a.seniority !== "" &&
    a.salaryExpectation !== ""
  );
}
