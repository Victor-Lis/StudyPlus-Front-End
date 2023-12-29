import React, {useState, useEffect, useContext} from 'react'
import { Container } from './styles'

import { IndexContext } from '../../Contexts'

import WeekContainer from '../../Layout/WeekContainer'
import TasksContainer from './TasksContainer'
import CategoriesContainer from './CategoriesContainer'

export default function Tasks() {

  const [selectedDay, setSelectedDay] = useState()
  const [creating, setCreating] = useState(false)
  const { weeks, loading } = useContext(IndexContext)

  function selectDay(day){
    if(day){
      setSelectedDay(day)
    }
  }

  return (
    <Container>

      {!loading && (
        <>
          {selectDay && <WeekContainer selectedDay={selectedDay} selectDay={selectDay} setCreating={setCreating}/>}
          <TasksContainer selectedDay={selectedDay} creating={creating} setCreating={setCreating}/>
        </>
      )}
      <CategoriesContainer/>

    </Container>
  )
}
