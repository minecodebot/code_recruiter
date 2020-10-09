import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import CompletedTrainingPanel from '../../../../CompletedTrainingPanel'
import { Container, Row } from './styles'
import LoadingTrainingPanel from '../../../../Shimmer/LoadingTrainingPanel'
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
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingProfilePanel />
          <LoadingTrainingPanel />
          <LoadingTrainingPanel />
          <LoadingTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <Button type="edit" url="/profile/edit" />
          <ProfilePanel />
          <SkillsPanel tags={competences} />
          <CompletedTrainingPanel />
          <TrainingPanel />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
