import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import ContactForm from "@/components/Forms/ContactForm.tsx";

const DialogForm = ({title,  description }) => {
    return (
        <>
            <Dialog>
                <DialogTrigger>

                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <ContactForm/>
                    <DialogFooter>
                        <Button type="submit">Done.</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}


export default DialogForm;