import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../models/User";

const api = "https://localhost:7213/api/";

export const loginAPI = async (userName:string,password:string)=>{
    try{
        const data= await axios.post<UserProfileToken>(api+"account/login",{
            username: userName,
            password: password
        })
        return data;
    }catch(err){
        handleError(err);
    }
}

export const registerAPI = async (email:string,userName:string,password:string)=>{
    try{
        const data= await axios.post<UserProfileToken>(api+"account/register",{
            username: userName,
            email: email,
            password: password
        })
        return data;
    }catch(err){
        handleError(err);
    }
}