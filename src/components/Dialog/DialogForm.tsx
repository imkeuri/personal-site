import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast.ts";
import { Textarea } from "@/components/ui/textarea.tsx";

type DialogFormProps = {
    title: string;
    description: string;
    show: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogForm: React.FunctionComponent<DialogFormProps> = ({
                                                                  title,
                                                                  description,
                                                                  show,
                                                                  setShowForm,
                                                              }) => {
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
            setShowForm(false);
        } catch (err) {
            toast({ variant: "destructive" });
        }
    };

    return (
        <>
            <Dialog open={show} onOpenChange={() => setShowForm(!show)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
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
                                render={({ field }) => (
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
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Description" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="submit">Submit</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogForm;
