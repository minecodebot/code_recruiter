import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
// import meData from '../data/me/index.json'
// import postsData from '../data/posts/index.json'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { userInterface, postInterface } from '../components/Interface'
import api from '../services/api'

export interface Props {
  me: userInterface
  posts: postInterface[]
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

  const postsData = await api.get("/jobs")
  const meData = await api.get(`/users/${process.env.NEXT_PUBLIC_MYID}`)

  return {
    props: {
      me: meData.data,
      posts: postsData.data
    },
    revalidate: 20
  }
}


