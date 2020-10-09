import React from 'react'
import TrainingPanel from '../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  const allTrainings = [
    { title: 'Training Title 7', level: 'level' },
    { title: 'Training Title 8', level: 'level' },
    { title: 'Training Title 9', level: 'level' }
  ]
  const completedTrainings = [
    { title: 'Training Title 7', level: 'level' },
    { title: 'Training Title 8', level: 'level' },
    { title: 'Training Title 9', level: 'level' }
  ]
  const suggestedTrainings = [
    { title: 'Training Title 7', level: 'level' },
    { title: 'Training Title 8', level: 'level' },
    { title: 'Training Title 9', level: 'level' }
  ]
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
          <TrainingPanel title="Completed" trainings={completedTrainings} />
          <TrainingPanel title="Suggested" trainings={suggestedTrainings} />
          <TrainingPanel title="All" trainings={allTrainings} />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
