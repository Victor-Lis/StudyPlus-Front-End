import React, { useState, useContext } from 'react'
import { Container, FormTitle, GroupTitle, GroupInput, GroupInputColor, ButtonCreate, ButtonCreateText, } from './styles'

import { CategorieContext } from '../../../Contexts/categories'

export default function TaskCreate() {

    const { createCategorie, updatingCategorie, setUpdatingCategorie, updateCategorie } = useContext(CategorieContext)

    const [title, setTitle] = useState()
    const [color, setColor] = useState("#000")

    async function handleCreate() {
        if (title && color) {
            createCategorie(title, color)
        }
    }

    async function handleUpdate(){
        updateCategorie()
    }   

    return (
        <Container>
            {updatingCategorie ?
                (
                    <>
                        <FormTitle> Editando Categoria </FormTitle>

                        <GroupTitle> Título </GroupTitle>
                        <GroupInput type='text' placeholder='Título' value={updatingCategorie.title} onChange={(e) => setUpdatingCategorie({ ...updatingCategorie, title: e.target.value })} />

                        <GroupTitle> Cor </GroupTitle>
                        <GroupInputColor type='color' placeholder='Cor' value={updatingCategorie.color} onChange={(e) => setUpdatingCategorie({ ...updatingCategorie, color: e.target.value })} />

                        <ButtonCreate onClick={handleUpdate}>
                            <ButtonCreateText>Editar</ButtonCreateText>
                        </ButtonCreate>
                    </>
                )
                :
                (
                    <>
                        <FormTitle> Criando Categoria </FormTitle>

                        <GroupTitle> Título </GroupTitle>
                        <GroupInput type='text' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} />

                        <GroupTitle> Cor </GroupTitle>
                        <GroupInputColor type='color' placeholder='Cor' value={color} onChange={(e) => setColor(e.target.value)} />

                        <ButtonCreate onClick={handleCreate}>
                            <ButtonCreateText>Criar</ButtonCreateText>
                        </ButtonCreate>
                    </>
                )}

        </Container>
    )
}
