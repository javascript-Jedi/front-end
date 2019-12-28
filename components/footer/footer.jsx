import React from 'react'
import heart from '../../static/img/heart-solid.svg'
import coffee from '../../static/img/coffee-solid.svg'
import {FooterSt,Img,MadeWith} from '../footer/footerStyled'

const Footer = (props) => {
  return (
    <FooterSt>
      <div className="wrapper">
        <div><a href="https://nbt-team.me/">Git Hub page</a></div>
        <MadeWith><span>Made with <Img src={heart} alt="heart"/> & <Img src={coffee} alt=""/> </span></MadeWith>
      </div>
    </FooterSt>
  )
}

export default Footer
