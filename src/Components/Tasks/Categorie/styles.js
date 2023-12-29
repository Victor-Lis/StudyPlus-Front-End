import styled from 'styled-components'
import { FiEdit, FiTrash2, FiMapPin, FiFlag } from 'react-icons/fi'

export const Container = styled.div`

    margin-top: 2.5%;
    
    min-width: 170px;
    width: 35%;

    border-radius: 10px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background: #222222;

`

export const TitleBox = styled.div`

    padding: 2.5% 0;
    background-color: ${props => props.background? props.background: '#222222'};
    width: 85%;
    height: 100%;

`

export const Title = styled.h1`

    text-align: center;

    color: #fff;
    margin: 5px auto;

    /* width: 70%; */
    /* min-width: 250px; */

`

export const Options = styled.div`

    width: 15%;
    /* min-width: 55px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 6px;
    min-width: 30px;

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