import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../routes/coordinator";

export const useUnprotectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(token !== null){
            goToFeedPage(navigate)
        }
    },[navigate])
} 