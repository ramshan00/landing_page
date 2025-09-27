import { FaqSection } from "./types";

const faqSections: FaqSection[] = [
  {
    title: "Account & Profile",
    items: [
      {
        question: "How do I create or update my profile?",
        answer:
          "Simply sign up, go to your profile section, and add details like budget, lifestyle, study habits, food preferences, and city. You can update anytime.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account from settings. If you face issues, email support@nextdoormate.com with your registered email, and we’ll remove it.",
      },
      {
        question: "Do I need to fill in all lifestyle details?",
        answer:
          "It’s recommended! The more details you share (e.g., cleanliness, sleep schedule, noise tolerance), the more accurate your roommate matches will be.",
      },
    ],
  },
  {
    title: "Roommate Matching",
    items: [
      {
        question: "How does the matching system work?",
        answer:
          "Our AI agents compare your lifestyle, budget, and habits with others to suggest the most compatible roommates.",
      },
      {
        question: "Will I know why a match is suggested?",
        answer:
          "Yes! The Wingman Agent explains the reasons for compatibility and possible compromises—for example, 'Both are night owls with similar budgets.'",
      },
      {
        question: "Can I see conflicts before deciding?",
        answer:
          "Yes, the Red Flag Agent highlights lifestyle mismatches such as 'One prefers quiet nights, the other hosts late gatherings.'",
      },
    ],
  },
  {
    title: "Housing & Rooms",
    items: [
      {
        question: "Does the system also suggest rooms?",
        answer:
          "Yes, the Room Hunter Agent can connect you to available listings in your budget and preferred city/area.",
      },
      {
        question: "What if the room is already taken?",
        answer:
          "Listings are updated regularly, but availability may change quickly. You can refresh or set alerts for new matches.",
      },
      {
        question: "Can I filter housing options?",
        answer:
          "Yes, you can filter by rent, location, amenities, and room type to find the best option for you and your matched roommate.",
      },
    ],
  },
  {
    title: "Safety & Support",
    items: [
      {
        question: "How do you ensure safe matches?",
        answer:
          "Profiles are structured and verified where possible. The system highlights red flags to help you make transparent, safe decisions.",
      },
      {
        question: "What if I face a problem with my match?",
        answer:
          "You can unmatch anytime and request new recommendations. Our agents will suggest alternatives.",
      },
      {
        question: "How can I report an issue?",
        answer:
          "Send details to support@nextdoormate.com with screenshots or profile info, and our team will review it quickly.",
      },
    ],
  },
];

export default faqSections;
