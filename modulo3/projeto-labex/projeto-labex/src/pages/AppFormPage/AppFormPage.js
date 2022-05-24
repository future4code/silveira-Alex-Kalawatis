import React, { useState } from "react";
import axios from "axios";
import { FormPageConteiner,TitleFormPage,FormStyled,BackBtn,SingBtn } from "./style";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm"
import { countries } from "../../constants/countries";
import { useRequestData } from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export default function AppFormPage() {
    const navigate = useNavigate()
    const [tripId, setTripId] = useState('')
    const [trips] = useRequestData(`${BASE_URL}trips`)
    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const applyToTrip = (body, tripId, clear) => {

        axios.post(`${BASE_URL}trips/${tripId}/apply`, body)
            .then(() => {
                alert("Canditatura feita com sucesso!")
                clear()
            })
            .catch((err) => {
                alert("Alguma coisa deu errado")
                console.log(err)
            })

    }
    const tripsOption = trips && trips.trips.map((t) => {
        return <option key={t.id} value={t.id}>{t.name}</option>
    })
    const onClickSendForm = e => {
        e.preventDefault()
        applyToTrip(form, tripId, clear)
    }
    const onChangeTripId = e => {
        setTripId(e.target.value)
    }
    console.log(form)
    return (
        <FormPageConteiner>
            <TitleFormPage>Increver-se</TitleFormPage>
                <FormStyled onSubmit={onClickSendForm}>
                    <select defaultValue={""} onChange={onChangeTripId}>
                        <option value="" disabled>Escolha uma viagem</option>
                        {tripsOption}
                    </select>
                    <input
                        placeholder='Nome'
                        name='name'
                        value={form.name}
                        onChange={onChange}
                        pattern={'^.{4,}$'}
                        title='O nome tem que ter no minimo 4 letras'
                        required
                    />
                    <input
                        placeholder="Idade"
                        name='age'
                        type='number'
                        value={form.age}
                        onChange={onChange}
                        min={18}
                        max={200}
                        title='Idade entre 18 e 200'
                        required
                    />
                    <input
                        placeholder="Texto de Candidatura"
                        name='applicationText'
                        value={form.applicationText}
                        onChange={onChange}
                        pattern={"^.{30,}$"}
                        title='Sua descrição precisa no minimo 30 caracteres.'
                        required
                    />
                    <input
                        placeholder="Profissão"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        pattern={'^.{4,}$'}
                        title='Sua profissao tem que ter no minimo 4 caracteres'
                        required
                    />
                    <select
                        placeholder="país"
                        name="country"
                        value={form.country}
                        onChange={onChange}
                    >
                        <option value="" disabled>Escolha seu País</option>
                        {countries.map((c) => {
                            return <option key={c} value={c}>{c}</option>
                        })}
                    </select>
                    <div>
                        <BackBtn goTo={goToHomePage} nav={navigate}/>
                        <SingBtn>Enviar Candidatura</SingBtn>
                    </div>
                </FormStyled>

        </FormPageConteiner>
    )
}