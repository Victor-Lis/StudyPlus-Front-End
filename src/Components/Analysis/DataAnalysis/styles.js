import styled from 'styled-components'

export const Container = styled.div`

    flex: 1;
    min-width: 300px;
    padding: 0% 2.5%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-wrap: wrap;

`

export const Card = styled.div`

    background-color: rgba(62, 189, 255, 0.05);
    border: 2px solid #3EBDFF;
    padding: 2% 3%;
    margin: 3% 2.5%;

    min-width: 90%;

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