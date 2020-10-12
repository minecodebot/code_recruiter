import React from 'react'
import Head from 'next/head'
import LayoutProfileId from '../../../components/Layout/Profile/Id'
import { useRouter } from 'next/router'

const Trainings: React.FC = () => {
  const { query } = useRouter()
  return (
    <>
      <Head>
        <title>Job Search Plataform - User Profile</title>
      </Head>
      <LayoutProfileId user={query.user} />
    </>
  )
}

export default Trainings
