import React, {useState, useEffect, createContext} from 'react'
import api from '../Connections/axios'

export const IndexContext = createContext({})

export default function IndexProvider({children}){
    
    const [weeks, setWeeks] = useState([])
    const [tasks, setTasks] = useState([])
    const [categories, setCategories] = useState([])
    
    const [selectedDay, setSelectedDay] = useState()
    const [creatingTask, setCreatingTask] = useState(false)
    const [loading, setLoading] = useState(false)

    async function getWeeks(){
        setLoading(true)
        api.get("/week")
        .then(res => {
            setWeeks(res.data)
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    async function getTasks(){
        setLoading(true)
        api.get("/task")
        .then(res => {
            setTasks(res.data)
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    async function getCategories(){
        api.get("/categorie")
        .then(res => {
            setCategories(res.data)
        })
        .catch(e => console.log(e))
    }

    async function createTask(title, desc, primeira_hora, ultima_hora, categorie){

        setLoading(true)
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
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })

    }

    async function completeTask(id, completed, index){

        setLoading(true)
        await api.post("/task/completed", {
            id,
            completed
        })
        .then(async res => {
            selectedDay.tarefas.splice(index, 1, res.data)
            getWeeks()
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })

    }

    async function deleteTask(id, index){

        setLoading(true)
        await api.post("/task/delete", {
            id,
        })
        .then(async res => {
            selectedDay.tarefas.splice(index, 1)
            getWeeks()
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })

    }

    useEffect(() => {
        getWeeks()
        getTasks()
        getCategories()
    }, [])

    return(

        <IndexContext.Provider value={{ 
            weeks, categories, loading, tasks, selectedDay, creatingTask, 
            createTask, completeTask, deleteTask, setCreatingTask, setSelectedDay 
        }}>

            {children}

        </IndexContext.Provider>

    )
}
