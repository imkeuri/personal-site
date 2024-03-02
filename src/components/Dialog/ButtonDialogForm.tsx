/*
import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import DialogForm from "@/components/Dialog/DialogForm.tsx";

type ButtonDialogFormProps = {
    titleForm: string,
    descriptionForm: string;
    show: boolean;
    name: string;
    style: string;
    size: 'sm' | 'md' | 'lg';
    onClick: React.Dispatch<React.SetStateAction<boolean>>;

}

const ButtonDialogForm: React.FunctionComponent<ButtonDialogFormProps> = ({ titleForm,
                                                                              descriptionForm,
                                                                              show,
                                                                              name,
                                                                              style,
                                                                              size,
                                                                              onClick
                                                                          }) => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(show);
    };

    // Function to render button based on size
    const renderButtonBasedOnSize = () => {
        switch (size) {
            case 'sm':
                return <Button className={style} size="sm" variant="outline" onClick={handleShowForm}>{name}</Button>;
            case 'md':
                return <Button className={style} size="default" variant="outline" onClick={handleShowForm}>{name}</Button>;
            case 'lg':
                return <Button className={style} size="lg" variant="outline" onClick={handleShowForm}>{name}</Button>;
            default:
                return <Button className={style} variant="outline" onClick={handleShowForm}>{name}</Button>; // Default case if size doesn't match
        }
    };

    return (
        <>
            {renderButtonBasedOnSize()}
            <DialogForm
                title={titleForm}
                description={descriptionForm}
                show={showForm}
                setShowForm={setShowForm}
            />
        </>
    );
};

export default ButtonDialogForm;
*/
