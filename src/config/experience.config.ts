import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Software Engineer",
    employmentType: "Full time",
    company: {
      name: "Sopra Steria",
      url: "https://www.soprasteria.es/",
    },
    location: {
      name: "Hybrid",
    },
    start: "February 2024",
    end: "Present",
    description: [
      "Automated and optimized business logic for the core existing functionality.",
      "Was given the responsibility of analyzing and migrating a whole platform from an outdated technology",
    ],
  },

  {
    title: "Software Developer",
    employmentType: "Part time",
    company: {
      name: "Polytechnic University of Valencia",
      url: "https://www.upv.es/",
    },
    location: {
      name: "On site",
    },
    start: "Oct. 2023",
    end: "January 2024",
    description: [
      "Participated in the development of a social media app",
      "Built signficant part of the backend and lent a hand in frontend",
    ],
  },

  {
    title: "Student",
    employmentType: "Full time",
    company: {
      name: "Polytechnic University of Valencia",
      url: "https://www.upv.es/",
    },
    location: {
      name: "On site",
    },
    start: "Sept. 2019",
    end: "December 2023",
    description: [
      "Built several smaller projects throughout the years",
      "Got my Bachelor's degree",
    ],
  },
];
