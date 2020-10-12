import React from 'react'
import Head from 'next/head'
import LayoutExams from '../../components/Layout/Exams'
import me from '../../data/me/index.json'
import { GetStaticProps } from 'next'

const Trainings: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform - Exams</title>
      </Head>
      <LayoutExams me={me} />
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
