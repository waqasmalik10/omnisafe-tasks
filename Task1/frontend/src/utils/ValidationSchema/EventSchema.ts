import * as Yup from 'yup';

export const EventSchema = Yup.object().shape({
    name: Yup.string().required('Please, enter your name'),
    description: Yup.string(),
    eventDate: Yup.date().required('Please, enter event date')
});