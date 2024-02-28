import {Button} from "@/components/ui/button.tsx";
import DialogForm from "@/components/Dialog/DialogForm.tsx";

const HeroPanel = () => {

    const buttonDialogProps = {
        title: "Connecting with me...",
        description: "One step futher to connect",
        style: "bg-[#e3eefb]  inline-block px-5 py-2 text-[#2187d6] uppercase border-[#f1f7fe] font-bold",
        buttonLabel: "Let's connect",
        buttonVariant: "secondary",
        buttonSize: "lg"
    }
    return (
        <section className="bg-gray-800 relative text-white" data-pg-collapsed>
            <img
                src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute h-full inset-0 object-center object-cover w-full " alt="..." width="1080"
                height="720"/>
            <div className="container mx-auto px-4 py-48 relative">
                <div className="flex flex-wrap -mx-4">
                    <div className="mx-auto px-4 text-center w-full lg:w-8/12">
                        <h1 className="font-extrabold mb-4 text-6xl">Software Developer</h1>
                        <p className="font-light mb-6 text-xl">
                            Let me bring solutions to your problems.
                        </p>

                        <DialogForm {...buttonDialogProps}/>
                        <Button variant="secondary"  size="lg" className="bg-[#e3eefb]  inline-block px-5 py-2 text-[#2187d6] uppercase border-[#f1f7fe] font-bold">
                           Let's Connect
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPanel;