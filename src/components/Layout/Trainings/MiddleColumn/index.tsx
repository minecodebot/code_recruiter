import React from 'react'
import TrainingPanel from '../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'

import me from '../../../../data/me/index.json'
import trainings from '../../../../data/trainings/index.json'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <TrainingPanel title="Completed" trainings={me.completedTrainings} />
          <TrainingPanel title="Suggested" trainings={me.suggestedTrainings} />
          <TrainingPanel title="All" trainings={trainings} />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
