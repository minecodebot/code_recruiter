import React from 'react'
import Head from 'next/head'
import LayoutProfileId from '../../../components/Layout/Profile/Id'
import { GetStaticPaths, GetStaticProps } from 'next'
import users from '../../../data/users/index.json'

const Trainings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform - User Profile</title>
      </Head>
      <LayoutProfileId />
    </>
  )
}

export default Trainings

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = users.map(user => {
    return {
      params: {
        id: user.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  return {
    props: {
      user: users.find(user => user.id.toString() === id)
    }
  }
}
