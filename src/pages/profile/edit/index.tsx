import React from 'react'
import Head from 'next/head'
import LayoutEditProfile from '../../../components/Layout/EditProfile'
import { GetStaticProps } from 'next'
import me from '../../../data/me/index.json'
import { useRouter } from 'next/router'

const Trainings: React.FC = () => {
  const { isFallback } = useRouter()
  return (
    <>
      <Head>
        <title>Job Search Plataform - Edit Profile</title>
      </Head>
      <LayoutEditProfile isLoading={isFallback} me={me} />
    </>
  )
}

export default Trainings

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: me
    }
  }
}
