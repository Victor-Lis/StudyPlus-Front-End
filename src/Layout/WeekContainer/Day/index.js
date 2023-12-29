import React, { useState, useEffect, useContext } from 'react'
import { Container, ContainerName, ContainerDate, ContainerHours } from './styles.js'

import { IndexContext } from '../../../Contexts/index.js'

export default function Day({ day, all }) {

  const { selectedDay, setSelectedDay } = useContext(IndexContext)
  const [today, setToday] = useState(new Date())

  function handleSelectDay() {
      setSelectedDay(day)
  }

  function formatNum(num){
    if(num < 10){
      return "0"+num
    }else{
      return num
    }
  }

  function formatDate(date, objectDate){
    if(objectDate){
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }else{
      return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
    }
  }

  useEffect(() => {

    if(day && setSelectedDay && !selectedDay){
      if(formatDate(today, true) == formatDate(day.date, false)){
        setSelectedDay(day)
      }
    }

  }, [day])

  return (
    <Container
      background={(selectedDay && (day.id == selectedDay.id) && all) ? "#fff" : undefined}
      border={(formatDate(today, true) == formatDate(day.date, false)) ? '#fff' : undefined} 
      onClick={() => handleSelectDay()}
      hover={(selectedDay && setSelectedDay && all)}
    >
      <ContainerName color={(selectedDay && (day.id == selectedDay.id) && all) ? "#222222" : undefined}>{day.name}</ContainerName>
      <ContainerHours>{`${formatNum(Math.floor(day.hours/60))}:${formatNum((day.hours%60))}h`}</ContainerHours>
      <ContainerDate color={(selectedDay && (day.id == selectedDay.id) && all) ? "#222222" : undefined}>{new Date(day.date).getDate()}/{new Date(day.date).getMonth() + 1}/{new Date(day.date).getFullYear()}</ContainerDate>
    </Container>
  )
}
