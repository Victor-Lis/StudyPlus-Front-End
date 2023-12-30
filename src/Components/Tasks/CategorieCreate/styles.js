import styled from 'styled-components'
import { FiPlus, FiMapPin, FiFlag } from 'react-icons/fi'

export const Container = styled.div`

    min-width: 250px;
    width: 30%;
    margin: 5% auto;
    padding: 2% 1%;

    background: #222222;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


export const FormTitle = styled.h1`

    color: #fff;

`

export const GroupTitle = styled.h3`

    margin: 5% 0 0.5% 0;
    color: #fff;
    width: 90%;
    text-align: left;

`

export const GroupInput = styled.input`

    width: 88%;
    padding: 1.5% 1%;
    border-bottom: 0.5px solid #fff;
    background: transparent;
    color: #fff;

`

export const GroupInputColor = styled.input`

    width: 88%;
    min-height: 50px;
    padding: 1.5% 1%;
    border-bottom: 0.5px solid #fff;
    background: transparent;
    color: #fff;

`

export const Times = styled.div`

    margin-top: 6.5%;

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const TimeBox = styled.div`

    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const TimeBoxRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TimeBoxTitle = styled.h4`
    color: #fff;
`

export const TimeBoxIconPin = styled(FiMapPin)`
    width: 20px;
    height: 20px;
    color: #55ff55;
`

export const TimeBoxIconFlag = styled(FiFlag)`
    width: 20px;
    height: 20px;
    color: #ff3355;
`

export const TimeBoxInput = styled.input`

    background: transparent;
    color: #fff;

    margin-left: 7.25%;
    
    &::-webkit-calendar-picker-indicator {
        display: none;
    }

`

export const GroupSelect = styled.select`

    margin-top: .5%;
    width: 60%;
    min-width: 110px;
    
    background: transparent;
    color: #fff;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }

`

export const ButtonCreate = styled.div`

    margin: 8.5% 0 2% 0;

    padding: 5px 30px;

    background: #3EBDFF;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }   

`

export const ButtonCreateText = styled.h4`
    color: #fff;
    margin: 0 0 2.5px 0;
`

export const ButtonCreateIcon = styled(FiPlus)`

    color: #fff;    

    width: 25px;
    height: 25px;

`