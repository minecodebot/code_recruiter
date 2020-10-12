import React from 'react'
import ExamsPanel from '../../../ExamsPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'

export interface Props {
  isLoading: boolean
  me: {
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

const MiddleColumn: React.FC<Props> = ({ isLoading, me }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <LoadingExamTrainingPanel />
      ) : (
        <Row className="actions">
          <ExamsPanel exams={me.exams} />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
