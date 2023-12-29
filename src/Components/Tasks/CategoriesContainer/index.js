import React, { useState, useEffect, useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Tasks } from './styles'

import { IndexContext } from '../../../Contexts'
import Categorie from '../Categorie'

export default function CategoriesContainer({ }) {

  const { categories } = useContext(IndexContext)

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon />
          <Title> Categorias </Title>
        </TitleBox>
        <ButtonCreate>
          <ButtonCreateText>Criar</ButtonCreateText>
          <ButtonCreateIcon />
        </ButtonCreate>
      </TitleRow>

      <Tasks>
        {categories &&
          categories.map((categorie => {
            return <Categorie key={categorie.id} categorie={categorie} />
          }))
        }
      </Tasks>

    </Container>
  )
}
