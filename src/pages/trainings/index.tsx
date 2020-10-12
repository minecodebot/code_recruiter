import React from 'react'
import Head from 'next/head'
import LayoutTrainings from '../../components/Layout/Trainings'
import meData from '../../data/me/index.json'
import trainingsData from '../../data/trainings/index.json'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export interface Props {
  me: {
    name: string
    surname: string
    company: string
    carrer_path: string
    job_situation: string
    job_title: string
    presentation_letter: string
    avatar: {
      avatarStyle: string
      topType: string
      accessoriesType: string
      hairColor: string
      facialHairType: string
      clotheType: string
      eyeType: string
      eyebrowType: string
      mouthType: string
      skinColor: string
    }
    competences: string[]
    suggestedTrainings: {
      id: number
      title: string
      level: string
    }[]
    completedTrainings: {
      id: number
      title: string
      level: string
    }[]
    exams: {
      title: string
      description: string
      date: string
      level: string
      status: string
    }[]
  }
  trainings: {
    id: number
    title: string
    level: string
  }[]
}

const Trainings: React.FC<Props> = ({ me, trainings }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - Trainings</title>
      </Head>
      <LayoutTrainings isLoading={isFallback} me={me} trainings={trainings} />
    </>
  )
}

export default Trainings

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: meData,
      trainings: trainingsData
    }
  }
}
