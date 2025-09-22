
import HeroSection from "./HeroSection";
import AboutSection from "./Section2";

export default function HomeSection(){
    return(
        <main className="box-border overflow-x-hidden">
            <HeroSection/>
            <AboutSection/>
        </main>
    )
}