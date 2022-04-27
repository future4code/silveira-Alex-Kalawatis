import React from "react";
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/constants'

export default function TripListPage() {
    const [trips, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-kalawatis-silveira/trips')
    console.log(trips)
     const listOfTrips = trips && trips.trips.map((trip) => {
        return (
            <li key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.duration}</p>
                <p>Data: {trip.date}</p>
            </li>
        )
    }) 
    return (
        <div>
            <button>voltar</button>
            <button>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
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