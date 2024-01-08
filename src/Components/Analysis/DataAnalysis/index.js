import React, { useContext } from 'react'
import { Container, Card, CardTitle, CardStrong } from './styles'

import { CategorieContext } from '../../../Contexts/categories'

export default function DataAnalysis() {

  const {  
    selectedCategorie, 
    percentage, 
    allTasks, categorieTasksCount, 
    tasksWithCategorieInThisWeek, allTasksInThisWeek, 
    allHours, allHoursInCategorie, 
    hoursInThisWeek, categorieHoursInThisWeek 
  } = useContext(CategorieContext)

    const formatNum = (num) => num < 10? `0${num}`: num

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

        <Card background={selectedCategorie?.color}>
          <CardTitle><CardStrong color={selectedCategorie?.color}>{formatNum(parseInt(allHoursInCategorie/60))}:{formatNum(allHoursInCategorie%60)}</CardStrong>h de {formatNum(parseInt(allHours/60))}:{formatNum(allHours%60)}h no total foram investidas na categoria <CardStrong color={selectedCategorie?.color}>{selectedCategorie?.title}</CardStrong></CardTitle>
        </Card>

        <Card background={selectedCategorie?.color}>
          <CardTitle><CardStrong color={selectedCategorie?.color}>{formatNum(parseInt(categorieHoursInThisWeek/60))}:{formatNum(categorieHoursInThisWeek%60)}</CardStrong>h de {formatNum(parseInt(hoursInThisWeek/60))}:{formatNum(hoursInThisWeek%60)}h dessa semana foram investidas na categoria <CardStrong color={selectedCategorie?.color}>{selectedCategorie?.title}</CardStrong></CardTitle>
        </Card>

    </Container>  
  )
}