import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from '../components/Head'
import ResetPassword from '../components/panels/ResetPassword'

const App = () => {
  return (
    <>
      <Head title="Reset Password" />
      <Header />
      <ResetPassword />
      <Footer />
    </>
  )
}
export default App
