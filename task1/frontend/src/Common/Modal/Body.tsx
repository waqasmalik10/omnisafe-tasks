import React, { ReactNode } from "react";

interface Props{
    children: ReactNode;
    className?: string;
}

const ModalBody = ({children, className}: Props) => {


    return (
        <div className={(className || "") + " form-width mx-6 max-w-7xl mx-auto mt-5 mx-2 sm:mx-6 lg:mx-8 space-y-8 space-y-8 divide-y divide-gray-200 px-3 sm:px-3"}>
            {children}
        </div>
    );
};

export default ModalBody;