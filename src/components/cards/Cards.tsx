
const cardContents = [
    {
        title: "Cloud",
        description: "Azure-powered innovation.",
        imgSrc: "src/assets/icons/cloud-icon.svg",
        imgAlt: "Cloud icon"
    },
    {
        title: "API",
        description: "Robust .NET APIs.",
        imgSrc: "src/assets/icons/api-icon.svg",
        imgAlt: "API icon"
    },
    {
        title: "Web Application",
        description: "Cutting-edge React, Angular, Blazor integration.",
        imgSrc: "src/assets/icons/interface.svg",
        imgAlt: "Interface icon"
    },
    {
        title: "Database",
        description: "Expert SQL, Oracle, CosmoDb management.",
        imgSrc: "src/assets/icons/database.svg",
        imgAlt: "Database icon"
    },
    {
        title: "CMS",
        description: "Dynamic Umbraco development.",
        imgSrc: "src/assets/icons/cms.svg",
        imgAlt: "CMS icon"
    },
];

export default function Card() {
    return (
        <section className="bg-gray-50 py-20 text-center text-gray-500">
            <div className="container mx-auto px-4">
                <div className="mb-4">
                    <h2 className="font-medium mb-1 text-blue-600">Discover My Craft</h2>
                    <h3 className="font-bold mb-1 text-3xl text-gray-900">I'm not just a contributor; I'm a catalyst for change.</h3>
                    <p className="mb-4">With a knack for engineering the extraordinary, I empower my collaborators by:</p>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    {cardContents.map((content, index) => (
                        <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                            <div className="py-4">
                                <span className="bg-white border-4 border-[#0e2743] inline-block mb-4 p-12 rounded-full text-blue-600">
                                    <img className="h-16 w-16" src={content.imgSrc} alt={content.imgAlt}/>
                                </span>
                                <h4 className="font-bold mb-2 text-gray-900 text-xl">{content.title}</h4>
                                <p className="mb-4">{content.description}</p>
                                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
