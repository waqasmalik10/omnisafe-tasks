import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AppDispatch, AppState } from "App/store";
import { createEvent, getEvents, getEventTypes } from 'Services/Event';
import { Pagination } from 'types/pagination';
import { CreateEvent, Event, EventType } from 'types/Event';


interface EventSlice{
    isLoading: boolean,
    activeEvents: Event[],
    pastEvents: Event[],
    eventTypes: EventType[]
}


const initialState:EventSlice= {
    isLoading: false,
    activeEvents: [],
    pastEvents: [],
    eventTypes: []
}

export const eventSlice = createSlice({
    name: 'eventReducer',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoading = false
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setActiveEvents: (state, action:PayloadAction<Event[]>) => {
            state.activeEvents = action.payload
        },
        setPastEvents: (state, action:PayloadAction<Event[]>) => {
            state.pastEvents = action.payload
        },
        setEventTypes: (state, action:PayloadAction<EventType[]>) => {
            state.eventTypes = action.payload
        },
    }
})
export default eventSlice.reducer

export const { setLoading, logout, setActiveEvents, setPastEvents, setEventTypes } = eventSlice.actions

export const selectIsLoading = (state:AppState): boolean => state.eventReducer.isLoading;

export const selectPastEvents = (state:AppState): Event[] => state.eventReducer.pastEvents;

export const selectActiveEvents = (state:AppState): Event[] => state.eventReducer.activeEvents;

export const selectEventTypes = (state:AppState): EventType[] => state.eventReducer.eventTypes;


export const getEventsAction = (status: string, pagination: Pagination) => async (dispatch: AppDispatch) => {

    dispatch(setLoading(true))

    const events = await getEvents(status, pagination);

    dispatch(setLoading(false))

    status === 'active'
    ? dispatch(setActiveEvents(events))
    : dispatch(setPastEvents(events))
}


export const createEventAction = (eventData: CreateEvent) => async (dispatch: AppDispatch) => {

    dispatch(setLoading(true));
    
    const event = await createEvent(eventData);

    if(!event){
        return false;
    }

    // dispatch()

    return true;
}

export const getEventTypesAction = () => async (dispatch: AppDispatch) => {

    const eventTypes = await getEventTypes();

    dispatch(setEventTypes(eventTypes as EventType[]));
}
