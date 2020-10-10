import React from 'react'
import Panel from '../Panel'
import { Column, Container, Row } from '../../styles/GlobalStyles'
import Button from '../Button'

export interface Props {
  exams: {
    title: string
    description: string
    date: string
    level: string
    status: string
  }[]
}

const ExamsPanel: React.FC<Props> = ({ exams }) => {
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
