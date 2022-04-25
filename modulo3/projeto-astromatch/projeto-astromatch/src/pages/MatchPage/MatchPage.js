import React, { useEffect, useState } from "react";
import axios from "axios";
import { MatchContainer, Header, PageContainer, ProfilePhoto,ClearButton,ReturnToSwipe } from "./style";
import Logo from "../../assets/img/astromatch.png"


export default function MatchPage(props) {
    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/matches')
            .then((resp) => {
                console.log(resp)
                setMatchList(resp.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    console.log(matchList)
    const listOfMatches = matchList.map((matches) => {
        return (
            <MatchContainer>
                <ProfilePhoto src={matches.photo} alt={'Profile_Photo'} />
                <p>{matches.name}</p>
            </MatchContainer>
        )
    })
    const clearMatch = () => {
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/clear', headers)
            .then((resp) => {
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <PageContainer>
                <Header>
                    <ReturnToSwipe onClick={() => props.changePage('home')}/>
                    <img src={Logo} alt='app_logo' />
                </Header>
                <hr/>
                <ul>
                    {listOfMatches}
                </ul>
            </PageContainer>
            <ClearButton click={clearMatch}/>
        </div>
    )
}