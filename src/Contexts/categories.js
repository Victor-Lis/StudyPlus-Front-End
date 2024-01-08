import React, { useState, useEffect, createContext, useContext } from 'react'
import api from '../Connections/axios'

import { IndexContext } from './'
export const CategorieContext = createContext({})

export default function IndexProvider({ children }) {

    const { categories, weeks } = useContext(IndexContext)
    const [allTasks, setAllTasks] = useState()
    const [tasksWithCategorieInThisWeek, setTasksWithCategorieInThisWeek] = useState()
    const [allTasksInThisWeek, setAllTasksInThisWeek] = useState()

    const [selectedCategorie, setSelectedCategorie] = useState()
    const [percentage, setPercentage] = useState(0)
    const [categorieTasksCount, setCategorieTasksCount] = useState(0)

    const [hoursInThisWeek, setHoursInThisWeek] = useState()

    function handleSetSelectedCategorie(categorie) {
        setSelectedCategorie(categorie)

        let allTasksCount = allTasks.length
        let specificCount = allTasks.filter((task) => task.categorie == categorie.id)

        let percentage = (specificCount.length / allTasksCount) * 100;
        setPercentage(percentage)
        setCategorieTasksCount(specificCount.length)

        let weekFirstDay = weeks[0]?.days[0]
        let weekLastDay = weeks[0]?.days[6]
        let tasksWithCategorieInThisWeek = specificCount.filter((task) => task.day >= weekFirstDay && task.day <= weekLastDay)
        setTasksWithCategorieInThisWeek(tasksWithCategorieInThisWeek.length)
        let tasksInThisWeek = allTasks.filter((task) => task.day >= weekFirstDay && task.day <= weekLastDay).length
        setAllTasksInThisWeek(tasksInThisWeek)
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

        <CategorieContext.Provider value={{ selectedCategorie, handleSetSelectedCategorie, percentage, allTasks, categorieTasksCount, tasksWithCategorieInThisWeek, allTasksInThisWeek }}>

            {children}

        </CategorieContext.Provider>

    )
}
