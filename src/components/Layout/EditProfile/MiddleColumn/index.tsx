import React from 'react'
import { useRouter } from 'next/router'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanelEdit from '../../../ProfilePanelEdit'
import { Container, LikeIcon, Row } from './styles'
import LoadingTrainingPanel from '../../../Shimmer/LoadingTrainingPanel'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  const router = useRouter()
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingProfilePanel />
          <LoadingTrainingPanel />
        </>
      ) : (
        <Row className="actions">
          <ProfilePanelEdit />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
