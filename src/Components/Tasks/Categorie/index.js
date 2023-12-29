import React, { useState, useEffect, useContext } from 'react'
import { Container, TitleBox, Title, Options, EditIcon, DeleteIcon, } from './styles'

import { IndexContext } from '../../../Contexts'

export default function Categorie({ categorie }) {

  return (
    <Container>

      <TitleBox background={categorie.color}>
        <Title> {categorie.title} </Title>
      </TitleBox>
      <Options>
        <EditIcon />
        <DeleteIcon />
      </Options>

    </Container>
  )
}
