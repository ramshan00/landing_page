
import HeroSection from "./HeroSection";
import AboutSection from "./Section2";
import Imagine from "./Section3";
import Believe from "./Section4";
import StatsBlock from "./Section5";
import WhyUrdu from "./Section6";
import WorkReimagined from "./Section7";

export default function HomeSection(){
    return(
        <main className="box-border overflow-x-hidden">
            <HeroSection/>
            <AboutSection/>
            <Imagine/>
            <Believe/>
            <WhyUrdu/>
            <StatsBlock/>
            <WorkReimagined/>
        </main>
    )
}