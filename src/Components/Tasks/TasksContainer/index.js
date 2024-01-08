import React, { useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Tasks } from './styles'

import { IndexContext } from '../../../Contexts'
import { TaskContext } from '../../../Contexts/tasks'

import TaskCreate from '../TaskCreate'
import Task from '../Task'

export default function TasksContainer() {

  const { selectedDay, } = useContext(IndexContext)
  const { creatingTask, setCreatingTask, updatingTask, setUpdatingTask } = useContext(TaskContext)

  function handleCloseCreatingAndEditing() {

    setUpdatingTask()
    setCreatingTask(!creatingTask)

  }

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon />
          <Title> Tarefas </Title>
        </TitleBox>
        <ButtonCreate onClick={() => handleCloseCreatingAndEditing()}>
          <ButtonCreateText>{!!creatingTask && !!updatingTask ? 'Editando' : !!creatingTask && !updatingTask ? 'Criando' : 'Criar'}</ButtonCreateText>
          <ButtonCreateIcon />
        </ButtonCreate>
      </TitleRow>

      {creatingTask && <TaskCreate />}

      <Tasks>
        {(!!selectedDay && !!selectedDay.tarefas.length) && selectedDay.tarefas.map((tarefa, index) => {
          return <Task key={tarefa.id} tarefa={(tarefa) && tarefa} index={index} />
        })}
      </Tasks>

    </Container>
  )
}
