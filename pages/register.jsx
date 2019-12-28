import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from '../components/Head'
import RegisterPanel from '../components/panels/Register'

const App = () => {
  return (
    <>
      <Head title="General page" />
      <Header />
      <RegisterPanel />
      <Footer />
    </>
  )
}
export default App
