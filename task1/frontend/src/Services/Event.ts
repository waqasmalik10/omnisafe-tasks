import { CreateEvent } from "types/Event";
import { Pagination } from "types/pagination";
import { apiConstants } from "./ApiConstants";
import http from "./Core/HttpService";

export const getEvents = async (status: string, pagination: Pagination) => {
    const {limit, offset} = pagination;

    try{
        const result = await http.get(`${apiConstants.EVENT}?status=${status}&limit=${limit}&offset=${offset}`);
        return Promise.resolve(result.data);
    }catch(err){
        Promise.resolve([])
    }
}


export const getEventTypes = async () => {

    try{
        const result = await http.get(`${apiConstants.EVENT}/types`);
        return Promise.resolve(result.data);
    }catch(err){
        Promise.resolve([])
    }
}

export const createEvent = async (eventData: CreateEvent) => {

    try{
        const result = await http.post(`${apiConstants.EVENT}`, eventData);
        return Promise.resolve(result.data);
    }catch(err){
        Promise.resolve([])
    }

}