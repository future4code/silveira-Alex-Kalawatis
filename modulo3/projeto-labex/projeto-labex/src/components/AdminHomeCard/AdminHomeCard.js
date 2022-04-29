import React from "react";
import styled from 'styled-components'


const AdminCard = styled.div`
    display:flex;
    justify-content: space-around;
    border: 1px solid black;
    width: 400px;
`

export default function AdminHomeCard(props) {

    return (
        <AdminCard onClick={()=> props.detail(props.nav,props.id)}>
            <p>{props.name}</p>
            <button onClick={() => props.delTrip(props.id)}>Excluir</button>
        </AdminCard>
    )
}