import React from 'react'
import Head from 'next/head'
import { Container } from '../../../styles/out/style'

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
