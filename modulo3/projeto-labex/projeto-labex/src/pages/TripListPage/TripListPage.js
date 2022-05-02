import React from "react";
import { useRequestData } from '../../hooks/useRequestData'
import { goToHomePage, goToAppFormPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { TripListContainer, TripCardContainer, TitleContainer,Loading,TripListBtn,ListContainer } from "./style";

export default function TripListPage() {
    const navigate = useNavigate()
    const [trips, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-kalawatis-silveira/trips')
    /* console.log(trips) */
    const listOfTrips = trips && trips.trips.map((trip) => {
        return (
            <TripCardContainer key={trip.id}>
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta:</b> {trip.planet}</p>
                <p><b>Duração:</b> {trip.durationInDays} dias</p>
                <p><b>Data:</b> {trip.date}</p>
            </TripCardContainer>
        )
    })
    return (
        <TripListContainer>
            <TripListBtn goToA={goToHomePage} goToB={goToAppFormPage} nav={navigate}/>
            <TitleContainer>
                <h1>Lista de Viagens</h1>
            </TitleContainer>

            <ListContainer>
                {isLoading && <Loading>Carregando...</Loading>}
                {!isLoading && error && <Loading>Nao carregou</Loading>}
                {!isLoading && listOfTrips &&
                    (listOfTrips.length > 0 ? (
                        <ul>{listOfTrips}</ul>
                    ) : (
                        "Viagens nao encontradas"
                    ))}
            </ListContainer>

        </TripListContainer>
    )
}