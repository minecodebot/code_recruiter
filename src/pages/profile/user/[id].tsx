import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
// import meData from '../../../data/me/index.json'
import usersData from '../../../data/users/index.json'
import { useRouter } from 'next/router'
import { userInterface } from '../../../components/Interface'
import api from '../../../services/api'

export interface Props {
  me: userInterface
  user: userInterface
}

const Trainings: React.FC<Props> = ({ me, user }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - User Profile</title>
      </Head>
      <Layout isLoading={isFallback} me={me} user={user} />
    </>
  )
}

export default Trainings

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {

  const meData = await api.get(`/users/${process.env.NEXT_PUBLIC_MYID}`)
  const { id } = context.params
  const userData = await api.get(`/users/${id}`)

  return {
    props: {
      me: meData.data,
      user: userData.data
    },
    revalidate: 20
  }
}
