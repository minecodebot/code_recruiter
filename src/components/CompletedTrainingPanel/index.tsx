import React from 'react'
import Panel from '../Panel'
import { Container, Row, Column } from './styles'

const CompletedTrainingPanel: React.FC = () => {
  const trainings = [
    { title: 'Training Title 1', level: 'level' },
    { title: 'Training Title 5', level: 'level' },
    { title: 'Training Title 6', level: 'level' }
  ]
  return (
    <Container>
      <Panel>
        <span className="title">Completed Trainings</span>
        <ul>
          {trainings ? (
            trainings.map(item => {
              return (
                <li>
                  <Row className="actions">
                    <Column>
                      <h3>{item.title}</h3>
                    </Column>
                    <Column>
                      <span className="subtext">{item.level}</span>
                    </Column>
                  </Row>
                </li>
              )
            })
          ) : (
            <></>
          )}
        </ul>
      </Panel>
    </Container>
  )
}

export default CompletedTrainingPanel
