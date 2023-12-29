import React, { useState, useEffect, useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Tasks } from './styles'

import { IndexContext } from '../../../Contexts'

import TaskCreate from '../TaskCreate'
import Task from '../Task'

export default function TasksContainer() {

  const { loading, selectedDay, creatingTask, setCreatingTask, tasks } = useContext(IndexContext)

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon />
          <Title> Tarefas </Title>
        </TitleBox>
        <ButtonCreate onClick={() => setCreatingTask(!creatingTask)}>
          <ButtonCreateText> {creatingTask ? 'Criando' : 'Criar'}</ButtonCreateText>
          <ButtonCreateIcon />
        </ButtonCreate>
      </TitleRow>

      {creatingTask && <TaskCreate />}

      <Tasks>
        {(!!selectedDay && !!selectedDay.tarefas.length) && selectedDay.tarefas.map((tarefa, index) => {
          return <Task key={tarefa.id} tarefa={(tarefa) && tarefa} index={index}/>
        })} 
      </Tasks>

    </Container>
  )
}
