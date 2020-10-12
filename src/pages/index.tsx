import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Home'
import meData from '../data/me/index.json'
import postsData from '../data/posts/index.json'
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
  posts: {
    title: string
    company: string
    post_date: string
    short_description: string
    long_description: string
    competences: string[]
    exam: number
    trainings: number[]
  }[]
}

const Home: React.FC<Props> = ({ me, posts }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <Head>
        <title>Job Search Plataform</title>
      </Head>
      <Layout isLoading={isFallback} me={me} posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: meData,
      posts: postsData
    }
  }
}
