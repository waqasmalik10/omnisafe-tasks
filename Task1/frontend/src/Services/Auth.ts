import { LoginData, SignupData } from "types/Auth";
import { apiConstants } from "./ApiConstants";
import http from "./Core/HttpService";

export const login = async (loginData: LoginData) => {

    try {
        const result = await http.post(`${apiConstants.AUTH}/login`,  loginData);
        return Promise.resolve(result.data.token);
    }
    catch (error) {
        return Promise.resolve(null!);
    }

}

export const signup = async (signupData: SignupData) => {

    try {
        const result = await http.post(`${apiConstants.AUTH}/signup`,  signupData);
        return Promise.resolve(result.data);
    }
    catch (error) {
        return Promise.resolve(null!);
    }

}