import React from 'react'
import LoadingFeedOpportunity from '../../../Shimmer/LoadingFeedOpportunity'
import FeedOpportunity from '../../../FeedOpportunity'
import { Container } from './styles'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
        </>
      ) : (
        <>
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
          <FeedOpportunity />
        </>
      )}
    </Container>
  )
}

export default MiddleColumn
