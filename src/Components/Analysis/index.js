import React, { useContext } from 'react'
import { Container } from './styles'

import CategorieProvider from '../../Contexts/categories'

import CategoriesColumn from './CategoriesColumn'
import DataAnalysis from './DataAnalysis'

export default function Analysis() {

  return (
    <Container>
      <CategorieProvider>
        <CategoriesColumn/>
        <DataAnalysis/>
      </CategorieProvider>
    </Container>
  )
}