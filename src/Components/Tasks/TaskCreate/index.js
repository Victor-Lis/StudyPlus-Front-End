import React, { useState, useEffect, useContext } from 'react'
import { Container, FormTitle, GroupTitle, GroupInput, Times, TimeBox, TimeBoxInput, TimeBoxRow, TimeBoxTitle, TimeBoxIconPin, TimeBoxIconFlag, GroupSelect, ButtonCreate, ButtonCreateText, ButtonCreateIcon } from './styles'

import { IndexContext } from '../../../Contexts'

export default function TaskCreate({ selectedDay }) {

    const { categories, createTask } = useContext(IndexContext)
    
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [firstTime, setFirstTime] = useState()
    const [secondTime, setSecondTime] = useState()
    const [categorie, setCategorie] = useState()

    async function handleCreate(){    
        if(title && description && firstTime && secondTime){
            createTask(title, description, firstTime, secondTime, (!categorie ? categories[0].id : parseInt(categorie)), selectedDay.id)
        }
    }

    return (
        <Container>
            <FormTitle> Criando Tarefa </FormTitle>

            <GroupTitle> Título </GroupTitle>
            <GroupInput type='text' placeholder='Título' onChange={(e) => setTitle(e.target.value)}/>

            <GroupTitle> Descrição </GroupTitle>
            <GroupInput type='text' placeholder='Descrição' onChange={(e) => setDescription(e.target.value)}/>

            <Times>
                <TimeBox>
                    <TimeBoxRow>
                        <TimeBoxIconPin />
                        <TimeBoxTitle> Início </TimeBoxTitle>
                    </TimeBoxRow>
                    <TimeBoxInput type={"time"} onChange={(e) => setFirstTime(e.target.value)}/>
                </TimeBox>
                <TimeBox>
                    <TimeBoxRow>
                        <TimeBoxIconFlag />
                        <TimeBoxTitle> Fim </TimeBoxTitle>
                    </TimeBoxRow>
                    <TimeBoxInput type={"time"} onChange={(e) => setSecondTime(e.target.value)}/>
                </TimeBox>
            </Times>

            <GroupTitle> Categoria </GroupTitle>
            <GroupSelect onChange={(e) => {setCategorie(e.target.value)}}>
                {categories && categories.map((categorie) => {
                    return <option style={{ color: categorie.color }} value={categorie.id}> {categorie.title} </option>
                })}
            </GroupSelect>

            <ButtonCreate onClick={handleCreate}>
                <ButtonCreateText>Criar</ButtonCreateText>
            </ButtonCreate>

        </Container>
    )
}
