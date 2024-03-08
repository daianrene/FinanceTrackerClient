import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";

const api = "https://localhost:7213/api/portfolio";

export const portfolioAddAPI = async (symbol:string)=>{
    try{
        const data = await axios.post<PortfolioPost>(api+"?symbol="+symbol);
        return data;
    }catch(err){
        handleError(err);
    }
}

export const portfolioGetAPI = async ()=>{
    try{
        const data = await axios.get<PortfolioGet[]>(api);
        return data;
    }catch(err){
        handleError(err);
    }
}

export const portfolioDeleteAPI = async (symbol:string)=>{
    try{
        const data = await axios.delete<PortfolioPost>(api+"?symbol="+symbol);
        return data;
    }catch(err){
        handleError(err);
    }
}