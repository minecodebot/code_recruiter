import React from 'react'
import { useRouter } from 'next/router'

import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../ProfilePanel'
import SkillsPanel from '../../../SkillsPanel'
import TrainingPanel from '../../../TrainingPanel'
import { Container, LikeIcon, Row } from './styles'
import LoadingTrainingPanel from '../../../Shimmer/LoadingTrainingPanel'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  const router = useRouter()
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
        </>
      ) : (
        <Row className="actions">
          <ProfilePanel />
          <SkillsPanel tags={competences} />
          <button
            onClick={() => {
              router.push('/profile/me')
            }}
          >
            <LikeIcon />
            <span>Save</span>
          </button>
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
