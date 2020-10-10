import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import Button from '../../../../Button'

import me from '../../../../../data/me/index.json'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
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
          <ProfilePanel
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrer_path={me.carrer_path}
            job_situation={me.job_situation}
            job_title={me.job_title}
            presentation_letter={me.presentation_letter}
            avatar={me.avatar}
          />
          <SkillsPanel tags={me.competences} />
          <TrainingPanel title="Completed" trainings={me.completedTrainings} />
          <TrainingPanel title="Suggested" trainings={me.suggestedTrainings} />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
