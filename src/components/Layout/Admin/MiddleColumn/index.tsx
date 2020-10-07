import React from 'react'
import LoadingFeedOpportunity from '../../../Shimmer/LoadingFeedOpportunity'
import FeedOpportunity from '../../../FeedOpportunity/Admin'
import { Container, Grid } from './styles'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <Grid>
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
          <LoadingFeedOpportunity />
        </Grid>
      ) : (
        <Grid>
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
        </Grid>
      )}
    </Container>
  )
}

export default MiddleColumn
