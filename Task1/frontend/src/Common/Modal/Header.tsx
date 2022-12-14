import React, { ReactNode } from "react";

interface Props{
    children: ReactNode;
    onClose: () => void;
}

const ModalHeader = ({children, onClose}: Props) => {


    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-space-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch">
                        <div></div>
                        {children}
                        <div className="cursor-pointer" onClick={() => onClose()}>
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default ModalHeader;