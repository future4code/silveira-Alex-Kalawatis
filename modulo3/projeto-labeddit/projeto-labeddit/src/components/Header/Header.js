import React from "react";
import { HeaderStyle, HeaderLogo, HeaderStyle_,TitleH4Styled } from "./styled";
import logo from "../../assests/img/logoSite.png"


export default function Header() {

    return (
        <HeaderStyle>
            
            <HeaderStyle_>
                <HeaderLogo src={logo} alt="logo" />
                <TitleH4Styled>LabEddit</TitleH4Styled>
            </HeaderStyle_>
            <button>Voltar</button>
            <button>Ação</button>
        </HeaderStyle>
    )
}