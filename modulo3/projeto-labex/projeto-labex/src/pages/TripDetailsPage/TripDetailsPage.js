import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components'
import TripDetailCard from "../../components/TripDetailCard/TripDetailCard"
import { useNavigate, useParams } from "react-router-dom"
import { goToAdminHomePage } from "../../routes/coordinator"
import { BASE_URL } from '../../constants/urls'
import CandidateCard from "../../components/CanditateCard/CandidateCard"

export default function TripDetailsPage() {
    const navigate = useNavigate()
    const pathParams = useParams()

    const [tripDetail, setTripDetail] = useState({})
    /* const [pendingCandidates, setPendingCandidates] = useState()
    const [approvedCandidates, setApprovedCandidates] = useState() */

    const getTripDetail = () => {
        const Headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.get(`${BASE_URL}trip/${pathParams.id}`, Headers)
            .then((resp) => {
                setTripDetail(resp.data.trip)
                /* setPendingCandidates(resp.data.trip.candidate) */
                /* setApprovedCandidates(resp.data.trip.) */
        })
            .catch((err) => {
                alert("Algo deu errado.")
                console.log(err)
            })

    }
    const decideCandidate = (candidateId,choice) =>{
        const Headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        const body ={
            approved: choice
        }
        axios.put(`${BASE_URL}trips/${pathParams.id}/candidates/${candidateId}/decide`,body,Headers)
        .then((resp)=>{
            console.log(resp)
            alert("Escolha computada")
            getTripDetail()
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    useEffect(() => {
        getTripDetail();
    }, [])
    const listOfCandidates = tripDetail.candidates && tripDetail.candidates.map((c)=>{
        return <CandidateCard 
        key={c.id}
        name={c.name}
        profession = {c.profession}
        age={c.age}
        country={c.country}
        applicationText={c.applicationText}
        candidateId={c.id}
        decide={decideCandidate}
        />
    })
    const listOfApproved = tripDetail.approved && tripDetail.approved.map((c)=>{
        return <li key={c.id}>{c.name}</li>
    })
    

    return (
        <div>
            <div>
                <TripDetailCard
                    name={tripDetail.name}
                    planet={tripDetail.planet}
                    description={tripDetail.description}
                    date={tripDetail.date}
                    durationInDays={tripDetail.durationInDays} />
            </div>
            <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
            <div>
                <h2>Candidatos Pendentes</h2>
                {listOfCandidates && listOfCandidates.length>0 ? listOfCandidates:<p>Não existe candidatos pendentes</p>}
            </div>
            <div>
                <h2>Candidatos Aprovados</h2>
                {listOfApproved && listOfApproved.length>0 ? listOfApproved:<p>Não existe candidatos aprovados</p>}
            </div>
        </div>
    )
}