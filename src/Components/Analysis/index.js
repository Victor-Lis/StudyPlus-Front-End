import React, { useContext } from 'react'
import { Container } from './styles'

import { IndexContext } from '../../Contexts'
import CategorieProvider, { CategorieContext } from '../../Contexts/categories'

import CategoriesColumn from './CategoriesColumn'
import DataAnalysis from './DataAnalysis'

export default function Analysis() {

  const {  } = useContext(IndexContext)
  const {  } = useContext(CategorieContext)

  return (
    <Container>
      <CategorieProvider>
        <CategoriesColumn/>
        <DataAnalysis/>
      </CategorieProvider>
    </Container>
  )
}