import React from 'react'
import ExamsPanel from '../../../ExamsPanel'
import { Container, Row } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'

import me from '../../../../data/me/index.json'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
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
