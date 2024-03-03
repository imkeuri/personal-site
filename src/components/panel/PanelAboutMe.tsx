const PanelAboutMe = () =>{
    return(
        <>
            <section className="py-24 text-gray-500 bg-[#e3eefb]">
                <div className="container mx-auto px-4 ">
                    <div className="flex flex-wrap -mx-4 justify-center items-center">
                        <div className="p-4 w-full lg:w-4/12 sm:w-4/6">
                            <img
                                src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDV8fGRlc2lnbmVyfGVufDB8fHx8MTYzMjg2OTMwMA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=800&h=1000&fit=crop"
                                className="rounded-xl w-full" alt="..." width="600" height="650"/>
                        </div>
                        <div className="p-4 w-full lg:w-8/12">

                            <h2 className="font-medium mb-2 text-[#12497a] ">A Little</h2>
                            <h3 className="font-bold mb-2 text-5xl text-[#12497a]">About Me</h3>
                            <p className="mb-6 text-[#0e2743]">
                                I'm an experienced software developer proficient in C# and .NET Core, specializing in crafting robust solutions for diverse projects. With a keen focus on software principles, I've honed my skills in developing APIs and Web Applications while ensuring adherence to best practices. My expertise extends to navigating cloud environments, particularly Azure, backed by certifications.</p>
                            <div className="-mx-2 flex flex-wrap mb-6">
                                <div className="p-2 w-full sm:w-4/12">
                                    <div
                                        className="bg-gray-50 p-6 rounded-xl shadow bg-gradient-to-r from-[#88c2f1] to-[#115593] hover:scale-150">
                                        <h2 className="font-bold mb-1 text-5xl text-[#f1f7fe] xl:text-6xl">2+</h2>
                                        <h3 className="font-bold text-[#f1f7fe]">Years of Experience</h3>
                                    </div>
                                </div>
                                <div className="p-2 w-full sm:w-4/12">
                                    <div
                                        className="bg-gray-50 p-6 rounded-xl shadow bg-gradient-to-r from-[#88c2f1] to-[#115593] hover:scale-150">
                                        <h2 className="font-bold mb-1 text-5xl text-[#f1f7fe] xl:text-6xl">5+</h2>
                                        <h3 className="font-bold text-[#f1f7fe]">Projects Completed</h3>
                                    </div>
                                </div>
                                <div className="p-2 w-full sm:w-4/12">
                                    <div
                                        className="bg-gray-50 p-6 rounded-xl shadow bg-gradient-to-r from-[#88c2f1] to-[#115593] hover:scale-150">
                                        <h2 className="font-bold mb-1 text-5xl text-[#f1f7fe] xl:text-6xl">1</h2>
                                        <h3 className="font-bold text-[#f1f7fe]">Industry Awards</h3>
                                    </div>
                                </div>
                            </div>
                            <a href="#"
                               className="bg-primary-500 hover:bg-primary-400 inline-block px-6 py-2 rounded text-white">Full
                                Story</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export  default  PanelAboutMe;
