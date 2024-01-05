import React from 'react'
import { Container } from './styles'

import WeekContainer from '../../Layout/WeekContainer'
import TasksContainer from './TasksContainer'
import CategoriesContainer from './CategoriesContainer'

export default function Tasks() {

  return (
    <Container> 

      <WeekContainer all={true} />
      <TasksContainer />
      <CategoriesContainer />

    </Container>
  )
}
