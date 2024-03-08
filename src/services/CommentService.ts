import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet, CommentPost } from "../Models/Comment";

const api = "https://localhost:7213/api/comment/";

export const commentPostAPI= async (title:string,content:string,symbol:string)=>{
    try{
        const data = await axios.post<CommentPost>(api+symbol,{
            title:title,
            content:content,
        })
        return data;
    }catch(err){
        handleError(err)
    }
}

export const commentGetAPI= async (symbol:string)=>{
    try{
        const data = await axios.get<CommentGet[]>(api+symbol)
        return data;
    }catch(err){
        handleError(err)
    }
}