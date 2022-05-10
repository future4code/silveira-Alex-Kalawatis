import { useState } from "react";

export const useForm = (intialState) =>{
    const [form,setForm] = useState(intialState)

    const onChange = e =>{
        const{name,value} = e.target
        setForm({...form,[name]: value})
    }
    const clearState = () =>{
        setForm(intialState)
    }
    return [form,onChange,clearState]
} 