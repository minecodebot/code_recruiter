import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'

import me from '../../../../../data/user/index.json'

export interface Props {
  user: string
}

const MiddleColumn: React.FC<LoadingProps & Props> = ({ isLoading, user }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <h1>{user}</h1>
          <ProfilePanel
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrer_path={me.carrer_path}
            job_situation={me.job_situation}
            job_title={me.job_title}
            presentation_letter={me.presentation_letter}
            avatar={me.avatar}
            personalDataHidden={true}
          />
          <SkillsPanel tags={me.competences} />
          <TrainingPanel title="Completed" trainings={me.completedTrainings} />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
