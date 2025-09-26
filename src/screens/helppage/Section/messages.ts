import { FaqSection } from "./types";
const faqSections: FaqSection[] = [
  {
    title: "Account & Profile",
    items: [
      {
        question: "How do I create or update my profile?",
        answer:
          "Log in, go to “Profile,” and add/update your skills, experience, and portfolio.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, email support@urducareerbot.com with your registered email, and we’ll remove it.",
      },
      {
        question: "Do I need to be fluent in English?",
        answer:
          "Not necessarily. URDU supports multiple languages, including Urdu, to make freelancing more accessible.",
      },
    ],
  },
  {
    title: "Jobs & Proposals",
    items: [
      {
        question: "Which job platforms are supported?",
        answer:
          "Currently we scan top freelancing platforms, with more integrations coming soon.",
      },
      {
        question: "Why don’t I see some jobs?",
        answer:
          "Job results depend on your skills and filters. Try updating your profile or adjusting keywords.",
      },
      {
        question: "How does the proposal generator work?",
        answer:
          "URDU analyzes the job post and your profile, then creates a personalized proposal draft. You can edit before sending.",
      },
    ],
  },
  {
    title: "Billing & Pricing",
    items: [
      {
        question: "Is URDU free?",
        answer:
          "Yes, a free plan is available. Premium features like advanced insights may require a subscription.",
      },
      {
        question: "Which payment methods are accepted?",
        answer:
          "We accept major debit/credit cards, PayPal, and local wallets (coming soon).",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, subscriptions are flexible and can be canceled from your account settings.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        question: "I don’t see any job matches. What should I do?",
        answer:
          "Update your skills, broaden keywords, and ensure your profile is complete.",
      },
      {
        question: "My proposal isn’t generating. Why?",
        answer:
          "Check your internet connection and profile completeness. If the issue persists, contact support.",
      },
      {
        question: "I found a bug. How do I report it?",
        answer:
          "Send details to support@urducareerbot.com with screenshots if possible.",
      },
    ],
  },
];

export default faqSections;