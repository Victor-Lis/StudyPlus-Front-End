import React, { useState, useEffect, createContext, useContext } from 'react'
import api from '../Connections/axios'

import { IndexContext } from './'
export const CategorieContext = createContext({})

export default function IndexProvider({ children }) {

    const { categories } = useContext(IndexContext)
    const [allTasks, setAllTasks] = useState()
    
    const [selectedCategorie, setSelectedCategorie] = useState()
    const [percentage, setPercentage] = useState(0)
    const [categorieTasksCount, setCategorieTasksCount] = useState(0)

    function handleSetSelectedCategorie(categorie) {
        setSelectedCategorie(categorie)

        let allTasksCount = allTasks.length
        let specificCount = allTasks.filter((task) => task.categorie == categorie.id).length

        let percentage = (specificCount / allTasksCount) * 100;
        setPercentage(percentage)
        setCategorieTasksCount(specificCount)
    }

    async function getAllTasks() {
        await api.get("/task")
            .then((res) => {
                setAllTasks(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    useEffect(() => {
        if (categories.length > 0) {
            console.log(categories)
            handleSetSelectedCategorie(categories[0])
        }
    }, [categories])

    return (

        <CategorieContext.Provider value={{ selectedCategorie, handleSetSelectedCategorie, percentage, allTasks, categorieTasksCount }}>

            {children}

        </CategorieContext.Provider>

    )
}
