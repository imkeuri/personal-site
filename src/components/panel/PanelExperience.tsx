import evopoint from "../../../public/assets/icons/logo-evopoint.svg"
const PanelExperience = () => {
    const areas = ['Banking', 'Insurance', 'Public Service', 'SEO', 'Consulting'];

    return (
        <section className="py-10 px-5 md:px-10 bg-gradient-to-b from-big-stone-50 to-big-stone-100">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h2 className="font-bold text-4xl text-big-stone-800">Discover My Expertise</h2>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6">
                    <div className="md:w-1/3 lg:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden mb-4 md:mb-0">
                        <div className="p-6">
                            <h3 className="font-semibold text-xl text-big-stone-700 mb-4">Companies I've Worked With:</h3>
                            <div className="space-y-4">
                                {/* Dynamically generate company logos with hover effect to scale */}
                                <div className="bg-white rounded-lg shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <img className="mx-auto p-4" src={evopoint} alt="Evopoint logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h1 className="font-semibold text-xl text-big-stone-700 mb-4">Areas of Expertise:</h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {areas.map((area, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow p-4 transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                                        <h2 className="text-center text-xl font-semibold text-big-stone-600">{area}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PanelExperience;
