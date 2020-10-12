import React from 'react'
import Head from 'next/head'
import LayoutEditProfile from '../../../components/Layout/EditProfile'
import { GetStaticProps } from 'next'
import me from '../../../data/me/index.json'

const Trainings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform - Edit Profile</title>
      </Head>
      <LayoutEditProfile me={me} />
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
