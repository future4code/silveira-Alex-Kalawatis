import React from "react";
import { HeaderStyle, HeaderLogo, HeaderStyle_, TitleH4Styled,HeaderLogButton } from "./styled";
import logo from "../../assests/img/logoSite.png"
import { useNavigate } from "react-router-dom";
import { goToLoginPage,goToFeedPage } from "../../routes/coordinator";
import Login from "../../assests/icons/enter.png"
import Logout from "../../assests/icons/logout.png"


export default function Header() {

    const navigate = useNavigate()
    const logout = (navigate) => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }
    const isLogged = () =>{
        if(localStorage.getItem('token')){
            return true
        }else{
            return false
        }
    }
    const isLog = isLogged()
    return (
        <HeaderStyle>

            <HeaderStyle_>
                <HeaderLogo onClick={()=>goToFeedPage(navigate)} src={logo} alt="logo" />
                <TitleH4Styled>LabEddit</TitleH4Styled>
            </HeaderStyle_>
            {isLog ? (<HeaderLogButton src={Logout} onClick={()=> logout}/>):(<HeaderLogButton src={Login} onClick={()=> goToLoginPage(navigate)}/>)}
        </HeaderStyle>
    )
}