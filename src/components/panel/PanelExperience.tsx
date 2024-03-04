

const PanelExperience = () =>  {

    const areas = ['Banking', 'Insurance', 'Public Service', 'SEO', 'Consulting'];

    return(
        <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-b from-big-stone-50 to-big-stone-400">
            <div className="mx-auto px-4 w-full lg:w-8/12 col-span-3">
                <h2 className="font-bold mb-4 text-4xl text-big-stone-800">
                    Look at my expertise
                </h2>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-1 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                    <h3 className="font-semibold mb-4 text-xl text-blue-600">Companies:</h3>
                    <div className="overflow-y-scroll h-72 space-y-4">
                        {/* Repeat for each company */}
                        <div
                            className="m-2 bg-white shadow-md shadow-[#e3eefb] transition duration-300 ease-in-out transform hover:scale-105">
                            <img className="mx-auto p-4" src="src/assets/icons/logo-evopoint.svg" alt="evopoint-logo"/>
                        </div>

                        {/* Repeat ends */}
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
                <h1 className="p-6 font-semibold text-xl text-blue-600">Industries Expertise:</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6">
                    {areas.map((area, index) => (
                        <div key={index}
                             className="bg-gradient-to-r from-[#4aa2e6] to-[#1469b5] rounded-xl shadow-xl p-4 transition duration-300 ease-in-out hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500">
                            <h2 className="text-center text-xl font-semibold text-white">{area}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}


export default PanelExperience;