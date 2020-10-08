import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform</title>
      </Head>
      <Layout />
    </>
  )
}

export default Home
