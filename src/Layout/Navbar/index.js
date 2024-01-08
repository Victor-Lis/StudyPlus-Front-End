import React, { useState } from 'react'
import Bot1 from '../../Images/Bot1.png'
import { Header, Bot, BotImg, BotText, Nav, NavLink, NavMenu, NavX } from './styles.js'

export default function Navbar({page}) {
    
    const [open, setOpen] = useState(false)

  return (
    <Header>

        <Bot>

            <BotImg alt='Assistente' src={Bot1}/>
            {!open && <BotText> Bem vindo ao seu Assistente Pessoal! </BotText>}

        </Bot>

        <Nav>

            {open && (

                <>
                
                    <NavLink to="/" onClick={() => setOpen(!open)}> Home </NavLink>
                    <NavLink to="/tasks" onClick={() => setOpen(!open)}> Tarefas </NavLink>
                    <NavLink to="/analysis" onClick={() => setOpen(!open)}> Análise </NavLink>

                </>

            )}
            {open? <NavX color='#fff' size={"7.5%"} onClick={() => setOpen(!open)}/>: <NavMenu color='#fff' size={"10%"} onClick={() => setOpen(!open)}/>}

        </Nav>

    </Header>
  )
}
