import React from "react";
import { AdminCard, DelBtn } from "./style";

export default function AdminHomeCard(props) {

    return (
        <AdminCard >
            <p onClick={() => props.detail(props.nav, props.id)}><b>{props.name}</b></p>
            <DelBtn delTrip={()=>props.delTrip(props.id)} />
        </AdminCard>
    )
}