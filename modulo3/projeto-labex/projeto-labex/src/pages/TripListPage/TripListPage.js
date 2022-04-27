import React from "react";
import { useRequestData } from '../../hooks/useRequestData'
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function TripListPage() {
    const navigate = useNavigate()
    const [trips, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-kalawatis-silveira/trips')
    /* console.log(trips) */
    const listOfTrips = trips && trips.trips.map((trip) => {
        return (
            <li key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date}</p>
            </li>
        )
    })
    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(navigate)}>voltar</button>
                <button>Inscrever-se</button>
            </div>
            <div>
                <h1>Lista de Viagens</h1>
            </div>

            <div>
                {isLoading && <h1>Carregando...</h1>}
                {!isLoading && error && <h1>Nao carregou</h1>}
                {!isLoading && listOfTrips &&
                    (listOfTrips.length > 0 ? (
                        <ul>{listOfTrips}</ul>
                    ) : (
                        "Viagens nao encontradas"
                    ))}
            </div>

        </div>
    )
}