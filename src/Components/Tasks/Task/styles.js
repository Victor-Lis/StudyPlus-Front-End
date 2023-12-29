import { styled, keyframes } from 'styled-components'
import { FiEdit, FiTrash2, FiMapPin, FiFlag } from 'react-icons/fi'

export const Container = styled.div`

    margin-top: 2%;
    
    padding: 2% 3%;
    background-color: #222222;

    min-width: 250px;
    width: 35%;

    border-radius: 10px;

    border: ${props => props.border ? props.border : '2.5px solid transparent'};

`

export const Header = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;

`

export const Title = styled.h1`

    text-align: center;
    font-size: 1.35rem;

    color: #fff;
    margin: 5px auto;

    /* width: 70%; */
    /* min-width: 250px; */

`

export const TitleStrong = styled.strong`
    color: #3EBDFF;
`

export const Options = styled.div`

    min-width: 55px;
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin: 5px auto;

    column-gap: 5px;

`

export const InputComplete = styled.input`

    accent-color: #00BD22;

    width: 22px;
    height: 22px;
    margin-right: 2.5px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }   

`

export const spinning = keyframes`

    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`

export const loadingInput = styled.div`

    border: 2px solid #00BD22;
    border-bottom: 2px solid #fff;

    width: 22px;
    height: 22px;

    animation: ${spinning} 2s infinite linear;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }   

`

export const EditIcon = styled(FiEdit)`

    color: #3EBDFF;

    width: 25px;
    height: 25px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }   

`

export const DeleteIcon = styled(FiTrash2)`

    color: rgb(175,0,0);

    width: 25px;
    height: 25px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }

`

export const Content = styled.div`

    width: 100%;
    margin-top: 15px;

`

export const ContentDescription = styled.p`

    width: 100%;
    color: #fff;
    text-align: center;

`

export const TimeRow = styled.div`

    display: flex;

    justify-content: space-around;
    align-items: center;

    margin-top: 6%;
`

export const TimeBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TimeText = styled.p`
    color: #fff;
    margin-left: 5px;
`

export const TimePin = styled(FiMapPin)`
    width: 20px;
    height: 20px;

    color: #55ff55;
`

export const TimeFlag = styled(FiFlag)`
    width: 20px;
    height: 20px;

    color: #ff3355;
`