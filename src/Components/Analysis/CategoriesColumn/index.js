import React, { useContext } from 'react'
import { Container, Categorie } from './styles'

import { CategorieContext } from '../../../Contexts/categories'

export default function CategoriesColumn() {

  const { categories, selectedCategorie, handleSetSelectedCategorie } = useContext(CategorieContext)

  return (
    <Container>
      {categories?.map((categorie, index) => {
        return <Categorie key={index} background={categorie?.color} selected={selectedCategorie?.id == categorie?.id} onClick={() => {handleSetSelectedCategorie(categorie)}}> {categorie?.title} </Categorie>
      })}
    </Container>
  )
}