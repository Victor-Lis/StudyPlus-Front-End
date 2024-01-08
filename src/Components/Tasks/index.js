import React from 'react'
import { Container } from './styles'

import CategorieProvider from '../../Contexts/categories'
import TaskProvider from '../../Contexts/tasks'

import WeekContainer from '../../Layout/WeekContainer'
import TasksContainer from './TasksContainer'
import CategoriesContainer from './CategoriesContainer'

export default function Tasks() {

  return (
    <Container>

      <WeekContainer all={true} />

      <CategorieProvider>

        <TaskProvider>

          <TasksContainer />

        </TaskProvider>
        <CategoriesContainer />

      </CategorieProvider>

    </Container>
  )
}
