import styled from '@emotion/styled'

export const HeaderSt = styled.header`
  @media (max-width: 768px) {
    height: auto !important;
    padding: 10px 0;
    grid-template-columns: 10% auto 10% !important;
    .user {
      display: none;   
    }
    .mobile {
      display: block !important;
    }
    .desktop {
      display: none;
    }
  }
  height: 10vh;
  background-color: #383838;
  display: grid;
  grid-template-columns: 5% auto auto 5%;
  .mobile {
    display: none;
  }
  .desktop {
    text-align: right;
  }
  a {
    margin: 0;
    color: white;
    text-decoration: none;
  }

  .user {
    align-content: center;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 10vh;
    align-content: center;
    justify-content: right;
    span {
      font-weight: 600;
      align-self: center;
      color: white;
      text-align: right;
    }
    .img {
      display: grid;
      max-height: calc(10vh - 10px);
      img {
        height: 100%;
      }
    }
  }
`

export const MenuIcon = styled.img`
  @media (max-width: 768px) {
    display: block !important;
  }
  justify-self: right;
  display: none;
  width: 40px;
  grid-column: 3;
  align-self: center;
  margin-right: 15px;
`
