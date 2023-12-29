import React, { useState, useEffect } from 'react'
import { Container, ContainerName, ContainerDate, ContainerHours } from './styles.js'

export default function Day({ day, selectedDay, selectDay, setCreating }) {

  const [today, setToday] = useState(new Date())

  function handleSelectDay() {
    if (selectDay) {
      selectDay(day)
      setCreating(false)
    }
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

    if(day && selectDay && !selectedDay){
      if(formatDate(today, true) == formatDate(day.date, false)){
        selectDay(day)
        setCreating(false)
      }
    }

  }, [day])

  return (
    <Container
      background={(selectedDay && (day.id == selectedDay.id)) ? "#fff" : undefined}
      border={(formatDate(today, true) == formatDate(day.date, false)) ? '#fff' : undefined} 
      onClick={() => handleSelectDay()}
      hover={(selectedDay && selectDay)}
    >
      <ContainerName color={(selectedDay && (day.id == selectedDay.id)) ? "#222222" : undefined}>{day.name}</ContainerName>
      <ContainerHours>{`${formatNum(Math.floor(day.hours/60))}:${formatNum((day.hours%60))}h`}</ContainerHours>
      <ContainerDate color={(selectedDay && (day.id == selectedDay.id)) ? "#222222" : undefined}>{new Date(day.date).getDate()}/{new Date(day.date).getMonth() + 1}/{new Date(day.date).getFullYear()}</ContainerDate>
    </Container>
  )
}
