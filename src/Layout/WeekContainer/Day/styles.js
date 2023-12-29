import styled from 'styled-components'

export const Container = styled.div`

    // width: 30%;
    min-height: 150px;
    background-color: ${props => props.background? props.background: '#222222'}; 
    padding: 1.5%;
    margin: 1% .5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;

    border: ${props => props.border? '0.5px solid #fff': '0.5px solid transparent'};

    ${props => props.hover? '&:hover{ cursor: pointer; opacity: 0.80 }': ''}

`

export const ContainerName = styled.h2`
    text-align: center;
    color: ${props => props.color? props.color: '#fff'}; 
`

export const ContainerHours = styled.h3`
    color: #3EBDFF;
`

export const ContainerDate = styled.h3`
    color: ${props => props.color? props.color: '#fff'}; 
    margin: 0% 0% 2.5% 0%;
`
