import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import image from "../../../public/assets/developer-image-form.webp"
interface FormField {
    name: string;
    email: string;
    description: string;
}

const formSchema = z.object({
    name: z.string().min(5, "Tell us your name, so we know how to address you."),
    email: z.string().email("We'll need a valid email to get back to you."),
    description: z.string().min(15, "Please share a bit about your project or inquiry."),
});

const FormContact = () => {
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values: FormField) => {
        try {
            console.log(values);
            toast({
                title: "Thank you for reaching out!",
                description: "We're excited to connect with you. You'll hear from us soon.",
                variant: "default",
            });

        } catch (err) {
            toast({
                title: "Oops!",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <div id="contact-form" className="min-h-screen flex items-center justify-center bg-big-stone-50">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden md:flex">
                <div className="hidden md:block md:w-1/2" style={{ backgroundColor: "#4aa2e6" }}>
                    <img className="w-full h-full object-cover" src={image} alt="Let's Collaborate" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 text-[#0e2743]">
                    <h2 className="text-3xl font-bold text-center mb-6" style={{ color: "#2286d5" }}>Ready to Make Something Amazing?</h2>
                    <p className="text-md text-center text-[#153e65] mb-8">We're excited to help bring your vision to life. Tell us a little about your project, and we'll get in touch.</p>
                    <form onSubmit={handleSubmit(() => onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                            <input {...register("name")} id="name" className="mt-1 p-2 w-full rounded-md shadow-sm border" />
                            {errors.description && typeof errors.description.message === 'string' && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                            <input {...register("email")} id="email" type="email" className="mt-1 p-2 w-full rounded-md shadow-sm border" />
                            {errors.description && typeof errors.description.message === 'string' && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium">Your Message</label>
                            <textarea {...register("description")} id="description" className="mt-1 p-2 w-full rounded-md shadow-sm border" rows={4}></textarea>
                            {errors.description && typeof errors.description.message === 'string' && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
                        </div>

                        <button type="submit" className="w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white" style={{ backgroundColor: "#1469b5", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2286d5")} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1469b5")}>Let's Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContact;
