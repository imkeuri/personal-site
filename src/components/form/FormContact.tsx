import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useToast} from "@/components/ui/use-toast.ts";

const FormContact = () =>{

    const { toast } = useToast();

    const formSchema = z.object({
        name: z.string().min(6, {
            message: "Username must be at least 5 characters.",
        }),

        description: z.string().min(15, {
            message: "description must be at least 15 characters.",
        }),
        email: z.string()
            .min(6)
            .email({ message: "This is no a valid email" }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            email: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values);
            toast({
                title: "Message sent",
                description: "Friday, February 10, 2023 at 5:57 PM",
            });
        } catch (err) {
            toast({ variant: "destructive" });
        }
    };
    return(
        <>
            <div id="contact-form" className="container py-10 text-big-stone-950 relative">
                <div className="absolute border-4 border-white m-2 w-[92%] h-[85%] pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#88c2f1] to-[#115593]">
                    <div className="md:order-last overflow-hidden ">
                        <div className="h-40 md:h-full">
                            <img className="w-full h-full object-cover" src="src/assets/developer-image-form.webp" alt="Developer Form"/>
                        </div>
                    </div>

                    <div className="justify-center m-auto md:order-first">
                        <div className="text-center py-5">
                            <h2 className="text-2xl font-bold">
                                Making a change <br/>
                                required a conversation...
                            </h2>
                            <h3 className="text-opacity-30 pt-1">
                                Fill this form and immediately I'll contact you
                            </h3>
                        </div>
                        <div className="text-start py-5">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Name" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="ex: yourAreAmazing@mail.com" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Description" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button className=" hover:bg-white hover:text-big-stone-950 w-full" type="submit">Submit</Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}


export default FormContact;