import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 0% 2.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Categorie = styled.h1`
    background: ${props => props.background};
    color: #fff;
    box-shadow: ${props => props.selected? "0px 0px 0px 3px #202020, 0px 0px 0px 5px #FFF": `0px 0px 0px 3px ${props.background}`};
    border-radius: ${props => props.background? "0px": "10px"};

    padding: 1.5% 2%;
    margin: 4.5% 3%;

    text-align: center;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`