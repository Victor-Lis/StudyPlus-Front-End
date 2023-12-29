import React, {useState, useEffect, createContext} from 'react'
import api from '../Connections/axios'

export const IndexContext = createContext({})

export default function IndexProvider({children}){
    
    const [weeks, setWeeks] = useState()
    const [categories, setCategories] = useState()
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

    async function getCategories(){
        api.get("/categorie")
        .then(res => {
            setCategories(res.data)
        })
        .catch(e => console.log(e))
    }

    async function createTask(title, desc, primeira_hora, ultima_hora, categorie, day){
        setLoading(true)
        let data;
        
        await api.post("/task/create", {
            title,
            desc,
            primeira_hora,
            ultima_hora,
            categorie,
            day,
        }).then(res => {
            data = res.data
        })
        .catch(e => {
            console.log(e)
        })

        await getWeeks()

        if(data){
            console.log(data)
            setLoading(false)
            // return data
        }

    }

    async function completeTask(id, completed){
        let data;

        await api.post("/task/completed", {
            id,
            completed
        })
        .then(res => {
            data = res.data
        })
        .catch(e => {
            console.log(e)
        })

        let week = await getWeeks()

        if(data){
            return data
        }
    }

    async function deleteTask(id){
        setLoading(true)
        let data;

        await api.post("/task/delete", {
            id,
        })
        .then(res => {
            data = res.data
        })
        .catch(e => {
            console.log(e)
        })

        await getWeeks()
        
        if(data){
            setLoading(false)
            return data
        }
    }

    useEffect(() => {
        getWeeks()
        getCategories()
    }, [])

    return(

        <IndexContext.Provider value={{ weeks, categories, createTask, completeTask, deleteTask, loading }}>

            {children}

        </IndexContext.Provider>

    )
}
