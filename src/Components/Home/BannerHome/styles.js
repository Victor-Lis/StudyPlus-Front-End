import styled from 'styled-components'

export const Banner = styled.div`

    padding: 4.5% 0;
    width: 100%;
    background-color: #282828;
    margin: .5% 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5%;

    @media (max-width: 535px) {
        margin: 5.5% 0;
    }

`

export const BannerImg1 = styled.img`
    width: 20%;
    max-width: 220px;

    @media (max-width: 550px) {
        width: 30%;
        margin: 7.5% 0;
    }
`

export const BannerImg2 = styled.img`
    width: 20%;
    max-width: 220px;

    @media (max-width: 550px) {
        display: none;
    }
`

export const BannerText = styled.p`

    min-width: 200px;
    width: 30%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.30rem;

`