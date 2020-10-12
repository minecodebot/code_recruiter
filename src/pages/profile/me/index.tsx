import React from 'react'
import Head from 'next/head'
import LayoutProfileMe from '../../../components/Layout/Profile/Me'
import me from '../../../data/me/index.json'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const Trainings: React.FC = () => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - My Profile</title>
      </Head>
      <LayoutProfileMe isLoading={isFallback} me={me} />
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
