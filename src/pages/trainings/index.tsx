import React from 'react'
import Head from 'next/head'
import LayoutTrainings from '../../components/Layout/Trainings'
import me from '../../data/me/index.json'
import trainings from '../../data/trainings/index.json'
import { GetStaticProps } from 'next'

const Trainings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform - Trainings</title>
      </Head>
      <LayoutTrainings me={me} trainings={trainings} />
    </>
  )
}

export default Trainings

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: me,
      trainings: trainings
    }
  }
}
