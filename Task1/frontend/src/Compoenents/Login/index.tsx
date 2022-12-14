import { useAppDispatch, useAppSelector } from 'App/hooks';
import { loginAction, selectIsLoading } from 'App/reducers/authSlice';
import PublicLayout from 'Common/PublicLayout';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from 'utils/ValidationSchema/Auth';
import Loader from 'Common/Loader';
import ErrorMessage from 'Common/Error';


const Login = () => {

    const isLoading = useAppSelector(selectIsLoading);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const onSubmit = async (values: any) => {

        const isSuccess = await dispatch(loginAction(values));

        isSuccess && navigate('/')
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit,
        validationSchema: LoginSchema
    });

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = formik;

    const {email, password} = values;

    return (
        <PublicLayout>
            <div className="form-width mx-6 mb-20 max-w-7xl mx-auto space-y-8 space-y-8 divide-y divide-gray-200">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="min-h-screen flex flex-col justify-center pb-12 sm:px-6 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                    <h3 className="text-lg leading-6 font-bold text-gray-900">
                                        Sign in to your account
                                    </h3>
                                </div>
                                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                                            <div className="mt-1">
                                                <input 
                                                    type="email" 
                                                    onBlur={handleBlur} 
                                                    onChange={handleChange} 
                                                    name="email" 
                                                    value={email} 
                                                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-md shadow-sm block w-full p-2 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 focus:visible:border-indigo-500" 
                                                    placeholder="" 
                                                />
                                                {touched.email && errors.email && <ErrorMessage text={errors.email} />}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">Password</label>
                                            <div className="mt-1">
                                                <input 
                                                    type="password" 
                                                    onBlur={handleBlur} 
                                                    onChange={handleChange} 
                                                    name="password" 
                                                    value={password} 
                                                    className="border border-gray-300 text-gray-900 text-sm rounded-md shadow-sm block w-full p-2 dark:text-white focus:ring-indigo-500 dark:focus:border-indigo-500" 
                                                    placeholder="" 
                                                />
                                                {touched.password && errors.password && <ErrorMessage text={errors.password} />}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            {/* <div className="flex items-center">
                                                <input name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                                    Remember me
                                                </label>
                                            </div> */}
                                            <div className="text-sm">
                                                <div className="font-medium text-blue-700 hover:text-blue-600 hover:underline cursor-pointer">
                                                    Forgot your password?
                                                </div>
                                            </div>
                                        </div>
                                        {/* w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 text-sm font-medium */}
                                        {isLoading? (
                                            <Loader 
                                                height='30'
                                                width='30'
                                            />
                                        ) : (
                                            <button type="submit" className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                Sign in
                                            </button>
                                        )} 

                                        {/* {this.props.auth.isError ? (<p className="w-full mt-8 ml-3 ml-auto mr-auto block justify-center py-2 px-4 text-sm font-medium text-red-700">{this.props.auth.errorMessage}</p>) : null}
                                        <div className="mt-4 text-center text-gray-900 text-base font-medium">Create An Account? <span className="font-bold text-blue-700 hover:text-blue-600"><a className="hover:underline" href={`${process.env.REACT_APP_FRONTEND}/sign-up`}>click here</a> </span></div> */}
                                        <div className="mt-2 text-sm flex items-center">
                                            <p>Don't have an account?</p>
                                            <NavLink
                                                className="font-medium text-blue-700 hover:text-blue-600 hover:underline pl-2"
                                                to='/signup'
                                            >
                                                Signup
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

export default Login;
