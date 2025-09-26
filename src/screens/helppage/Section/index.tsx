// app/help/page.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import faqSections from "./messages";

// Helper to split heading into [first, ..., last]
const SplitHeading = ({ children }: { children: string }) => {
  const words = children.split(" ");
  if (words.length < 2) return <span className="text-white">{children}</span>;

  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const middleWords = words.slice(1, -1).join(" ");

  return (
    <>
      <span className="text-white">{firstWord}</span>
      {middleWords && <span className="text-gray-200"> {middleWords} </span>}
      <span className="text-[#05c0e0]"> {lastWord}</span>
    </>
  );
};

export default function HelpSection() {
  return (
    <div className="min-h-screen bg-none py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold museo leading-tight">
            <SplitHeading>Help & Support</SplitHeading>
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto mont text-lg">
            Find answers, get guidance, or contact our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content - Left 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            {/* Intro */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-[rgba(5,192,224,0.2)]">
              <h2 className="text-3xl font-bold museo mb-5">
                <SplitHeading>About URDU Career Bot</SplitHeading>
              </h2>
              <p className="text-gray-300 mb-7 mont text-lg leading-relaxed">
{`                URDU Career Bot is your AI-powered freelancing partner. It doesn’t just find jobs it helps you build a strong presence, win projects, and grow as a freelancer.
`}              </p>

              <h3 className="text-2xl font-semibold museo mb-5 text-white">
                Here’s what URDU does for you:
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc pl-6 mont text-lg">
                <li><span className="font-medium text-[#05c0e0]">Smart Profiles</span>  AI builds and refines your freelancing profile.</li>
                <li><span className="font-medium text-[#05c0e0]">Resume Builder</span>  Generate professional resumes instantly.</li>
                <li><span className="font-medium text-[#05c0e0]">Job Matching</span>  Find tailored opportunities across platforms.</li>
                <li><span className="font-medium text-[#05c0e0]">Proposal Writing</span>  Auto-generate authentic, winning proposals.</li>
                <li><span className="font-medium text-[#05c0e0]">Client Insights</span>  Get deeper understanding of clients before applying.</li>
                <li><span className="font-medium text-[#05c0e0]">Interview Prep</span>  Prepare confidently with AI-driven guidance.</li>
              </ul>
              <p className="text-gray-300 mt-8 mont text-lg">
                With URDU, you focus on your skills — we take care of the rest.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold museo mb-8">
                <SplitHeading>Frequently Asked Questions</SplitHeading>
              </h2>
              <div className="space-y-5">
                {faqSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-black/30 backdrop-blur-sm rounded-xl border border-[rgba(5,192,224,0.15)] overflow-hidden">
                    <div className="px-6 py-4 bg-[rgba(5,192,224,0.05)]">
                      <h3 className="text-xl font-semibold museo text-[#05c0e0]">
                        {section.title}
                      </h3>
                    </div>
                    <Accordion type="single" collapsible className="px-4 pb-5">
                      {section.items.map((item, itemIndex) => (
                        <AccordionItem value={`item-${sectionIndex}-${itemIndex}`} key={itemIndex}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="text-white font-medium mont text-lg">
                              {item.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300 pt-3 mont text-lg">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Sidebar - Right 1/3 */}
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-7 border border-[rgba(5,192,224,0.2)]">
              <h2 className="text-2xl font-bold museo mb-6 flex items-center gap-2.5">
                <MessageCircle className="h-6 w-6 text-[#05c0e0]" />
                <SplitHeading>Contact Support</SplitHeading>
              </h2>
              <p className="text-gray-300 mb-7 mont text-lg">
                We’re here to help. Choose the option that works best for you.
              </p>

            

              <div className="mt-10">
                <Button asChild className="w-full bg-[#05c0e0] hover:bg-[#04a8c4] text-black font-bold  text-lg">
                  <Link href="">Contact Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}