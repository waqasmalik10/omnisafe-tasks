interface Props{
    className?: string;
    type?: string;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    name: string;
    value: string;
    placeholder?: string;
}

const Input = ({
    className,
    type,
    onBlur,
    onChange,
    name,
    value,
    placeholder
}: Props) => {

    return (
        <input 
            type={type || 'text'} 
            onBlur={onBlur} 
            onChange={onChange} 
            name={name} 
            value={value} 
            className={
                className + 
                " " + 
                "border border-gray-300 text-gray-900 sm:text-sm rounded-md shadow-sm block w-full p-2 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 focus:visible:border-indigo-500"
            } 
            placeholder={placeholder || ""}
        />
    )
}

export default Input;