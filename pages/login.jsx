import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from '../components/Head'
import LoginPanel from '../components/panels/Login'

const App = () => {
  return (
    <>
      <Head title="General page" />
      <Header />
      <LoginPanel />
      <Footer />
    </>
  )
}
export default App
