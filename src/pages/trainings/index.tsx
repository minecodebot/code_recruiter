import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import meData from '../../data/me/index.json'
import trainingsData from '../../data/trainings/index.json'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { userInterface, trainingInterface } from '../../components/Interface'

export interface Props {
  me: userInterface
  trainings: trainingInterface[]
}

const Trainings: React.FC<Props> = ({ me, trainings }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - Trainings</title>
      </Head>
      <Layout isLoading={isFallback} me={me} trainings={trainings} />
    </>
  )
}

export default Trainings

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: meData,
      trainings: trainingsData
    },
    revalidate: 20
  }
}
