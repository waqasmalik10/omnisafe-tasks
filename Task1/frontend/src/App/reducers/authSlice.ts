import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AppDispatch, AppState } from "App/store";
import { setAuthToken } from "utils/setAuthToken";
import jwtDecode from 'jwt-decode';
import { LoginData, SignupData } from 'types/Auth';
import { login, signup } from 'Services/Auth';
import { User } from 'types/User';


interface AuthSlice{
    isLoading: boolean,
    user: User,

}


const initialState:AuthSlice= {
    isLoading: false,
    user: null!
}

export const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoading = false
            state.user = null!
        },
        setUser: (state, action:PayloadAction<any>) => {
            state.user = action.payload
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        clearState: (state) => {
            state.isLoading = false;
            state.user = null!
        },
    }
})
export default authSlice.reducer

export const { setLoading, setUser, logout, clearState } = authSlice.actions

export const selectUser = (state:AppState): User => state.authReducer.user;

export const selectIsLoading = (state:AppState): boolean => state.authReducer.isLoading;


export const loginAction = (loginData: LoginData) => async (dispatch: AppDispatch) => {

    dispatch(setLoading(true))

    const token = await login(loginData);

    dispatch(setLoading(false))

    if(!token){
        return false;
    }

    localStorage.setItem('token', token);
    setAuthToken(token);

    const { user }: { user: User } = jwtDecode(token);
    dispatch(setUser(user));

    return true;
}


export const signupAction = (requestData: SignupData) => async (dispatch: AppDispatch) => {

    dispatch(setLoading(true))

    const success = await signup(requestData);

    dispatch(setLoading(false))

    if(!success){
        return false;
    }


    return true;
}

export const logoutAction = () => async (dispatch: AppDispatch) => {

    localStorage.removeItem('token');
    dispatch(clearState())
}
