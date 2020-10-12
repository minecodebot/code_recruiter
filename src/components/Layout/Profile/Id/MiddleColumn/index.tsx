import React from 'react'
import LoadingProfilePanel from '../../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../../ProfilePanel'
import SkillsPanel from '../../../../SkillsPanel'
import TrainingPanel from '../../../../TrainingPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../../Shimmer/LoadingExamTrainingPanel'

export interface Props {
  isLoading: boolean
  user: {
    name: string
    surname: string
    company: string
    carrer_path: string
    job_situation: string
    job_title: string
    presentation_letter: string
    avatar: {
      avatarStyle: string
      topType: string
      accessoriesType: string
      hairColor: string
      facialHairType: string
      clotheType: string
      eyeType: string
      eyebrowType: string
      mouthType: string
      skinColor: string
    }
    competences: string[]
    suggestedTrainings: {
      id: number
      title: string
      level: string
    }[]
    completedTrainings: {
      id: number
      title: string
      level: string
    }[]
    exams: {
      title: string
      description: string
      date: string
      level: string
      status: string
    }[]
  }
}

const MiddleColumn: React.FC<Props> = ({ isLoading, user }) => {
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
