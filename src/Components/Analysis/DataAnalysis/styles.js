import styled from 'styled-components'

export const Container = styled.div`

    flex: 1;
    padding: 0% 2.5%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

`

export const Card = styled.div`

    background-color: rgba(70,10,220, 0.05);
    border: 2px solid rgb(70,10,220);
    padding: 2% 3%;
    margin: 0.5% 2%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

`

export const CardTitle = styled.h2`

    color: #fff;

`

export const CardStrong = styled.strong`

    color: ${props => props.color};

`