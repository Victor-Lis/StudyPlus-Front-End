import React, { useContext } from 'react'
import { Container, TitleBox, Title, Options, EditIcon, DeleteIcon, } from './styles'

import { CategorieContext } from '../../../Contexts/categories'

export default function Categorie({ categorie, index }) {

  const { 
    creatingCategorie,
    setCreatingCategorie,
    setUpdatingCategorie,
    deleteCategorie, 
  } = useContext(CategorieContext)

  async function handleEditCategorie(){
    categorie["index"] = index
    setUpdatingCategorie(categorie)
    setCreatingCategorie(!creatingCategorie)
  }

  return (
    <Container>

      <TitleBox background={categorie.color}>
        <Title> {categorie.title} </Title>
      </TitleBox>
      <Options>
        <EditIcon onClick={() => handleEditCategorie()}/>
        <DeleteIcon onClick={() => deleteCategorie(categorie.id, index)}/>
      </Options>

    </Container>
  )
}
