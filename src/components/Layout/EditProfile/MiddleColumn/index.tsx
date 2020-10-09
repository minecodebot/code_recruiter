import React from 'react'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanelEdit from '../../../ProfilePanelEdit'
import { Container, Row } from './styles'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingProfilePanel />
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
