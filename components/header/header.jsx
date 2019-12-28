import React, { useState } from 'react'
import { HeaderSt, MenuIcon } from './headerStyled'
import raccon from '../../static/img/racoon.png'
import Link from 'next/link'
import menu from '../../static/img/menu.svg'
import styled from '@emotion/styled'

const Header = props => {
  const [user, setUser] = useState('unset')
  const [menuStatus, setMenuStatus] = useState(false)

  if (typeof window !== 'undefined' && user === 'unset') {
    setUser(JSON.parse(localStorage.getItem('user')))
  }

  const menuIsActive = () => {
    if (menuStatus) {
      setMenuStatus(false)
    } else {
      setMenuStatus(true)
    }
  }
  const Links = styled.div`
    @media (max-width: 768px) {
      display: ${menuStatus ? 'grid' : 'none'} !important;
      grid-template-columns: 100%;
      grid-auto-rows: auto;
      grid-auto-flow: row;
      background-color: #383838;
      grid-column: 1/3;
      width: 100%;
      text-align: left;
      margin-left: 15px;
      a {
        font-size: 1.3rem;
        display: block;
      }
    }
    a {
      margin: 0;
      color: white;
    }
    align-items: center;
    grid-column: 2;
    text-align: left;
    display: grid;
    column-gap: 15px;
    text-align: right;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    text-align: left;
  `
  return (
    <HeaderSt>
      {/* <h1>Easy IT</h1> */}
      <Links>
        <Link href="/">
          <a>Головна</a>
        </Link>
        <Link href="/top">
          <a>Рейтинг</a>
        </Link>
        <Link href="/courses">
          <a>Курси</a>
        </Link>
        <Link href="/tests">
          <a>Перевірка знань</a>
        </Link>
        {user ? (
          <Link href="/logout">
            <a
              className="login mobile"
              onClick={() => {
                localStorage.removeItem('user')
              }}
            >
              Logout
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a className="login mobile">Login</a>
          </Link>
        )}
      </Links>
      <Link href='/user'>
        <div className="user">
          {user ? (
            <>
              <a>{user.nickName}</a>
              <div className="img">
                <img src={user.imgUrl || raccon} alt="" />
              </div>
            </>
          ) : (
            <Link href="/login">
              <a className="login desktop">Login</a>
            </Link>
          )}
        </div>
      </Link>
      <MenuIcon onClick={menuIsActive} src={menu} />
    </HeaderSt>
  )
}

export default Header
