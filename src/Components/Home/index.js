import React, { useContext } from 'react'
import { Container } from './styles'

import BannerHome from './BannerHome'
import WeekContainer from '../../Layout/WeekContainer'

import { IndexContext } from '../../Contexts'

export default function Home() {

  const { loading } = useContext(IndexContext)

  return (
    <Container>

      {!loading && (
        <>
          <BannerHome />
          <WeekContainer />
        </>
      )}

    </Container>
  )
}