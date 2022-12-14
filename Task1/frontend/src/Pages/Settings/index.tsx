import { FC, Fragment } from 'react'
import AccountSession from './AccountSession';
import Loader from "Common/Loader";
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { selectIsLoading } from 'App/reducers/authSlice';
import { useFormik } from "formik";
import { SignupSchema } from 'utils/ValidationSchema/Auth';

const Settings: FC = () => {
    const isLoading = useAppSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    // constructor() {
    //     super();
    //     this.state = {
    //         onlineApptDays: '3',
    //         ApptStartingFrom: '1',
    //         lunchBreak: {
    //             status: false,
    //             startTime: '12:00',
    //             endTime: '13:00',
    //         },
    //         duplicateSlot: false,
    //         loadTime: {
    //             loadTime1To4: '10',
    //             loadTime5To7: '30',
    //             loadTime8To9: '30',
    //         },
    //         showCustomerAutofill: true,
    //     };
    // }


    // handleValidation = () => {
    //     const fields = this.state;
    //     let formIsValid = true;

    //     if (fields['password'] && fields['password'].length) {

    //         if (!fields["oldPassword"]) {
    //             formIsValid = false;
    //             NotificationManager.error('Old Password field is required')
    //         }

    //         if (fields["password"]?.length < 8) {
    //             formIsValid = false;
    //             NotificationManager.error('Password must be atleast 8 characters')

    //         }
    //         if (fields["password"] !== fields["confirmPassword"]) {
    //             formIsValid = false;
    //             NotificationManager.error('Passwords are not matched')
    //         }
    //     }

    //     if (!(fields["zip_code"]?.length === 5)) {
    //         formIsValid = false;
    //         NotificationManager.error('Zip Code must be 5 characters')
    //     }

    //     if (!fields["company_name"]) {
    //         formIsValid = false;
    //         NotificationManager.error('Company Name is Required')
    //     }

    //     if (!fields["first_name"]) {
    //         formIsValid = false;
    //         NotificationManager.error('First Name Field is Required')
    //     }
    //     if (!fields["number"]) {
    //         formIsValid = false;
    //         NotificationManager.error('Number Field is Required')
    //     }

    //     if (fields['vehiclesPerSlot'])

    //         if (!(/[0-9]+/.test(fields["number"]))) {
    //             formIsValid = false;
    //             NotificationManager.error('Number Field contain only Numeric Value')
    //         }

    //     if (!(fields["zip_code"]?.length === 5) && !(/^\d+$/.test(fields["zip_code"]))) {
    //         formIsValid = false;
    //         NotificationManager.error('Zip Code contain only Numeric Value')
    //     }

    //     if (!fields["address"]) {
    //         formIsValid = false;
    //         NotificationManager.error('Address Field is Required')
    //     }

    //     return formIsValid;
    // }

    const onSubmit = (e: any) => {
        e.preventDefault()

        // if (!handleValidation()) {
        //     return
        // }

        // const data = {
        //     company_name: this.state.company_name,
        //     first_name: this.state.first_name,
        //     last_name: this.state.last_name,
        //     number: (this.state.number.startsWith('+1') ? this.state.number : '+1' + this.state.number),
        //     oldPassword: this.state.oldPassword,
        //     address: this.state.address,
        //     city: this.state.city,
        //     state: this.state.state,
        //     zip_code: this.state.zip_code,
        //     timeFormat: this.state.timeFormat,
        //     loadTime: this.state.loadTime,
        //     password: this.state.password,
        //     weekDays: this.state.weekDays,
        //     allow_online_appointments: this.state.allow_online_appointments,
        //     warehouse_subdomain_name: this.state.warehouse_subdomain_name,
        //     mailingAddress: this.state.mailingAddress || this.state.email,
        //     onlineApptDays: this.state.onlineApptDays,
        //     ApptStartingFrom: this.state.ApptStartingFrom,
        //     lunchBreak: this.state.lunchBreak,
        //     duplicateSlot: this.state.duplicateSlot,
        //     showCustomerAutofill: this.state.showCustomerAutofill,
        //     vehiclesLimit: this.state.vehiclesLimit
        // }
        // this.props.updateUser(data)
    }



    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: ''
        },
        onSubmit,
        validationSchema: SignupSchema
    });

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = formik;


    if(true) {
        return (
            <Loader 
                wrapperStyle={{ 
                    position: "absolute", 
                    top: "45%",
                    left: "50%",
                    margin: 'auto', 
                }}
                width={60} 
                height={60}
            />
        )
    }

    return(
        <Fragment>
                    <div className="h-16"></div>
                    <div className="form-width mx-6 mb-20 max-w-7xl mx-auto mt-5 mx-2 sm:mx-6 lg:mx-8 space-y-8 space-y-8 divide-y divide-gray-200 px-3 sm:px-3">
                        <form onSubmit={handleSubmit}>
                            <AccountSession
                                errors={errors}
                                value={values}
                                handleChange={handleChange}
                            />
                            
                            {isLoading ? (
                            <Loader 
                                // className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 text-sm font-medium"
                                height={32}
                                width={32}
                                wrapperStyle={{ margin: 'auto', width: '32px', height: '32px' }}
                            />) : (
                                <button type="submit" className="w-32 mt-8 mb-5 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    UPDATE
                                </button>
                            )}

                        </form>
                    </div>
                
        </Fragment>
    )
}

export default Settings;
