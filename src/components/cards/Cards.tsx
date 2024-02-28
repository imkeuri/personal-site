export default function Card () {
    return (
        <>
            <section className="bg-gray-50 py-20 text-center text-gray-500">
                <div className="container mx-auto px-4 relative">
                    <div className="flex flex-wrap -mx-4 items-center mb-4">
                        <div className="mx-auto px-4 w-full lg:w-8/12">
                            <h2 className="font-medium mb-1 text-blue-600">Discover My Craft</h2>
                            <h3 className="font-bold mb-1 text-3xl text-gray-900">I'm not just a contributor; I'm a
                                catalyst for change. </h3>
                            <p className="mb-4">
                                With a knack for engineering the extraordinary, I empower my collaborators by:
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap [&>*]:py-5 [&>*]:text-center overflow-auto">
                        <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
                            <div className="py-4">
                                <span
                                    className="bg-white border-4 border-[#0e2743] inline-block mb-4 p-12 rounded-full text-blue-600">
                                    <img className="h-16 w-16" src="src/assets/icons/cloud-icon.svg" alt="api-icon"/>

                                </span>

                                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                                    Cloud
                                </h4>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue
                                    tortor.
                                </p>
                                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
                            </div>
                        </div>
                        <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
                            <div className="py-4">
                                <span
                                    className="bg-white border-4 border-[#0e2743] inline-block mb-4 p-12 rounded-full text-blue-600">

                                 <img className="h-16 w-16" src="src/assets/icons/api-icon.svg" alt="api-icon"/>

                                </span>


                                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                                    API
                                </h4>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue
                                    tortor.
                                </p>
                                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
                            </div>
                        </div>
                        <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
                            <div className="py-4">
                                <span
                                    className="bg-white border-4 border-[#0e2743] inline-block mb-4 p-12 rounded-full text-blue-600">

                                 <img className="h-16 w-16" src="src/assets/icons/interface.svg" alt="api-icon"/>

                                </span>


                                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                                    Web Application
                                </h4>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue
                                    tortor.
                                </p>
                                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
                            </div>
                        </div>
                        <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
                            <div className="py-4">
                                <span
                                    className="bg-white border-4 border-[#0e2743] inline-block mb-4 p-12 rounded-full text-blue-600">

                                 <img className="h-16 w-16" src="src/assets/icons/database.svg" alt="api-icon"/>

                                </span>


                                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                                    Database
                                </h4>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue
                                    tortor.
                                </p>
                                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
                            </div>
                        </div>
                        <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
                            <div className="py-4">
                                <span
                                    className="bg-white border-4 border-[#0e2743] inline-block mb-4 p-12 rounded-full text-blue-600">

                                 <img className="h-16 w-16" src="src/assets/icons/cms.svg" alt="api-icon"/>

                                </span>


                                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                                    CMS
                                </h4>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue
                                    tortor.
                                </p>
                                <a href="#" className="hover:text-blue-800 hover:underline text-blue-600">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
