import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InitalPage(props){
    const [profile,setProfile] = useState({})
    const [choice,setChoice] = useState()

    const getProfiles = ()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/person')
        .then((resp)=>{
            setProfile(resp.data.profile)
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const ChoosePerson = (bol) =>{
        const body ={
            id: profile.id,
	        choice: bol
        }

        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/choose-person',body)
        .then(()=>{
            getProfiles()
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }


    useEffect(()=>{
        getProfiles()
        
    },[])
    
  
    return(
        <div>
            <header>
                <button onClick={() => props.changePage('match')}>matches</button>
            </header>

            <div>
                <img src={profile.photo} alt={'profile_photo'}/>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </div>
            <footer>
                <button onClick={() => ChoosePerson(false)}>X</button>
                <button onClick={() => ChoosePerson(true)} >O</button>
            </footer>
            
        </div>
    )
}