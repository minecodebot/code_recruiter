import React from 'react'
import Panel from '../Panel'
import { Container, Row, Column } from './styles'
import Button from '../Button'
const ExamsPanel: React.FC = () => {
  const exams = [
    {
      title: 'Training Title 1',
      description: 'Some text here',
      date: '12/10/2020',
      level: 'level',
      status: 'success'
    },
    {
      title: 'Training Title 2',
      description: 'Some text here',
      date: '12/10/2020',
      level: 'level',
      status: 'success'
    },
    {
      title: 'Training Title 3',
      description: 'Some text here',
      date: '12/10/2020',
      level: 'level',
      status: 'fail'
    },
    {
      title: 'Training Title 4',
      description: 'Some text here',
      date: '12/10/2020',
      level: 'level',
      status: 'evaluation'
    },
    {
      title: 'Training Title 5',
      description: 'Some text here',
      date: '12/10/2020',
      level: 'level',
      status: 'success'
    },
    {
      title: 'Training Title 6',
      description: 'Some text here',
      date: '12/10/2020',
      level: 'level',
      status: 'fail'
    }
  ]
  return (
    <Container>
      <Panel>
        <span className="title">My Exams</span>
        <ul>
          {exams ? (
            exams.map(item => {
              return (
                <li>
                  <Row className="actions">
                    <Column>
                      <h3>{item.title}</h3>
                      <span className="subtext">{item.description}</span>
                      <span className="subtext">{item.date}</span>
                    </Column>
                    <Column>
                      <Button type={item.status} />
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

export default ExamsPanel
