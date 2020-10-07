import React from 'react'
import TrainingPanel from '../../../TrainingPanel'
import CompletedTrainingPanel from '../../../CompletedTrainingPanel'
import AllTrainingsPanel from '../../../AllTrainingsPanel'
import { Container, Row } from './styles'
import LoadingTrainingPanel from '../../../Shimmer/LoadingTrainingPanel'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingTrainingPanel />
          <LoadingTrainingPanel />
          <LoadingTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <CompletedTrainingPanel />
          <TrainingPanel />
          <AllTrainingsPanel />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
