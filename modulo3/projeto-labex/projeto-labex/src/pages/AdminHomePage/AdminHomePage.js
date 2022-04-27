import React from "react"
import { useRequestData, } from "../../hooks/useRequestData";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls"
import { goToHomePage } from "../../routes/coordinator";
import AdminHomeCard from "../../components/AdminHomeCard/AdminHomeCard"
import { useNavigate } from "react-router-dom";



export default function AdminHomePage() {
    const navigate = useNavigate()
    const [trips, isLoading, error, getData] = useRequestData(`${BASE_URL}trips`)

    const deleteTrip = (id) => {
        const Headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        console.log(id)
        axios.delete(`${BASE_URL}trips/${id}`, Headers)
            .then(() => {
                alert("Viagem deletada com sucesso!")
                getData()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const listOfTrips = trips && trips.trips.map((trip) => {
        return (
            <AdminHomeCard name={trip.name} delTrip={deleteTrip} id={trip.id} />
        )
    })


    return (              
        <div>
            <div>
                <h1>Painel de Admin</h1>
                <div>
                    <button onClick={()=> goToHomePage(navigate)}>Voltar</button>
                    <button>Criar Viagem</button>
                    <button>Logout</button>
                </div>

            </div>
            {isLoading && <h1>Carregando...</h1>}
            {!isLoading && error && <h1>Nao carregou</h1>}
            {!isLoading && listOfTrips &&
                (listOfTrips.length > 0 ? (
                    <ul>{listOfTrips}</ul>
                ) : (
                    "Viagens nao encontradas"
                ))}
        </div>
    )
}