import React, { useState, useEffect, createContext, useContext } from 'react'
import api from '../Connections/axios'

import { IndexContext } from './'
export const CategorieContext = createContext({})

export default function IndexProvider({ children }) {

    const { categories, weeks } = useContext(IndexContext)
    const [allTasks, setAllTasks] = useState()
    const [tasksWithCategorieInThisWeek, setTasksWithCategorieInThisWeek] = useState()
    const [allTasksInThisWeek, setAllTasksInThisWeek] = useState()

    const [allHours, setAllHours] = useState()
    const [allHoursInCategorie, setAllHoursInCategorie] = useState()

    const [hoursInThisWeekInCategorie, setHoursInThisWeekInCategorie] = useState()
    const [hoursInThisWeek, setHoursInThisWeek] = useState()
    
    const [selectedCategorie, setSelectedCategorie] = useState()
    const [percentage, setPercentage] = useState(0)
    const [categorieTasksCount, setCategorieTasksCount] = useState(0)


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

        let allTasksCompleted = allTasks.filter((task) => task.completed)
        console.log(allTasksCompleted)
        let allTasksHours = 0;
        allTasksCompleted?.map((task) => {
            allTasksHours+=task.hours
        })
        setAllHours(parseInt(allTasksHours/60))

        let categorieTasksCompleted = allTasks.filter((task) => task.completed && task.categorie == categorie.id)
        let categorieTasksHours = 0;
        categorieTasksCompleted?.map((task) => {
            categorieTasksHours+=task.hours
        })
        setAllHoursInCategorie(parseInt(categorieTasksHours/60))

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

        <CategorieContext.Provider value={{ selectedCategorie, handleSetSelectedCategorie, percentage, allTasks, 
        categorieTasksCount, tasksWithCategorieInThisWeek, allTasksInThisWeek, allHours, allHoursInCategorie }}>

            {children}

        </CategorieContext.Provider>

    )
}
