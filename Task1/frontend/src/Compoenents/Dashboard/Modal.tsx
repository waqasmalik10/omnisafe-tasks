import { useAppDispatch, useAppSelector } from "App/hooks";
import { createEventAction, getEventTypesAction, selectEventTypes } from "App/reducers/eventSlice";
import ErrorDescription from "Common/Error";
import Input from "Common/Input";
import {Modal, ModalBody, ModalHeader} from 'Common/Modal';
import { useFormik } from "formik";
import { useEffect } from "react";
import { EventSchema } from "utils/ValidationSchema/EventSchema";


interface Props{
    closeModal: () => void;
}

const EventModal = ({closeModal}: Props) => {

    const dispatch = useAppDispatch();

    const eventTypes = useAppSelector(selectEventTypes);

    const onSubmit = (values:any) => {

        dispatch(createEventAction(values));

        closeModal()
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            eventDate: '',
            eventType: ""
        },
        onSubmit,
        validationSchema: EventSchema
    });

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = formik;


    useEffect(() => {
        dispatch(getEventTypesAction());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const today = new Date().toISOString().slice(0, 16);
    const {name, description, eventDate, eventType} = values;
    return (
        <Modal>

            <ModalHeader onClose={() => closeModal()}>
                <div className="text-gray-900 font-medium text-center text-xl font-semibold">
                    Add Event
                </div>
            </ModalHeader>

            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="max-w-7xl mx-auto bg-white mb-5">
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:flex">
                                <div className="sm:w-9/12">
                                    <div className="w-full px-2 mb-4">
                                        <label
                                            htmlFor="eventType"
                                            className="block text-sm font-normal text-gray-900"
                                        >
                                            Select Event Type
                                        </label>
                                        <div className="mt-1">
                                             <select 
                                                onChange={handleChange} 
                                                value={eventType}  
                                                name="eventType" 
                                                className="border border-gray-300 text-gray-900 sm:text-sm rounded-md shadow-sm block w-full p-2 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 focus:visible:border-indigo-500 bg-white"
                                            >
                                                <option disabled value="">Select</option>
                                                {eventTypes.map(eventType => {
                                                    const {name, _id} = eventType;
                                                    return(
                                                        <option value={_id} label={name}>{name}</option>
                                                
                                                    )
                                                })}
                                            </select>
                                            {touched.name && errors.name && <ErrorDescription text={errors.name} />}
                                        </div>
                                        {/* {error && isCustomerExists && (
                                            <span className="text-xs text-red-400">event already exists with similar name!</span>
                                        )} */}
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-normal text-gray-900"
                                        >
                                            Event Name
                                        </label>
                                        <div className="mt-1">
                                            
                                            <Input 
                                                value={name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.name && errors.name && <ErrorDescription text={errors.name} />}
                                        </div>
                                        {/* {error && isCustomerExists && (
                                            <span className="text-xs text-red-400">event already exists with similar name!</span>
                                        )} */}
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <label
                                            htmlFor="eventDate"
                                            className="block text-sm font-normal text-gray-900"
                                        >
                                            Event Date
                                        </label>
                                        <div className="mt-1">
                                            
                                            <Input
                                                type="datetime-local"
                                                min={today}
                                                value={eventDate}
                                                name="eventDate"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.eventDate && errors.eventDate && <ErrorDescription text={errors.eventDate} />}
                                        </div>
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-normal text-gray-900"
                                        >
                                            Event Description
                                        </label>
                                        <div className="mt-1">
                                            
                                            <textarea
                                                name='description'
                                                value={description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                rows={5}
                                                className="border border-gray-300 text-gray-900 sm:text-sm rounded-md shadow-sm block w-full p-2 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 focus:visible:border-indigo-500"
                                            />
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {customerSubmitFormLoader ? (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={32}
                        width={32}
                        style={{ margin: "auto", width: "32px", height: "32px" }}
                    />
                    ) : ( */}
                    <button

                        type="submit"
                        className={`w-32 mt-6 mb-10 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
                    >
                        ADD
                    </button>
                    {/* )} */}
                </form>
            </ModalBody>
        </Modal>
    );
};

export default EventModal;
