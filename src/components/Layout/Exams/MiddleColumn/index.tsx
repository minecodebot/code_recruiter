import React from 'react'
import ExamsPanel from '../../../ExamsPanel'
import { Container, Row } from './styles'
import LoadingExamsPanel from '../../../Shimmer/LoadingExamsPanel'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <LoadingExamsPanel />
      ) : (
        <Row className="actions">
          <ExamsPanel />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
