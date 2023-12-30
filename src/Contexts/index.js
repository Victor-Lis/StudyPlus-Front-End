import React, {useState, useEffect, createContext} from 'react'
import api from '../Connections/axios'

export const IndexContext = createContext({})

export default function IndexProvider({children}){
    
    const [weeks, setWeeks] = useState([])
    const [tasks, setTasks] = useState([])
    const [categories, setCategories] = useState([])
    
    const [creatingTask, setCreatingTask] = useState(false)
    const [updatingTask, setUpdatingTask] = useState()

    const [creatingCategorie, setCreatingCategorie] = useState(false)
    const [updatingCategorie, setUpdatingCategorie] = useState()

    const [selectedDay, setSelectedDay] = useState()
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

    async function updateTask(){

        setLoading(true)
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
            console.log(selectedDay.tarefas)
            setUpdatingTask()
            setCreatingTask(false)
            getWeeks()
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setUpdatingTask()
            setCreatingTask(false)
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

    async function createCategorie(title, color){

        setLoading(true)
        await api.post("/categorie/create", {
            title,
            color,
        }).then(async res => {
            setCategories(categories => [...categories, res.data])
            setCreatingCategorie(false)
            getWeeks()
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setCreatingCategorie(false)
            setLoading(false)
        })

    }

    async function updateCategorie(){

        setLoading(true)
        await api.post("/categorie/update", {
            id: updatingCategorie.id,
            title: updatingCategorie.title,
            color: updatingCategorie.color
        })
        .then(async res => {
            categories.splice(updatingCategorie.index, 1, res.data)
            setUpdatingCategorie()
            setCreatingCategorie(false)
            getWeeks()
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
            setUpdatingCategorie()
            setCreatingCategorie(false)
            setLoading(false)
        })

    }

    async function deleteCategorie(id, index){

        setLoading(true)
        await api.post("/categorie/delete", {
            id,
        })
        .then(async res => {
            let newCategories = categories
            newCategories.splice(index, 1)
            setCategories(newCategories)
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
            weeks, categories, loading, tasks, selectedDay, creatingTask, updatingTask, creatingCategorie, updatingCategorie,
            createTask, completeTask, deleteTask, setCreatingTask, setSelectedDay, setUpdatingTask, updateTask, setCreatingCategorie, setUpdatingCategorie, createCategorie, deleteCategorie, updateCategorie
        }}>

            {children}

        </IndexContext.Provider>

    )
}
