import React, { useContext } from 'react'
import { Container, Header, Title, Options, InputComplete, EditIcon, DeleteIcon, Content, ContentDescription, TimeRow, TimeBox, TimePin, TimeText, TimeFlag } from './styles'

import { IndexContext } from '../../../Contexts'

export default function Task({ tarefa, index }) {

  const { 
    completeTask, deleteTask, 
    setUpdatingTask,
    creatingTask, setCreatingTask
  } = useContext(IndexContext)

  async function handleCompleteTask() {

    await completeTask(tarefa.id, !tarefa.completed, index)

  }

  async function handleEditing(){

    if(creatingTask){
      setCreatingTask(false)
      setUpdatingTask()
    }else{
      setCreatingTask(true)
      tarefa["index"] = index
      setUpdatingTask(tarefa)
    }

  }

  async function handleDeleteTask() {

    await deleteTask(tarefa.id, index)

  }

  return (
    <Container border={!!tarefa.Categorie? `2.5px solid ${tarefa.Categorie.color}`: `2.5px solid transparent` }>
      <Header>
        <Title> {tarefa.title} </Title>
        <Options>
          <InputComplete type="checkbox" defaultChecked={tarefa.completed} onClick={handleCompleteTask} />
          <EditIcon onClick={handleEditing}/>
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
