import React, { useState, useEffect, useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Tasks } from './styles'

import { IndexContext } from '../../../Contexts'
import CategorieCreate from '../CategorieCreate'
import Categorie from '../Categorie'

export default function CategoriesContainer({ }) {

  const { categories, creatingCategorie, setUpdatingCategorie, updatingCategorie, setCreatingCategorie } = useContext(IndexContext)

  function handleCloseCreatingAndEditing(){

    setUpdatingCategorie()
    setCreatingCategorie(!creatingCategorie)
    
  }

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon />
          <Title> Categorias </Title>
        </TitleBox>
        <ButtonCreate onClick={() => setCreatingCategorie(!creatingCategorie)}>
          <ButtonCreateText>{!!creatingCategorie && !!updatingCategorie ? 'Editando': !!creatingCategorie && !updatingCategorie? 'Criando' : 'Criar'}</ButtonCreateText>
          <ButtonCreateIcon />
        </ButtonCreate>
      </TitleRow>

      {creatingCategorie && <CategorieCreate />}

      <Tasks>
        {categories &&
          categories.map(((categorie, index) => {
            return <Categorie key={categorie.id} categorie={categorie} index={index}/>
          }))
        }
      </Tasks>

    </Container>
  )
}
