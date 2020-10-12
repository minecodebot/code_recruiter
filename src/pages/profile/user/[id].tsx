import React from 'react'
import Head from 'next/head'
import LayoutProfileId from '../../../components/Layout/Profile/Id'
import { GetStaticPaths, GetStaticProps } from 'next'
import meData from '../../../data/me/index.json'
import usersData from '../../../data/users/index.json'
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
  user: {
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
}

const Trainings: React.FC<Props> = ({ me, user }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform - User Profile</title>
      </Head>
      {console.log('me', me)}
      {console.log('user', user)}
      <LayoutProfileId isLoading={isFallback} me={me} user={user} />
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
    }
  }
}
