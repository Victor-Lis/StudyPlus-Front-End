import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, TitleStrong, Options, loadingInput, InputComplete, EditIcon, DeleteIcon, Content, ContentDescription, TimeRow, TimeBox, TimePin, Time, TimeText, TimeFlag } from './styles'

import { IndexContext } from '../../../Contexts'

export default function Task({ tarefa, selectedDay }) {

  const { completeTask, deleteTask } = useContext(IndexContext)

  async function handleCompleteTask() {

    let data = await completeTask(tarefa.id, !tarefa.completed)

    if (data) {
      selectedDay.tarefas.map((task) => {
        if (task.id == tarefa.id) {
          task.completed = data.completed
        }
      })
    }

  }

  async function handleDeleteTask() {

    let data = await deleteTask(tarefa.id)

  }

  return (
    <Container border={`2.5px solid ${tarefa.Categorie.color}`}>
      <Header>
        <Title> {tarefa.title} </Title>
        <Options>
          <InputComplete type="checkbox" defaultChecked={tarefa.completed} onClick={handleCompleteTask} />
          <EditIcon />
          <DeleteIcon onClick={handleDeleteTask} />
        </Options>
      </Header>
      <Content>
        <ContentDescription> {tarefa.desc} </ContentDescription>
      </Content>
      <TimeRow>
        <TimeBox>
          <TimePin />
          <TimeText> {tarefa.primeira_hora} </TimeText>
        </TimeBox>
        <TimeBox>
          <TimeFlag />
          <TimeText> {tarefa.ultima_hora} </TimeText>
        </TimeBox>
      </TimeRow>
    </Container>
  )
}
