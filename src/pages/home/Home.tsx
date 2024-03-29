import "./Home.css";
import Card from "@/components/cards/Cards.tsx";
import {CarouselWithContent} from "@/components/Corousel/CarouselWithContent.tsx";
import HeroPanel from "@/components/panel/HeroPanel.tsx";
import PanelAboutMe from "@/components/panel/PanelAboutMe.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import PanelExperience from "@/components/panel/PanelExperience.tsx";
import FormContact from "@/components/form/FormContact.tsx";

function Home() {
    return (
        <>


                <HeroPanel/>

                <PanelAboutMe/>

                <Card/>

                <PanelExperience/>

                <CarouselWithContent/>

                <FormContact/>
                 <Toaster />


        </>
    );
}

export default Home;
