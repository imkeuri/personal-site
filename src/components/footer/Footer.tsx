export default function Footer () {
    return (
        <footer className="bg-[#0e2743] bg-opacity-90 py-12 text-gray-400">
            <div className="container mx-auto px-4 relative">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="mr-auto p-4 w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
                        <h2 className="font-bold font-serif mb-4 text-3xl text-white">Interested To Work Together?</h2>
                        <p>Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero,
                            eu aliquam nisi. Nam finibus ullamcorper semper.</p>
                    </div>
                    <div className="p-4 w-full md:w-auto"><a href="#"
                                                             className="bg-primary-500 hover:bg-primary-400 inline-block px-6 py-2 rounded text-white">Get
                        In Touch</a>
                    </div>
                </div>
                <hr className="my-8 opacity-25-"/>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="p-4 w-full sm:w-6/12 lg:w-3/12 xl:w-4/12"><a href="#"
                                                                                 className="font-bold font-serif hover:text-opacity-90 inline-flex items-center leading-none space-x-2 text-3xl text-primary-500 uppercase">
                        <span>Keuri Castillo</span> </a>
                    </div>
                    <div className="p-4 w-full sm:w-6/12 lg:flex-1 lg:order-last">
                        <div className="flex-wrap inline-flex leading-none space-x-2">
                            <a href="#"
                               className="border border-white hover:bg-white hover:invert p-2 rounded-full text-white"
                               aria-label="facebook">
                                <img src="src/assets/icons/linkedin-svgrepo-com.svg" alt="linkedin"/>
                            </a>

                            <a href="#"
                               className="border border-white hover:bg-white hover:text-gray-900 p-2 rounded-full text-white"
                               aria-label="instagram">
                                <img src="src/assets/icons/github-142-svgrepo-com.svg" alt="github"/>
                            </a>

                        </div>
                    </div>
                    <div className="p-4 w-full sm:w-6/12 md:flex-1 lg:w-3/12">
                        <a href="tel:+0 123-456-789" className="hover:text-gray-400 text-white text-xl">+1
                            (862)-304-1201</a>
                    </div>
                    <div className="p-4 w-full sm:w-6/12 md:flex-1 lg:w-3/12">
                        <a href="info@company.com"
                           className="hover:text-gray-400 text-white text-xl">keury900@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}