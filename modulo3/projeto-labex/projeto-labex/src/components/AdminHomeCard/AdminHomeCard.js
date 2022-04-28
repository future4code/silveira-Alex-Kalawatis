import React from "react";

export default function AdminHomeCard(props){  

    return(
        <div>
            <p>{props.name}</p>
            <button onClick={()=> props.delTrip(props.id)}>Excluir</button>
        </div>
    )
}