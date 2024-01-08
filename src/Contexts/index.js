import React, {useState, useEffect, createContext} from 'react'
import api from '../Connections/axios'

export const IndexContext = createContext({})

export default function IndexProvider({children}){
    
    const [weeks, setWeeks] = useState([])

    const [selectedDay, setSelectedDay] = useState()

    async function getWeeks(){
        api.get("/week")
        .then(res => {
            setWeeks(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getWeeks()
    }, [])

    return(

        <IndexContext.Provider value={{ 
            weeks, selectedDay, 
            getWeeks, setSelectedDay
        }}>

            {children}

        </IndexContext.Provider>

    )
}
