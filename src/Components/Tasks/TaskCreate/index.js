import React, { useState, useEffect, useContext } from 'react'
import { Container, FormTitle, GroupTitle, GroupInput, Times, TimeBox, TimeBoxInput, TimeBoxRow, TimeBoxTitle, TimeBoxIconPin, TimeBoxIconFlag, GroupSelect, ButtonCreate, ButtonCreateText, ButtonCreateIcon } from './styles'

import { IndexContext } from '../../../Contexts'

export default function CategorieCreate({ }) {

    const { categories, createTask, updatingTask, setUpdatingTask, updateTask } = useContext(IndexContext)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [firstTime, setFirstTime] = useState()
    const [secondTime, setSecondTime] = useState()
    const [categorie, setCategorie] = useState()

    async function handleCreate() {
        if (title && description && firstTime && secondTime && categories.length > 0) {
            createTask(title, description, firstTime, secondTime, (!categorie ? categories[0].id : parseInt(categorie)))
        }
    }

    async function handleUpdate(){
        updateTask()
    }   

    return (
        <Container>
            {updatingTask ?
                (
                    <>
                        <FormTitle> Editando Tarefa </FormTitle>

                        <GroupTitle> Título </GroupTitle>
                        <GroupInput type='text' placeholder='Título' value={updatingTask.title} onChange={(e) => setUpdatingTask({ ...updatingTask, title: e.target.value })} />

                        <GroupTitle> Descrição </GroupTitle>
                        <GroupInput type='text' placeholder='Descrição' value={updatingTask.desc} onChange={(e) => setUpdatingTask({ ...updatingTask, desc: e.target.value })} />

                        <Times>
                            <TimeBox>
                                <TimeBoxRow>
                                    <TimeBoxIconPin />
                                    <TimeBoxTitle> Início </TimeBoxTitle>
                                </TimeBoxRow>
                                <TimeBoxInput type={"time"} value={updatingTask.primeira_hora} onChange={(e) => setUpdatingTask({ ...updatingTask, primeira_hora: e.target.value })} />
                            </TimeBox>
                            <TimeBox>
                                <TimeBoxRow>
                                    <TimeBoxIconFlag />
                                    <TimeBoxTitle> Fim </TimeBoxTitle>
                                </TimeBoxRow>
                                <TimeBoxInput type={"time"} value={updatingTask.ultima_hora} onChange={(e) => setUpdatingTask({ ...updatingTask, ultima_hora: e.target.value })} />
                            </TimeBox>
                        </Times>

                        <GroupTitle> Categoria </GroupTitle>
                        <GroupSelect onChange={(e) => setUpdatingTask({ ...updatingTask, categorie: e.target.value })} >
                            <option style={{ color: updatingTask.Categorie.color }} key={updatingTask.Categorie.id} value={updatingTask.Categorie.id}> {updatingTask.Categorie.title} </option>
                            {categories.length && categories.map((categorie) => {
                                if(categorie.id != updatingTask.Categorie.id){
                                    return <option style={{ color: categorie.color }} key={categorie.id} value={categorie.id}> {categorie.title} </option>
                                }
                            })}
                        </GroupSelect>

                        <ButtonCreate onClick={handleUpdate}>
                            <ButtonCreateText>Editar</ButtonCreateText>
                        </ButtonCreate>
                    </>
                )
                :
                (
                    <>
                        <FormTitle> Criando Tarefa </FormTitle>

                        <GroupTitle> Título </GroupTitle>
                        <GroupInput type='text' placeholder='Título' onChange={(e) => setTitle(e.target.value)} />

                        <GroupTitle> Descrição </GroupTitle>
                        <GroupInput type='text' placeholder='Descrição' onChange={(e) => setDescription(e.target.value)} />

                        <Times>
                            <TimeBox>
                                <TimeBoxRow>
                                    <TimeBoxIconPin />
                                    <TimeBoxTitle> Início </TimeBoxTitle>
                                </TimeBoxRow>
                                <TimeBoxInput type={"time"} onChange={(e) => setFirstTime(e.target.value)} />
                            </TimeBox>
                            <TimeBox>
                                <TimeBoxRow>
                                    <TimeBoxIconFlag />
                                    <TimeBoxTitle> Fim </TimeBoxTitle>
                                </TimeBoxRow>
                                <TimeBoxInput type={"time"} onChange={(e) => setSecondTime(e.target.value)} />
                            </TimeBox>
                        </Times>

                        <GroupTitle> Categoria </GroupTitle>
                        <GroupSelect onChange={(e) => { setCategorie(e.target.value) }}>
                            {categories.length && categories.map((categorie) => {
                                return <option style={{ color: categorie.color }} key={categorie.id} value={categorie.id}> {categorie.title} </option>
                            })}
                        </GroupSelect>

                        <ButtonCreate onClick={handleCreate}>
                            <ButtonCreateText>Criar</ButtonCreateText>
                        </ButtonCreate>
                    </>
                )}

        </Container>
    )
}
