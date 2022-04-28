import React from "react"
import { useNavigate } from "react-router-dom"
import {planets} from "../../constants/planets"
import { useForm } from "../../hooks/useForm"
import { goToAdminHomePage } from "../../routes/coordinator"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"



export default function CreateTripPage(){
    useProtectedPage()
    const navigate = useNavigate()
    const [form,onChange,clear] = useForm({name:'',planet:'',date:'',description:'',durationInDays:''})

    const createTrip = (body,clear) =>{
        const Headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.post(`${BASE_URL}trips`,body,Headers)
        .then(()=>{
            alert("Viagem criada com sucesso ")
            clear()
        })
        .catch((err)=>{
            alert("Algo deu errado")
            console.log(err)
        })
    }
    const onClickCreateTrip = e =>{
        e.preventDefault()
        createTrip(form,clear)
    }

    return(
        <div>
            <h1>Criar Viagem</h1>
            <form onSubmit={onClickCreateTrip}>
                <input
                placeholder="Nome"
                name="name"
                value={form.name}
                onChange={onChange}
                pattern={'^.{5,}$'}
                title='Nome da viagem deve conter 5 caracteres'
                required
                />
                <select
                placeholder="planeta"
                name='planet'
                value={form.planet}
                onChange={onChange}
                required
                >
                    <option value="" disabled>Escolha um planeta</option>
                    {planets.map((p)=>{
                        return <option key={p} value={p}>{p}</option>
                    })}
                </select>
                <input
                placeholder="Data"
                name="date"
                type='date'
                value={form.date}
                onChange={onChange}
                required
                />
                <input
                placeholder="Descrição"
                name="description"
                value={form.description}
                onChange={onChange}
                pattern={'^.{30,}$'}
                title="Sua descrição deve conter 30 caracteres"
                />
                <input
                placeholder="Duração"
                name="durationInDays"
                type='number'
                value={form.durationInDays}
                onChange={onChange}
                min={50}
                required
                />
                <div>
                    <button onClick={()=>goToAdminHomePage(navigate)}>Voltar</button>
                    <button type="submit">Criar</button>
                </div>
            </form>
        </div>
    )
}