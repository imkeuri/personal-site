import { Button } from "@/components/ui/button.tsx";
import DialogForm from "@/components/Dialog/DialogForm.tsx";
import { useState } from "react";

const HeroPanel = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <section className="relative text-white">
            <div className="bg-gradient-to-tl from-[#59b0f4] to-[#202020] h-screen w-full relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?&q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full absolute object-cover mix-blend-hard-light"
                    alt="dynamic background"
                />
                <div className="container mx-auto flex justify-center items-center h-full absolute">
                    <div className="text-center">
                        <h1 className="font-extrabold text-6xl md:text-8xl">Software Developer</h1>
                        <p className="font-light text-2xl md:text-4xl mt-4 mb-6">
                            Let me bring solutions to your problems.
                        </p>
                        <Button variant="secondary" size="lg" onClick={handleShowForm}>
                            Let's Connect
                        </Button>
                        <DialogForm
                            title="Let's Connect"
                            description="Tell me about your project ideas or just say hello. Whether you’ve got a big idea or need some inspiration with a building project, I am here to create perfect solutions. From concept to creation, let me inspire you."
                            show={showForm}
                            setShowForm={setShowForm}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroPanel;
