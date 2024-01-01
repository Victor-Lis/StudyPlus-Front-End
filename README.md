# Study+ Front End

[Study+ BackEnd](https://github.com/Victor-Lis/StudyPlus-Back-End)

Esse é um projeto que ainda tenho muitos planos, essa ainda é a versão 1, mas já tenho em mente features futuras. Falando dele em si, eu já tinha esse projeto em mente há alguns meses, conversava bastante sobre a ideia com o [@Vinicius-Buava](https://github.com/Vinicius-B-Leite), além de já ter feito uma "versão anterior" desse projeto, mas ele estava bem simples e foi um dos meus primeiros projetos em Node, então existiam muitas melhoras a serem feitas.

O projeto consiste em um sistema para ajudar a organizar seu tempo disposto em atividades mais focadas como estudo, sendo possível inclusive programar tarefas futuras(dentro do prazo de uma semana) para ajudar na organização. 

É possível criar as próprias "categorias", que serão atribuidas as atividades.
## Desafios

- Requisições HTTP vindas da API do projeto;
- Telas dinâmicas em relação aos dados;
- Delay mínimo ao manipular dados;
- Visual Responsivo.
## Aprendizados

Por final aprendi algumas coisas interessantes como: 
## Na prática

### Axios 
Nesse projeto irei utilizar o Axios ao invés do tão comum fetch(), que já usei bastante em outros projetos. O Axios será o responsável por requisições HTTP. 
```js
import axios from "axios";

const api = axios.create({

    baseURL: 'http://localhost:4000'

})

export default api;
```

### useContext
Criação do "IndexContext" e algumas funções para manipular o Banco que serão uteis em outras telas. O useContext() é o responsável por repassar os dados vindos e manipulados pelo Axios.
```js
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

    async function getWeeks(){...}

    async function getTasks(){...}

    async function getCategories(){...}

    async function createTask(title, desc, primeira_hora, ultima_hora, categorie){...}

    async function updateTask(){...}

    async function completeTask(id, completed, index){...}

    async function deleteTask(id, index){...}

    async function createCategorie(title, color){...}

    async function updateCategorie(){...}

    async function deleteCategorie(id, index){...}

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

```

### React-Router-DOM
O React-Router-DOM é o responsável pela sistema de navegações do projeto.
```js
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from '../Layout/Navbar';

import Home from '../Components/Home';
import Tasks from '../Components/Tasks';

export default function Router() {
  return (
    <BrowserRouter>

      <Navbar/>
    
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>

      </Routes>

    </BrowserRouter>
  )
}

```


### Um componente que merece destaque é o "WeekContainer"
Está no "layout" pois será utilizado em mais de uma tela. Esse componente tem uma característica muito bacana, ele pode ser alterado a partir da props "all", que pode ser "true" ou "false", sendo assim ela é booleana.

Se a prop "all" for "false", ele apenas colocará um borda branca no entorno do dia atual.

Se a prop "all" for "true", ele permitirá a opção de selecionar um dia, deixando-o com as cores invertidas e ativando a propriedade :hover ao passar o mouse sobre um dia.

Essa possibilidade de alteração de estilo através de uma prop se torna muito fácil graças a utilização de um biblioteca que tenho muito carinho, a biblioteca "styled-components".
#### src/Layout/WeekContainer/index
```js
import React, { useState, useContext, useEffect } from 'react'
import { Container, Title, TitleStrong, Days } from './styles.js'

import { IndexContext } from '../../Contexts/index.js'
import Day from './Day/index.js'

export default function WeekContainer({setCreating, all}) {

  const { weeks } = useContext(IndexContext)

  function formatNum(num){...}

  return (
    <Container>
        <Title> Semana {!!weeks.length && weeks[0].id} - <TitleStrong>{!!weeks.length && `${formatNum(Math.floor(weeks[0].hours/60))}:${formatNum((weeks[0].hours%60))}h`}</TitleStrong> </Title>
        <Days>
        {!!weeks.length && !!weeks[0].days && weeks[0].days.map((day) => {
            return <Day key={day.id} day={day} setCreating={setCreating} all={all}/>
        })}
        </Days>
    </Container>
  )
}
```

#### src/Layout/WeekContainer/Day/index
```js
import React, { useState, useEffect, useContext } from 'react'
import { Container, ContainerName, ContainerDate, ContainerHours } from './styles.js'

import { IndexContext } from '../../../Contexts/index.js'

export default function Day({ day, all }) {

  const { selectedDay, setSelectedDay } = useContext(IndexContext)
  const [today, setToday] = useState(new Date())

  function handleSelectDay(){...}

  function formatNum(num){...}

  function formatDate(date, objectDate){...}

  useEffect(() => {...}, [day])

  return (
    <Container
      background={(selectedDay && (day.id == selectedDay.id) && all) ? "#fff" : undefined}
      border={(formatDate(today, true) == formatDate(day.date, false)) ? '#fff' : undefined} 
      onClick={() => handleSelectDay()}
      hover={(selectedDay && setSelectedDay && all)}
    >
      <ContainerName color={(selectedDay && (day.id == selectedDay.id) && all) ? "#222222" : undefined}>{day.name}</ContainerName>
      <ContainerHours>{`${formatNum(Math.floor(day.hours/60))}:${formatNum((day.hours%60))}h`}</ContainerHours>
      <ContainerDate color={(selectedDay && (day.id == selectedDay.id) && all) ? "#222222" : undefined}>{new Date(day.date).getDate()}/{new Date(day.date).getMonth() + 1}/{new Date(day.date).getFullYear()}</ContainerDate>
    </Container>
  )
}
```
### Screenshots

#### Home 
![HomeScreen - 1](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Home%20-%201.png)

![HomeScreen - 2](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Home%20-%202.png)

#### Tarefas
Selecionando dia
![TarefasScreen - 1](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Tarefas%20-%201.png)

Visualizando categorias
![TarefasScreen - 2](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Tarefas%20-%202.png)

![Criando Tarefa](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Tarefas%20-%20Criando%20Tarefa.png)

![Editando Tarefa](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Tarefas%20-%20Editando%20Tarefa.png)

![Criando Categoria](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Tarefas%20-%20Criando%20Categoria.png)

![Editando Categoria](https://github.com/Victor-Lis/StudyPlus-Front-End/blob/master/src/ProjectImages/Tarefas%20-%20Editando%20Categoria.png)

## Restante do projeto
[Study+ BackEnd](https://github.com/Victor-Lis/StudyPlus-Back-End)

## Instalação do Projeto
```cmd
git clone https://github.com/Victor-Lis/StudyPlus-Front-End & git clone https://github.com/Victor-Lis/StudyPlus-Back-End
```

## Inicialização 
No endereço do repositório do Front-End
```cmd
npm start
```

No endereço do repositório do Back-End
```cmd
npm run dev
```

## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
