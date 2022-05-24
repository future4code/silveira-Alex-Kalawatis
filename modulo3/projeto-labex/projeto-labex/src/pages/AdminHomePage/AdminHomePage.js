import React from "react"
import { useRequestData, } from "../../hooks/useRequestData";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls"
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage } from "../../routes/coordinator";
import AdminHomeCard from "../../components/AdminHomeCard/AdminHomeCard"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { AdminHomeContainer,ButtomContainer,TitleAdminPage,BackBttn,CreateBtn,LogoutBtn } from "./style";



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
        <AdminHomeContainer>
            <div>
                <TitleAdminPage>Painel de Admin</TitleAdminPage>
                <ButtomContainer>
                    <BackBttn goTo={goToHomePage} nav={navigate}/>
                    <CreateBtn goTo={goToCreateTripPage} nav={navigate}/>
                    <LogoutBtn logOut={logout} nav={navigate}/>
                </ButtomContainer>

            </div>
            {isLoading && <TitleAdminPage>Carregando...</TitleAdminPage>}
            {!isLoading && error && <TitleAdminPage>Nao carregou</TitleAdminPage>}
            {!isLoading && listOfTrips &&
                (listOfTrips.length > 0 ? (
                    <ul>{listOfTrips}</ul>
                ) : (
                    <TitleAdminPage>"Viagens nao encontradas"</TitleAdminPage>
                ))}
        </AdminHomeContainer>
    )
}