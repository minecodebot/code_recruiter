import React from 'react';

import LoadingFeedPost from '../../../Shimmer/LoadingFeedPost';
import FeedPost from '../../../FeedOpportunity';

import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
