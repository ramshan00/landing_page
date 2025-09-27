// app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020a14] text-gray-200 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold museo text-white mb-4">
            Terms and <span className="text-[#05c0e0]">Conditions</span>
          </h1>
          <p className="text-gray-400 mont text-lg">
            Effective Date: September 2025
          </p>
        </header>

        {/* Intro */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-[rgba(5,192,224,0.15)] mb-12 mont">
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to <span className="text-white font-medium">Next Door Mate</span>. By accessing or using our website and services, you agree to the following Terms and Conditions. Please read them carefully.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 mont">
          {[
            {
              id: 1,
              title: "Acceptance of Terms",
              content: "By using Next Door Mate, you agree to comply with and be bound by these Terms. If you do not agree, please discontinue use of the platform."
            },
            {
              id: 2,
              title: "Services Provided",
              content: (
                <>
                  Next Door Mate provides tools and resources to help students find compatible roommates and housing, including:
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                    <li>Profile parsing and structured attribute creation</li>
                    <li>Smart roommate compatibility scoring</li>
                    <li>Conflict detection and explanations</li>
                    <li>Housing listing suggestions</li>
                  </ul>
                  <p className="mt-3">
                    These services may evolve over time. We reserve the right to add, remove, or modify features.
                  </p>
                </>
              )
            },
            {
              id: 3,
              title: "Accounts & Responsibilities",
              content: (
                <>
                  You must provide accurate and complete information when creating an account.
                  <br />
                  You are responsible for maintaining the confidentiality of your login details.
                  <br />
                  You agree not to misuse the platform, attempt unauthorized access, or post harmful content.
                </>
              )
            },
            {
              id: 4,
              title: "Payments & Subscriptions",
              content: (
                <>
                  Next Door Mate may offer free and premium plans.
                  <br />
                  Payment for premium features is processed securely via third-party providers.
                  <br />
                  Subscriptions renew automatically unless canceled. You may cancel anytime in your account settings.
                  <br />
                  Refunds are handled on a case-by-case basis.
                </>
              )
            },
            {
              id: 5,
              title: "Intellectual Property",
              content: "All content, design, branding, and technology of Next Door Mate belong to us. Users may not copy, resell, or redistribute any part of the platform without prior written consent."
            },
            {
              id: 6,
              title: "User Content",
              content: (
                <>
                  Users may post or upload content (e.g., profile data, preferences).
                  <br />
                  You retain ownership of your content, but by posting, you grant Next Door Mate a license to use, display, and process it for providing services.
                  <br />
                  You must ensure your content does not violate any laws, copyrights, or third-party rights.
                </>
              )
            },
            {
              id: 7,
              title: "Limitation of Liability",
              content: (
                <>
                  Next Door Mate is a roommate and housing assistance tool. We do not guarantee roommate matches, housing availability, or specific outcomes.
                  <br />
                  We are not responsible for third-party landlords, roommates, or listings.
                  <br />
                  To the maximum extent allowed by law, we are not liable for losses, damages, or disputes arising from the use of our services.
                </>
              )
            },
            {
              id: 8,
              title: "Third-Party Links",
              content: "The website may contain links to external sites. Next Door Mate is not responsible for the content or policies of third-party websites."
            },
            {
              id: 9,
              title: "Termination of Access",
              content: "We may suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or misuse the platform."
            },
            {
              id: 10,
              title: "Updates to Terms",
              content: "These Terms may be updated from time to time. Continued use of Next Door Mate means you accept the revised Terms."
            },
            {
              id: 11,
              title: "Governing Law",
              content: "These Terms are governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Karachi, Pakistan."
            },
            {
              id: 12,
              title: "Contact Us",
              content: (
                <>
                  For questions regarding these Terms, please contact us:
                  <br />
                  <a 
                    href="/contact"
                    className="text-[#05c0e0] hover:underline font-medium inline-flex items-center gap-1 mt-1"
                  >
                    Contact now
                  </a>
                </>
              )
            }
          ].map((section) => (
            <section key={section.id} className="group">
              <h2 className="text-2xl font-semibold museo text-white mb-4 flex items-center gap-3">
                <span className="text-[#05c0e0] font-mono">{section.id}.</span>
                {section.title}
              </h2>
              <div className="text-gray-300 text-lg leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-500 mont text-sm">
          Last updated: September 2025
        </div>
      </div>
    </div>
  );
}
