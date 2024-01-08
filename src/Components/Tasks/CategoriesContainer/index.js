import React, { useContext } from 'react'
import { Container, TitleRow, TitleBox, Title, TitleIcon, ButtonCreate, ButtonCreateText, ButtonCreateIcon, Categories } from './styles'

import { CategorieContext } from '../../../Contexts/categories'

import CategorieCreate from '../CategorieCreate'
import Categorie from '../Categorie'

export default function CategoriesContainer() {

  const { categories, creatingCategorie, setUpdatingCategorie, updatingCategorie, setCreatingCategorie } = useContext(CategorieContext)

  function handleCloseCreatingAndEditing(){

    setUpdatingCategorie()
    setCreatingCategorie(!creatingCategorie)

  }

  return (
    <Container>

      <TitleRow>
        <TitleBox>
          <TitleIcon />
          <Title> Categorias </Title>
        </TitleBox>
        <ButtonCreate onClick={() => handleCloseCreatingAndEditing()}>
          <ButtonCreateText>{!!creatingCategorie && !!updatingCategorie ? 'Editando': !!creatingCategorie && !updatingCategorie? 'Criando' : 'Criar'}</ButtonCreateText>
          <ButtonCreateIcon />
        </ButtonCreate>
      </TitleRow>

      {creatingCategorie && <CategorieCreate />}

      <Categories>
        {categories &&
          categories.map(((categorie, index) => {
            return <Categorie key={categorie.id} categorie={categorie} index={index}/>
          }))
        }
      </Categories>

    </Container>
  )
}
