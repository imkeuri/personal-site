import "./Home.css";
import Card from "@/components/cards/Cards";
import Panel from "@/components/panel/panel";
import {CarouselWithContent} from "@/components/Corousel/CarouselWithContent.tsx";
import {BlogCard} from "@/components/cards/BlogCard.tsx";
import HeroPanel from "@/components/panel/HeroPanel.tsx";
import PanelAboutMe from "@/components/panel/PanelAboutMe.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

function Home() {
    return (
        <>


                <HeroPanel/>

                <PanelAboutMe/>

                <Card/>

                <Panel/>

                <BlogCard/>

                <CarouselWithContent/>

                 <Toaster />


        </>
    );
}

export default Home;
