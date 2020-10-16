import React from 'react'
import Head from 'next/head'
import { Container } from '../../../styles/out/style'
import { GetStaticPaths, GetStaticProps } from 'next'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Exam</title>
      </Head>

      <h1>Code Contest Instance</h1>
      <p>Redirecting to a code contest instance...</p>
    </Container>
  )
}

export default Home

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
      me: id,
    },
    revalidate: 20
  }
}
