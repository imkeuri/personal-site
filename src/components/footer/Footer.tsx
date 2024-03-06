import { Link } from "react-router-dom";
import React from "react";
import linkedin from "../../../public/assets/icons/linkedin-svgrepo-com.svg"
import github from "../../../public/assets/icons/github-142-svgrepo-com.svg"
export default function Footer() {
    const scrollToContactForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const contactFormSection = document.getElementById('contact-form');
        contactFormSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer className="bg-[#0e2743] bg-opacity-95 py-12 text-gray-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full lg:w-2/3">
                        <h2 className="font-bold text-xl md:text-3xl text-white mb-4">Ready to Collaborate?</h2>
                        <p className="mb-4">Embark on a journey to innovation. Let's combine our visions to create something exceptional. Your project deserves the best.</p>
                        <Link to="#contact-form" onClick={scrollToContactForm} className="inline-block px-6 py-2 rounded bg-[#2286d5] hover:bg-[#1469b5] text-white transition-colors duration-300 ease-out">
                            Reach Out Now
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4 lg:mt-0">
                        <a href="#" className="border border-white hover:bg-[#2286d5] p-2 rounded-full transition-colors duration-300 ease-out" aria-label="LinkedIn">
                            <img src={linkedin} className="h-6 w-6" alt="LinkedIn"/>
                        </a>
                        <a href="#" className="border border-white hover:bg-[#2286d5] p-2 rounded-full transition-colors duration-300 ease-out" aria-label="GitHub">
                            <img src={github} className="h-6 w-6" alt="GitHub"/>
                        </a>
                    </div>
                </div>
                <hr className="my-8 border-gray-700"/>
                <div className="flex flex-wrap justify-between items-center text-sm">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Keuri Castillo. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="tel:+18623041201" className="hover:text-white transition-colors duration-300 ease-out">+1 (862) 304-1201</a>
                        <a href="mailto:keury900@gmail.com" className="hover:text-white transition-colors duration-300 ease-out">keury900@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
