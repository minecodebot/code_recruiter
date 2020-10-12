import React from 'react'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanelEdit from '../../../ProfilePanelEdit'
import { Container, Row } from './styles'

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
        <>
          <LoadingProfilePanel />
        </>
      ) : (
        <Row className="actions">
          <ProfilePanelEdit
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrer_path={me.carrer_path}
            job_situation={me.job_situation}
            job_title={me.job_title}
            presentation_letter={me.presentation_letter}
            avatar={me.avatar}
          />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
