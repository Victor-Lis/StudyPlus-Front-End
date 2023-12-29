import React from 'react'
import Learning from '../../../Images/Learning.png'
import { Banner, BannerImg1, BannerImg2, BannerText } from './styles'

export default function BannerHome() {
  
  return (
    <Banner className='banner-home'>

      <BannerImg1 src={Learning}/>
      <BannerText> Planejado para aumentar seu conhecimento e facilitar seu aprendizado! </BannerText>
      <BannerImg2 src={Learning}/>

    </Banner>
  )
}
