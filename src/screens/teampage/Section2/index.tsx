import TeamCard, { TeamCardGroup } from "@/components/TeamCard";
import { teamData } from "./messages";

export default function TeamSection2() {
  return (
  <main className="w-full min-h-screen">
      <div className="overflow-hidden w-full text-center">
          <h1
            className="font-extrabold museo leading-tight text-[3rem] md:text-[5rem] lg:text-[6rem]"
          
          >
            Meet Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ce5fa] to-[#058bae]">
              URDU
            </span>
          </h1>
        </div>
      <TeamCardGroup layout="flex">
      {teamData.map((member, index) => (
        <TeamCard
          key={index}
          index={index}
          name={member.name}
          role={member.role}
          imageUrl={member.imageUrl}
          socials={member.socials}
        />
      ))}
    </TeamCardGroup>
  </main>
  );
}
