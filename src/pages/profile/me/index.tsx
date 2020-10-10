import React from 'react'
import Head from 'next/head'
import LayoutProfileMe from '../../../components/Layout/Profile/Me'

const Trainings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform - My Profile</title>
      </Head>
      <LayoutProfileMe />
    </>
  )
}

export default Trainings
