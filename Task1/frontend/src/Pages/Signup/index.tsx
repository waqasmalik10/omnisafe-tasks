import { useAppDispatch, useAppSelector } from 'App/hooks';
import { selectIsLoading, signupAction } from 'App/reducers/authSlice';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignupSchema } from 'utils/ValidationSchema/Auth';
import PublicLayout from 'Common/PublicLayout';
import Input from 'Common/Input';
import Loader from 'Common/Loader';

const Signup = () => {

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(selectIsLoading)

    // const navigate = useNavigate();

    const onSubmit = async (values: any) => {

        await dispatch(signupAction(values));

        // isSuccess && navigate('/login')
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

    const {email, password, name, surname} = values;

    return (
        <PublicLayout>
            <div className="form-width mx-6 mb-20 max-w-7xl mx-auto mt-5 space-y-8 space-y-8 divide-y divide-gray-200 px-3 sm:px-3">
                <form onSubmit={handleSubmit}>
                    
                    <div className="space-y-6 sm:space-y-5">
                        <div className="min-h-screen flex flex-col justify-center pb-12 sm:px-6 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <h3 className="text-lg leading-6 font-bold text-gray-900">
                                    Create your account
                                </h3>
                            </div>
                            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">Name</label>
                                        <div className="mt-1">
                                            <Input 
                                                value={name}
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.name && errors.name && <p>{errors.name}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700 text-left">Surname</label>
                                        <div className="mt-1">
                                            <Input 
                                                value={surname}
                                                name="surname"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.surname && errors.surname && <p>{errors.surname}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                                        <div className="mt-1">
                                            <Input 
                                                value={email}
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.email && errors.email && <p>{errors.email}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Password</label>
                                        <div className="mt-1">
                                            <Input 
                                                value={password}
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.password && errors.password && <p>{errors.password}</p>}
                                    </div>
                                    
                                    
                                    {isLoading? (
                                        <Loader width='30' height='30'/>
                                    ):(
                                        <button type="submit" className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Sign up
                                        </button>
                                    )}

                                    <div className="mt-2 flex items-center justify-between">
                                        
                                        <div className="text-sm flex items-center justify-between">
                                            <p>Already have an account?</p>
                                            <NavLink
                                                className="font-medium text-blue-700 hover:text-blue-600 hover:underline"
                                                to='/login'
                                            >
                                               Login
                                            </NavLink>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </form>
            </div >
        </PublicLayout>
    )
}


export default Signup;
