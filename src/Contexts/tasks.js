import React, { useState, useEffect, createContext, useContext} from 'react'

const TaskContext = createContext({})

export default function TasksProvider({children}) {
  return (
    <TaskContext.Provider value={ null }>
        {children}
    </TaskContext.Provider>
  )
}
