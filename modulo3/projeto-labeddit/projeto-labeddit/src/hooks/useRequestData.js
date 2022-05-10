import axios from "axios";
import { useEffect, useState } from "react";


export const useRequestData = (url) =>{
    const [data, setData] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(undefined)

    const getData = () =>{
        const Headers = {
            headers: {
                auth: localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0NWY2ZDdmLWJlNDQtNDk3ZS05NGVlLTc1OTY3M2NhNWQxNiIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1MjIwNTMwNiwiZXhwIjoxNjUyMjQ4NTA2fQ.3NRPQzGEiNCwIeiktU-0jVu-5-sCMJENvCtOJqBcHr0')
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
    return [data, isLoading,error]
}