import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import { GetStaticProps } from 'next'
// import meData from '../../../data/me/index.json'
import { useRouter } from 'next/router'
import { userInterface } from '../../../components/Interface'
import api from '../../../services/api'

export interface Props {
  me: userInterface
}

const Trainings: React.FC<Props> = ({ me }) => {
  const { isFallback } = useRouter()
  return (
    <>
      <Head>
        <title>Job Search Plataform - Edit Profile</title>
      </Head>
      <Layout isLoading={isFallback} me={me} />
    </>
  )
}

export default Trainings

export const getStaticProps: GetStaticProps = async () => {

  const meData = await api.get(`/users/${process.env.NEXT_PUBLIC_MYID}`)

  return {
    props: {
      me: meData.data
    },
    revalidate: 20
  }
}
