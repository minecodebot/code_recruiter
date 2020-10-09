import React from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import { Container, Row, Column } from './styles'
import Button from '../Button'

const TrainingPanel: React.FC = () => {
  const trainings = [
    { title: 'Training Title 7', level: 'level' },
    { title: 'Training Title 8', level: 'level' },
    { title: 'Training Title 9', level: 'level' }
  ]
  return (
    <Container>
      <Panel>
        <span className="title">Suggested Trainings</span>
        <ul>
          {trainings ? (
            trainings.map(item => {
              return (
                <li>
                  <Row className="actions">
                    <Column>
                      <h3>{item.title}</h3>
                      <span className="subtext">{item.level}</span>
                    </Column>
                    <Column>
                      <Button type="training" url="/training/code" />
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

export default TrainingPanel
