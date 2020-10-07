import React from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import {
  Container,
  SuccessIcon,
  Row,
  Column,
  FailIcon,
  EvaluationIcon
} from './styles'

const ExamsResponsesPanel: React.FC = () => {
  const router = useRouter()
  return (
    <Container>
      <Panel>
        <span className="title">Responses</span>
        <ul>
          <li>
            <Row className="actions">
              <Column>
                <h3
                  onClick={() => {
                    router.push('/profile/user/1')
                  }}
                >
                  Name Surname
                </h3>
                <span className="subtext">Time</span>
                <span className="subtext">Date</span>
              </Column>
              <Column>
                <Row>
                  <SuccessIcon />
                  <h3>Level</h3>
                </Row>
              </Column>
            </Row>
          </li>
          <li>
            <Row className="actions">
              <Column>
                <h3
                  onClick={() => {
                    router.push('/profile/user/1')
                  }}
                >
                  Name Surname
                </h3>
                <span className="subtext">Time</span>
                <span className="subtext">Date</span>
              </Column>
              <Column>
                <Row>
                  <FailIcon />
                  <h3>Level</h3>
                </Row>
              </Column>
            </Row>
          </li>
          <li>
            <Row className="actions">
              <Column>
                <h3
                  onClick={() => {
                    router.push('/profile/user/1')
                  }}
                >
                  Name Surname
                </h3>
                <span className="subtext">Time</span>
                <span className="subtext">Date</span>
              </Column>
              <Column>
                <Row>
                  <EvaluationIcon />
                  <h3>Level</h3>
                </Row>
              </Column>
            </Row>
          </li>
          <li>
            <Row className="actions">
              <Column>
                <h3
                  onClick={() => {
                    router.push('/profile/user/1')
                  }}
                >
                  Name Surname
                </h3>
                <span className="subtext">Time</span>
                <span className="subtext">Date</span>
              </Column>
              <Column>
                <Row>
                  <SuccessIcon />
                  <h3>Level</h3>
                </Row>
              </Column>
            </Row>
          </li>
        </ul>
      </Panel>
    </Container>
  )
}

export default ExamsResponsesPanel
