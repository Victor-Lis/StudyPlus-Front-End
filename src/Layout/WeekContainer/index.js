import React, { useState, useContext, useEffect } from 'react'
import { Container, Title, TitleStrong, Days } from './styles.js'

import { IndexContext } from '../../Contexts/index.js'
import Day from './Day/index.js'

export default function WeekContainer({page, selectedDay, selectDay, setCreating}) {

  const { weeks } = useContext(IndexContext)

  function formatNum(num){
    if(num < 10){
      return "0"+num
    }else{
      return num
    }
  }

  return (
    <Container>
        <Title> Semana {!!weeks && weeks[0].id} - <TitleStrong>{!!weeks && `${formatNum(Math.floor(weeks[0].hours/60))}:${formatNum((weeks[0].hours%60))}h`}</TitleStrong> </Title>
        <Days>
        {!!weeks && !!weeks[0].days && weeks[0].days.map((day) => {
            return <Day key={day.id} day={day} selectedDay={selectedDay && selectedDay} selectDay={selectDay && selectDay} setCreating={setCreating}/>
        })}
        </Days>
    </Container>
  )
}
