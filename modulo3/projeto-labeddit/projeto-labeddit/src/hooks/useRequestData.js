import axios from "axios";
import { useEffect, useState } from "react";


export const useRequestData = (url) =>{
    const [data, setData] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(undefined)

    const getData = () =>{
        const Headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        setIsLoading(true)
        axios.get(url,Headers)
        .then((resp)=>{
            setIsLoading(false)
            setData(resp.data)
            console.log(resp)
        })
        .catch((err)=>{
            setError(err)
            setIsLoading(false)
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    },[url])
    return [data, isLoading,error,getData]
}