import styled from 'styled-components'
import { FiPlus, FiClipboard } from 'react-icons/fi'

export const Container = styled.div`

    width: 95%;
    padding: 0% 2.5% 2.5% 2.5%;

`

export const TitleRow = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2.5% 0 0% 0;

`

export const TitleBox = styled.div`

    display: flex;

    justify-content: center;
    align-items: center;

`

export const Title = styled.h1`
    color: #fff;
`

export const TitleIcon = styled(FiClipboard)`

    color: #fff;

    width: 30px;
    height: 30px;

    margin: 3.5px 5px 0 0;

`

export const TitleStrong = styled.strong`
    color: #3EBDFF;
`

export const ButtonCreate = styled.div`

    padding: 6.5px 10px;

    background: #3EBDFF;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }   

`

export const ButtonCreateText = styled.p`
    color: #fff;
`

export const ButtonCreateIcon = styled(FiPlus)`

    color: #fff;    

    width: 25px;
    height: 25px;

`


export const Tasks = styled.div`

    width: 90%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */

`