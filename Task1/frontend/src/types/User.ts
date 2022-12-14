export interface User{
    id: string;
    email: string;
    name: string;
    surname: string;
}


export interface UpdateUser{
    name?: string;
    surname?: string;
    password?: string;
}