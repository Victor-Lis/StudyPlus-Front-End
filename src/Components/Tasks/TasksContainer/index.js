import React, { useState, useEffect, useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Tasks } from './styles'

import { IndexContext } from '../../../Contexts'

import TaskCreate from '../TaskCreate'
import Task from '../Task'

export default function TasksContainer({ selectedDay, creating, setCreating }) {

  const { loading } = useContext(IndexContext)

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon/>
          <Title> Tarefas </Title>
        </TitleBox>
        <ButtonCreate onClick={() => setCreating(!creating)}>
          <ButtonCreateText>Criar</ButtonCreateText>
          <ButtonCreateIcon />
        </ButtonCreate>
      </TitleRow>

      {creating && <TaskCreate selectedDay={selectedDay}/>}

      <Tasks>
        {(selectedDay && !loading) &&
          selectedDay.tarefas.map((tarefa => {
            return <Task key={tarefa.id} tarefa={tarefa} selectedDay={selectedDay}/>
          }))
        }
      </Tasks>

    </Container>
  )
}
