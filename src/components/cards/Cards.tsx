import cloud from "../../../public/assets/icons/cloud-icon.svg"
import api from "../../../public/assets/icons/api-icon.svg"
import WebApplication from "../../../public/assets/icons/interface.svg"
import database from "../../../public/assets/icons/database.svg"
import cms from "../../../public/assets/icons/cms.svg"

interface  CardType {
    title: string;
    description:string;
    imgSrc: string;
    imgAlt: string;
}

const cardContents : CardType[] = [
    {
        title: "Cloud",
        description: "Azure-powered innovation.",
        imgSrc: cloud,
        imgAlt: "Cloud icon"
    },
    {
        title: "API",
        description: "Robust .NET APIs.",
        imgSrc: api,
        imgAlt: "API icon"
    },
    {
        title: "Web Application",
        description: "Cutting-edge React, Angular, Blazor integration.",
        imgSrc: WebApplication,
        imgAlt: "Interface icon"
    },
    {
        title: "Database",
        description: "Expert SQL, Oracle, CosmoDb management.",
        imgSrc: database,
        imgAlt: "Database icon"
    },
    {
        title: "CMS",
        description: "Dynamic Umbraco development.",
        imgSrc: cms,
        imgAlt: "CMS icon"
    },
];


const SkillCard = (card: CardType) => {
    return (
        <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="py-4 bg-white shadow-lg rounded-lg">
                <span className="inline-block mb-4 p-6 rounded-full text-blue-600">
                    <img className="h-16 w-16 mx-auto" src={card.imgSrc} alt={card.imgAlt}/>
                </span>
                <h4 className="font-bold mb-2 text-gray-900 text-xl">{card.title}</h4>
                <p className="mb-4 text-gray-700">{card.description}</p>
                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
            </div>
        </div>
    );
};

export default function Card() {
    return (
        <section className="bg-gray-50 py-20 text-center">
            <div className="container mx-auto px-4">
                <div className="mb-4">
                    <h2 className="font-medium mb-1 text-blue-600">Discover My Craft</h2>
                    <h3 className="font-bold mb-1 text-3xl text-gray-900">I'm not just a contributor; I'm a catalyst for change.</h3>
                    <p className="mb-4">With a knack for engineering the extraordinary, I empower my collaborators by:</p>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    {cardContents.map((content, index) => (
                        <SkillCard key={index} {...content} />
                    ))}
                </div>
            </div>
        </section>
    );
}
