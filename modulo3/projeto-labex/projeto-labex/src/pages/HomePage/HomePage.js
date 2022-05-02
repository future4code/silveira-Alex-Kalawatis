import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToTripListPage } from "../../routes/coordinator";
import { HomeContainer, HomeButton, ButtonContainer } from "./style";

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <HomeContainer>

            <h1>LabeX</h1>
            <div>
                <HomeButton goToA={goToTripListPage} goToB={goToLoginPage} nav={navigate} />
            </div>


        </HomeContainer>
    )
}