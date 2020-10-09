import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import Button from '../../../../Button'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  const competences = [
    ['Competence 1', false],
    ['Competence 2', false],
    ['Competence 3', false],
    ['Competence 4', false],
    ['Competence 5', true],
    ['Competence 6', true]
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
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <Button type="edit" url="/profile/edit" />
          <ProfilePanel />
          <SkillsPanel tags={competences} />
          <TrainingPanel title="Completed" trainings={completedTrainings} />
          <TrainingPanel title="Suggested" trainings={suggestedTrainings} />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
