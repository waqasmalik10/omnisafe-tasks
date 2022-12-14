export interface EventType{
    _id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Event{
    _id: string;
    name: string;
    description?: string;
    userId: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateEvent{
    eventType: string;
    name: string;
    description: string;
    eventDate: string;
}