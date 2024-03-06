import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import DialogForm from "@/components/Dialog/DialogForm.tsx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <header className="fixed top-0 w-full z-10">
            <nav className="grid gap-2 border-t border-gray-200 shrink-0 py-4 md:py-6 dark:border-gray-800 text-[#f1f7fe] bg-[#0e2743]">
                <div className="flex items-center justify-between px-4 text-xl font-semibold md:px-6">
                    <a className="font-bold " href="#">Keuri Castillo</a>
                    <nav className="hidden space-x-4 font-medium md:flex">
                        <Link className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50 transition duration-300 ease-in-out" to="/">Home</Link>
                        <Link className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50 transition duration-300 ease-in-out" to="/about">About</Link>
                        <Link className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50 transition duration-300 ease-in-out" to="/portfolio">Portfolio</Link>
                        <Link className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50 transition duration-300 ease-in-out" to="/contact">Contact</Link>
                    </nav>
                    <div>
                        <Button className="bg-[#0e2743] text-[#f1f7fe] hover:bg-[#f1f7fe] hover:text-big-stone-950 transition duration-300 ease-in-out" size="sm" variant="outline" onClick={handleShowForm}>
                            Contact
                        </Button>
                        <DialogForm title="Contact Me" description="Feel free to reach out via this form." show={showForm} setShowForm={setShowForm}/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
