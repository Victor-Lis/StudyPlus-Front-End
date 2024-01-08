import React, { useContext } from 'react'
import { Container, Card, CardTitle, CardStrong } from './styles'

import { CategorieContext } from '../../../Contexts/categories'
import { IndexContext } from '../../../Contexts/'

export default function DataAnalysis() {

  const { categories } = useContext(IndexContext)
  const { selectedCategorie, percentage, allTasks, categorieTasksCount, tasksWithCategorieInThisWeek, allTasksInThisWeek,} = useContext(CategorieContext)

  return (
    <Container>

        <Card background={selectedCategorie?.color}>
          <CardTitle> <CardStrong color={selectedCategorie?.color}>{percentage.toFixed(2)}%</CardStrong> das tarefas totais tem a categoria <CardStrong color={selectedCategorie?.color}>{selectedCategorie?.title}</CardStrong> </CardTitle>
        </Card>

        <Card background={selectedCategorie?.color}>
          <CardTitle> <CardStrong color={selectedCategorie?.color}>{categorieTasksCount}</CardStrong> de {allTasks?.length} tarefas tem a categoria <CardStrong color={selectedCategorie?.color}>{selectedCategorie?.title}</CardStrong> </CardTitle>
        </Card>

        <Card background={selectedCategorie?.color}>
          <CardTitle><CardStrong color={selectedCategorie?.color}>{tasksWithCategorieInThisWeek}</CardStrong>/{allTasksInThisWeek} tarefas essa semana tem a categoria <CardStrong color={selectedCategorie?.color}>{selectedCategorie?.title}</CardStrong></CardTitle>
        </Card>

    </Container>  
  )
}