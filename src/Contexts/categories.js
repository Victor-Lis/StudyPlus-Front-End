import React, { useState, useEffect, createContext, useContext } from 'react'
import api from '../Connections/axios'

import { IndexContext } from './'
export const CategorieContext = createContext({})

export default function CategorieProvider({ children }) {

    const { weeks, getWeeks } = useContext(IndexContext)
    const [allTasks, setAllTasks] = useState([])
    const [tasksWithCategorieInThisWeek, setTasksWithCategorieInThisWeek] = useState()
    const [allTasksInThisWeek, setAllTasksInThisWeek] = useState()

    const [allHours, setAllHours] = useState()
    const [allHoursInCategorie, setAllHoursInCategorie] = useState()

    const [categorieHoursInThisWeek, setCategorieHoursInThisWeek] = useState()
    const [hoursInThisWeek, setHoursInThisWeek] = useState()

    const [selectedCategorie, setSelectedCategorie] = useState()
    const [percentage, setPercentage] = useState(0)
    const [categorieTasksCount, setCategorieTasksCount] = useState(0)

    const [categories, setCategories] = useState([])
    const [creatingCategorie, setCreatingCategorie] = useState(false)
    const [updatingCategorie, setUpdatingCategorie] = useState()

    function handleSetSelectedCategorie(categorie) {
        setSelectedCategorie(categorie)

        let allTasksCount = allTasks.length
        let specificCount = allTasks.filter((task) => task.categorie === categorie.id)

        let percentage = (specificCount.length / allTasksCount) * 100;
        setPercentage(percentage)
        setCategorieTasksCount(specificCount.length)

        let weekFirstDay = weeks[0]?.days[0]
        let weekLastDay = weeks[0]?.days[6]

        let tasksWithCategorieInThisWeek = specificCount.filter((task) => (task.day >= weekFirstDay?.id && task.day <= weekLastDay.id) && (task.categorie === categorie.id) && task.completed)
        setTasksWithCategorieInThisWeek(tasksWithCategorieInThisWeek.length)

        let tasksInThisWeek = allTasks.filter((task) => (task.day >= weekFirstDay?.id && task.day <= weekLastDay.id) && task.completed)
        setAllTasksInThisWeek(tasksInThisWeek.length)

        let allTasksCompleted = allTasks.filter((task) => task.completed)
        let allTasksHours = 0;
        allTasksCompleted?.map((task) => {
            allTasksHours += task.hours
        })
        setAllHours(allTasksHours)

        let categorieTasksCompleted = allTasks.filter((task) => task.completed && task.categorie === categorie.id)
        let categorieTasksHours = 0;
        categorieTasksCompleted?.map((task) => {
            categorieTasksHours += task.hours
        })
        setAllHoursInCategorie(categorieTasksHours)

        let tasksCompletedInThisWeek = allTasks.filter((task) => task.categorie && (task.day >= weekFirstDay?.id && task.day <= weekLastDay?.id))
        let tasksCompletedInThisWeekHours = 0;
        tasksCompletedInThisWeek?.map((task) => {
            tasksCompletedInThisWeekHours += task.hours
        })
        setHoursInThisWeek(tasksCompletedInThisWeekHours)

        let categorieTasksCompletedInThisWeek = tasksCompletedInThisWeek.filter((task) => task.completed && task.categorie === categorie.id)
        let categorieTasksCompletedInThisWeekHours = 0;
        categorieTasksCompletedInThisWeek?.map((task) => {
            categorieTasksCompletedInThisWeekHours += task.hours
        })
        setCategorieHoursInThisWeek(categorieTasksCompletedInThisWeekHours)

    }

    async function getCategories() {
        api.get("/categorie")
            .then(res => {
                setCategories(res.data)
                getAllTasks()
            })
            .catch(e => console.log(e))
    }

    async function createCategorie(title, color) {

        await api.post("/categorie/create", {
            title,
            color,
        }).then(async res => {
            setCategories(categories => [...categories, res.data])
            setCreatingCategorie(false)
            getWeeks()
        })
            .catch(e => {
                console.log(e)
                setCreatingCategorie(false)
            })

    }

    async function updateCategorie() {

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
            })
            .catch(e => {
                console.log(e)
                setUpdatingCategorie()
                setCreatingCategorie(false)
            })

    }

    async function deleteCategorie(id, index){

        await api.post("/categorie/delete", {
            id,
        })
        .then(async res => {
            let newCategories = categories
            newCategories.splice(index, 1)
            setCategories(newCategories)
            getWeeks()
        })
        .catch(e => {
            console.log(e)
        })

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
        if (categories.length > 0) {
            handleSetSelectedCategorie(categories[0])
        }
    }, [allTasks])

    useEffect(() => {
        getCategories()
    }, [])

    return (

        <CategorieContext.Provider value={{
            categories,
            selectedCategorie, handleSetSelectedCategorie, 
            percentage,
            allTasks, categorieTasksCount,
            tasksWithCategorieInThisWeek, allTasksInThisWeek,
            allHours, allHoursInCategorie,
            hoursInThisWeek, categorieHoursInThisWeek,
            creatingCategorie, setCreatingCategorie,
            updatingCategorie, setUpdatingCategorie, 
            createCategorie, deleteCategorie, updateCategorie
        }}>

            {children}

        </CategorieContext.Provider>

    )
}
