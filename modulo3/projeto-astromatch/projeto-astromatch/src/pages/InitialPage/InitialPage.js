import React, { useEffect, useState } from "react";
import axios from "axios";
import { LikeButton, DislikeButton, MatchPageButton, PageContainer, Header, Footer,CenterBox } from "./style";
import Logo from "../../assets/img/astromatch.png"


export default function InitalPage(props) {
    const [profile, setProfile] = useState({})


    const getProfiles = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/person')
            .then((resp) => {
                setProfile(resp.data.profile)
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const ChoosePerson = (bol) => {
        const body = {
            id: profile.id,
            choice: bol
        }

        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/choose-person', body)
            .then(() => {
                getProfiles()
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    useEffect(() => {
        getProfiles()

    }, [])


    return (
        <div>
            <PageContainer>
                <Header>
                    <img src={Logo} alt='Logo' />
                    <MatchPageButton onClick={() => props.changePage('match')} />
                </Header>
                <hr/>
                <CenterBox>
                    <img src={profile.photo} alt={'profile_photo'} />
                    <div>
                        <p>{profile.name}, {profile.age} anos</p>
                        <p>{profile.bio}</p>
                    </div>
                </CenterBox>
                <Footer>
                    <DislikeButton click={ChoosePerson} />

                    <LikeButton click={ChoosePerson} />

                </Footer>
            </PageContainer>
        </div>
    )
}