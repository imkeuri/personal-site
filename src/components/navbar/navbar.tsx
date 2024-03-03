import { Button } from "@/components/ui/button.tsx";

import  { useState } from "react";
import DialogForm  from "@/components/Dialog/DialogForm.tsx";

const Navbar = () => {
    const handleShowForm = () => {
        setShowForm(true);
    };
    const [showForm, setShowForm] = useState(false);


    return (
        <section className="fixed top-0 w-full z-10">
            <nav
                className=" grid gap-2 border-t border-gray-200 shrink-0 py-4 md:py-6 dark:border-gray-800 text-[#f1f7fe] bg-[#0e2743]">
                <div className="flex items-center justify-between px-4 text-xl font-semibold md:px-6">
                    <a className="font-bold " href="#">
                        Keuri Castillo
                    </a>
                    <nav className="hidden space-x-4 font-medium md:flex">
                        <a
                            className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                            href="#"
                        >
                            Portfolio
                        </a>
                        <a
                            className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                            href="#"
                        >
                            Contact
                        </a>
                    </nav>

                    <div>
                        <Button className="bg-[#0e2743]" size="sm" variant="outline" onClick={handleShowForm}>
                            Contacts
                        </Button>
                        <DialogForm
                            title="Your Title"
                            description="Your Description"
                            show={showForm}
                            setShowForm={setShowForm}
                        />
                    </div>

                </div>
            </nav>
        </section>

    );
};

export default Navbar;
