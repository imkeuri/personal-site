import {Button} from "@/components/ui/button.tsx";
import DialogForm from "@/components/Dialog/DialogForm.tsx";
import {useState} from "react";

const HeroPanel = () => {

    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => {
        setShowForm(true);
    };
    return (
        <section className="relative text-white">

            <div className="bg-gradient-to-tl from-[#59b0f4] to-[#202020]
            h-dvh w-full relative">
                <img
                    src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full absolute object-cover  mix-blend-hard-light"
                    alt="..."/>
                <div className="container mx-auto pt-96 relative">
                    <div className="flex flex-wrap -mx-4">
                        <div className="mx-auto px-4 text-center w-full ">
                            <h1 className="font-extrabold mb-4 text-8xl">Software Developer</h1>
                            <p className="font-light mb-6 text-4xl">
                                Let me bring solutions to your problems.
                            </p>
                                <Button variant="secondary" size="lg" onClick={handleShowForm}>
                                    Let's Connect
                                </Button>
                                <DialogForm
                                    title="Your Title"
                                    description="Your Description"
                                    show={showForm}
                                    setShowForm={setShowForm}
                                />
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default HeroPanel;