import React from 'react'
import LoadingFeedOpportunity from '../../../Shimmer/LoadingFeedOpportunity'
import FeedOpportunity from '../../../FeedOpportunity'
import { Container } from './styles'

export interface Props {
  isLoading: boolean
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

const MiddleColumn: React.FC<Props> = ({ isLoading, posts }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <>
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
        </>
      ) : (
        <>
          {posts ? (
            posts.map(post => {
              return (
                <FeedOpportunity
                  title={post.title}
                  company={post.company}
                  post_date={post.post_date}
                  short_description={post.short_description}
                  long_description={post.long_description}
                  competences={post.competences}
                  exam={post.exam}
                  trainings={post.trainings}
                />
              )
            })
          ) : (
            <></>
          )}
        </>
      )}
    </Container>
  )
}

export default MiddleColumn
