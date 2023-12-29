import React, { useState, useEffect, useContext } from 'react'
import { Container } from './styles'

import { IndexContext } from '../../Contexts'

import WeekContainer from '../../Layout/WeekContainer'
import TasksContainer from './TasksContainer'
import CategoriesContainer from './CategoriesContainer'

export default function Tasks() {

  const { weeks, loading, selectedDay, setSelectedDay } = useContext(IndexContext)

  return (
    <Container> 

      <WeekContainer all={true} />
      <TasksContainer />
      <CategoriesContainer />

    </Container>
  )
}
