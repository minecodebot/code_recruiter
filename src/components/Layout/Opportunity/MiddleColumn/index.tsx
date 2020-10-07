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
        </>
      ) : (
        <>
          <FeedPost fullOpportunity={true} />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
