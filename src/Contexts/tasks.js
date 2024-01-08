import React, { useState, useEffect, createContext, useContext} from 'react'
import api from '../Connections/axios'

import { IndexContext } from './'
export const TaskContext = createContext({})

export default function TaskProvider({children}) {

    const { getWeeks, selectedDay, setSelectedDay } = useContext(IndexContext)
    const [tasks, setTasks] = useState([])
    
    const [creatingTask, setCreatingTask] = useState(false)
    const [updatingTask, setUpdatingTask] = useState()

    async function getTasks(){
        api.get("/task")
        .then(res => {
            setTasks(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    async function createTask(title, desc, primeira_hora, ultima_hora, categorie){

        await api.post("/task/create", {
            title,
            desc,
            primeira_hora,
            ultima_hora,
            categorie,
            day: selectedDay.id,
        }).then(async res => {
            selectedDay.tarefas.push(res.data)
            setCreatingTask(false)
            getWeeks()
        })
        .catch(e => {
            console.log(e)
        })

    }

    async function updateTask(){

        await api.post("/task/update", {
            id: updatingTask.id,
            title: updatingTask.title,
            desc: updatingTask.desc,
            primeira_hora: updatingTask.primeira_hora,
            ultima_hora: updatingTask.ultima_hora,
            categorie: updatingTask.categorie,
        })
        .then(async res => {
            selectedDay.tarefas.splice(updatingTask.index, 1, res.data)
            setUpdatingTask()
            setCreatingTask(false)
            getWeeks()
        })
        .catch(e => {
            console.log(e)
            setUpdatingTask()
            setCreatingTask(false)
        })

    }

    async function completeTask(id, completed, index){

        await api.post("/task/completed", {
            id,
            completed
        })
        .then(async res => {
            selectedDay.tarefas.splice(index, 1, res.data)
            getWeeks()
        })
        .catch(e => {
            console.log(e)
        })

    }

    async function deleteTask(id, index){

        await api.post("/task/delete", {
            id,
        })
        .then(async res => {
            selectedDay.tarefas.splice(index, 1)
            getWeeks()
        })
        .catch(e => {
            console.log(e)
        })

    }

  return (
    <TaskContext.Provider value={{ 
        tasks, selectedDay, creatingTask, updatingTask,
        createTask, completeTask, deleteTask, setCreatingTask, setSelectedDay, setUpdatingTask, updateTask,
    }}>
        {children}
    </TaskContext.Provider>
  )
}
