import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import meData from '../../../data/me/index.json'
import usersData from '../../../data/users/index.json'
import { useRouter } from 'next/router'
import { userInterface } from '../../../components/Interface'

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
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params
  return {
    props: {
      me: meData,
      user: usersData.find(user => user.id.toString() === id)
    },
    revalidate: 20
  }
}
