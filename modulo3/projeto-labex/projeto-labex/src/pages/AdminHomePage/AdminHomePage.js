import React from "react"
import { useRequestData, } from "../../hooks/useRequestData";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls"
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage } from "../../routes/coordinator";
import AdminHomeCard from "../../components/AdminHomeCard/AdminHomeCard"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";



export default function AdminHomePage() {
    useProtectedPage()
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
            <AdminHomeCard detail={goToTripDetailsPage} nav={navigate} key={trip.id} name={trip.name} delTrip={deleteTrip} id={trip.id} />
        )
    })
    const logout = (navigate) =>{
        localStorage.removeItem('token')
        goToHomePage(navigate)
    }


    return (              
        <div>
            <div>
                <h1>Painel de Admin</h1>
                <div>
                    <button onClick={()=> goToHomePage(navigate)}>Voltar</button>
                    <button onClick={()=> goToCreateTripPage(navigate)}>Criar Viagem</button>
                    <button onClick={()=>logout(navigate)}>Logout</button>
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