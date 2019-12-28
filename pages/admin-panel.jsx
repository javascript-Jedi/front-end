import React from 'react'
import Head from '../components/Head'
import '../static/style.scss'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import AdminPanel from '../components/adminPanel/adminPanel'

const Home = () => (
  <>
    <Head />
    <Header />
    <AdminPanel />
    <Footer />
  </>
)

export default Home
