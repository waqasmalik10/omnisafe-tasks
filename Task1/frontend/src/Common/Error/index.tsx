import React from 'react';

interface Props{
    text: string | React.ReactNode;
    className?: string;
}

const ErrorDescription = ({text, className}: Props) => {

    return (
        <p className={`text-left text-sm ${className}`}>
            {text}
        </p>
    )
}

export default ErrorDescription;