import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'
import { useRouter } from 'next/router'
import users from '../../../../../data/users/index.json'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  const { query } = useRouter()
  const user = users.find(user => user.id.toString() === query.id)

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
          <ProfilePanel
            name={user.name}
            surname={user.surname}
            company={user.company}
            carrer_path={user.carrer_path}
            job_situation={user.job_situation}
            job_title={user.job_title}
            presentation_letter={user.presentation_letter}
            avatar={user.avatar}
            personalDataHidden={true}
          />
          <SkillsPanel tags={user.competences} />
          <TrainingPanel
            title="Completed"
            trainings={user.completedTrainings}
          />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
