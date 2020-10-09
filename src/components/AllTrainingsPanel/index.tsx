import React from 'react'
import Panel from '../Panel'
import { Container, Row, Column } from './styles'
import Button from '../Button'

const AllTrainingsPanel: React.FC = () => {
  const trainings = [
    { title: 'Training Title 1', level: 'level' },
    { title: 'Training Title 2', level: 'level' },
    { title: 'Training Title 3', level: 'level' },
    { title: 'Training Title 4', level: 'level' },
    { title: 'Training Title 5', level: 'level' },
    { title: 'Training Title 6', level: 'level' }
  ]
  return (
    <Container>
      <Panel>
        <span className="title">All Trainings</span>
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

export default AllTrainingsPanel
