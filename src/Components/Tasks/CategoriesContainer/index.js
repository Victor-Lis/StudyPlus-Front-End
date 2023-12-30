import React, { useState, useEffect, useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Tasks } from './styles'

import { IndexContext } from '../../../Contexts'
import CategorieCreate from '../CategorieCreate'
import Categorie from '../Categorie'

export default function CategoriesContainer({ }) {

  const { categories, creatingCategorie, setCreatingCategorie } = useContext(IndexContext)

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon />
          <Title> Categorias </Title>
        </TitleBox>
        <ButtonCreate>
          <ButtonCreateText onClick={() => setCreatingCategorie(!creatingCategorie)}>Criar</ButtonCreateText>
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
