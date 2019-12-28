import styled from '@emotion/styled'

export const AdminPanelStyled = styled.main`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  .wrapper {
    padding: 10px 0;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    gap: 15px;
    display: grid;
    .courses {
      height: 100%;
      width: 100%;
      /* height: calc(80vh/3 - 50px); */
      background-color: grey;
      h2 {
        padding: 10px 0 0 0;
        margin: 0;
        text-align: center;
        background-color: darkgrey;
      }
    }
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-flow: row;
      padding: 10px;
      .card {
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: auto;
        height: auto;
        grid-auto-flow: row;
        svg {
          color: white;
          transition: .5s all;
        }
        svg:hover {
          color: red;
        }
        img {
          width: 100%;
        }
      }
    } 
  }
`

export const EditPanelSt = styled.div`
  background-color: grey;
  height: 80vh;
  overflow-y: auto;
  width: 80vw;
  position: absolute;
  top: calc(10vh);
  justify-self: center;
  .header {
    padding: 10px;
    display: grid;
    grid-template-columns: auto 80px;
    h2 {
      margin: 0;
      text-align: center;
      color: white;
    }
    svg {
      font-size: 40px;
      color: white;
      transition: .5s all;
      /* height: 2em !important; */
    :hover {
          color: red;
        }
      }
  }
  textarea {
    resize: none;
  }
  .inputs {
    display: grid;
    gap: 10px;
  }
  .inputs div{
    display: grid;
    grid-template-columns: 20% 1fr;
  }
  .inputs .withInputs {
    display: grid;
    grid-template-columns: 100% !important;
  }
  .inputs .withInputs div {
    display: grid;
    grid-template-columns: 100% !important;
  }
`