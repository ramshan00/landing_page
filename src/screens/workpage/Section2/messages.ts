// src/data/workSteps.ts
import { WorkStep } from "./types";

export const workSteps: WorkStep[] = [
  {
    id: 1,
    step: "01",
    title: "Sign Up & Share Preferences",
    highlight: "Start your journey by sharing budget, lifestyle habits, and location.",
    description:
      "Our AI transforms it into a structured profile  clear, detailed, and ready for smart matching.",
  },
  {
    id: 2,
    step: "02",
    title: "Profile Parsing",
    highlight: "No more messy ads. Clean, comparable attributes.",
    description:
      "The Profile Reader Agent scans Urdu/English roommate posts and converts them into structured, easy-to-compare profiles.",
  },
  {
    id: 3,
    step: "03",
    title: "Smart Match Scoring",
    highlight: "Compatibility scored with precision.",
    description:
      "Sleep schedules, cleanliness, study habits, and budgets  the Match Scorer Agent evaluates and ranks your best-fit roommates.",
  },
  {
    id: 4,
    step: "04",
    title: "Conflict Detection & Wingman Insights",
    highlight: "Spot clashes before they happen.",
    description:
      "The Red Flag Agent identifies potential lifestyle conflicts, while the Wingman Agent explains matches and suggests compromises.",
  },
  {
    id: 5,
    step: "05",
    title: "Housing Suggestions",
    highlight: "Find housing that fits your lifestyle and budget.",
    description:
      "The Room Hunter Agent connects you to available housing listings in your preferred area and budget.",
  },
];
