
import Link from "next/link";
export default function Footer() {
  return (
    <footer
     
      className="w-full py-6 px-4 shadow-md relative z-30 text-gray-50 border-t mont bg-[#010f18]/80 backdrop-blur-md">
      <div className="flex flex-col md:flex-row justify-between items-start p-8 max-w-7xl mx-auto gap-14">
        {/* Left Column */}
        <div className="flex flex-col gap-5 max-w-80">
               {/* Logo */}
        <Link href={"/"}>
          {" "}
          <div className="leading-tight">
            <h1 className="text-4xl font-bold museo tracking-wide">next.</h1>
            <h2 className="text-[10px] mont tracking-[2px] text-gray-300">
              DOOR MATE
            </h2>
          </div>
        </Link>
          <p className="text-sm text-[#B0B3B8]">A smarter way for students to find compatible roommates and safe housing.
         </p>
        </div>

        {/* Middle Column */}
        <div className="">
          <h4 className="font-semibold text-[#05c0e0] mb-4">Links</h4>
          <ul className="space-y-2">
            {[
   { name: "Home", path: "/home" },
       { name: "How it Works", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
          <a
            href={link.path}
            className="hover:text-[#05c0e0] cursor-pointer transition-all duration-500"
          >
            {link.name}
          </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-semibold text-[#05c0e0] mb-4">Support</h4>
          <ul className="space-y-2">
            {[
              { name: "Terms & Conditions", path: "/termscondition" },
              { name: "Help", path: "/help" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="hover:text-[#05c0e0] cursor-pointer transition-all duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 max-w-7xl mx-auto">
        <p>© 2025 Copyright by Team Next Door Mate & Dua Fatima. All rights reserved.</p>
  
      </div>
    </footer>
  );
}