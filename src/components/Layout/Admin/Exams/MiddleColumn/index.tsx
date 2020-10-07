import React from 'react'

import ExamsResponsesPanel from '../../../../ExamsResponsesPanel'
import { Container, Row } from './styles'
import LoadingExamsPanel from '../../../../Shimmer/LoadingExamsPanel'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <LoadingExamsPanel />
      ) : (
        <Row className="actions">
          <ExamsResponsesPanel />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
