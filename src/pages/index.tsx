import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Home'
import me from '../data/me/index.json'
import posts from '../data/posts/index.json'
import { GetStaticProps } from 'next'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Search Plataform</title>
      </Head>
      <Layout me={me} posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: me,
      posts: posts
    }
  }
}
