import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToTripListPage } from "../../routes/coordinator";

export default function HomePage(){
    const navigate = useNavigate()

    return(
        <div>
            
                <h2>LabeX</h2>
            <div>
                <button onClick={()=> goToTripListPage(navigate)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
            </div>

        </div>
    )
}