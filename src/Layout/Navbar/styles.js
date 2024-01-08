import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

export const Header = styled.header`

    position: sticky;
    top: 5px;
    /* background-color: #282828; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5% 3%;

    z-index: 1;

`

export const Bot = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    font-weight: bold;

`

export const BotImg = styled.img`

    width: 60px;

`

export const BotText = styled.p`

    margin: 2.5px 5px 0 0;
    min-width: 180px;
    width: 45%;

`

export const Nav = styled.nav`

    display: flex;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
    column-gap: 7.5%;
    
`

export const NavLink = styled(Link)`

    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;

`

export const NavMenu = styled(FiMenu)`

    cursor: pointer;
    min-width: 35px;

`

export const NavX = styled(FiX)`

    cursor: pointer;
    min-width: 35px;

`