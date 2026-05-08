import HeroSection from "../components/HeroSection"
import ProjectSpotlights from "../components/ProjectSpotLights";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";

export function HomePage() {
    return (
        <>
        <HeroSection/>
        <div className="">
            <AboutSection/>
            <ProjectSpotlights/>
            <Testimonials/>
        </div>
        </>
        
    );
}