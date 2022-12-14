export interface EventType{
    id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Event{
    id: string;
    name: string;
    description?: string;
    userId: string;
    createdAt?: string;
    updatedAt?: string;
}