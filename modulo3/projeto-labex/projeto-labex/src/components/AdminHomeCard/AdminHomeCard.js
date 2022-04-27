import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripDetailsPage } from "../../routes/coordinator";



export default function AdminHomeCard(props){  

    

    return(
        <div>
            <p>{props.name}</p>
            <button onClick={()=> props.delTrip(props.id)}>Excluir</button>
        </div>

    )
}