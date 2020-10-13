import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import meData from '../data/me/index.json'
import postsData from '../data/posts/index.json'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { userInterface, postInterface } from '../components/Interface'

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
  return {
    props: {
      me: meData,
      posts: postsData
    },
    revalidate: 20
  }
}
