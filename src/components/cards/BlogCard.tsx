export function BlogCard() {
    return (
        <section className="bg-gray-50 py-20 text-center">
            <div className="container mx-auto px-4 relative">
                <h2 className="font-bold leading-tight mb-8 text-4xl text-gray-800">Look at my experience</h2>

                <div className="flex flex-wrap flex-col -mx-1">
                    <h3>Companies:</h3>
                    <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
                        <div className="bg-white px-4 py-10 shadow-lg">
                            <img className="inline-block" src="src/assets/icons/logo-evopoint.svg" alt="evopoint-logo"/>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap flex-col -mx-1">
                    <h3>Industry Expertise:</h3>
                    <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
                        <div className="bg-white px-4 py-10 shadow-lg">
                            <img className="inline-block" src="src/assets/icons/logo-evopoint.svg" alt="evopoint-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}