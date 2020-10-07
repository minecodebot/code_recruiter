import React from 'react'
import Panel from '../Panel'
import {
  Container,
  SuccessIcon,
  Row,
  Column,
  FailIcon,
  EvaluationIcon
} from './styles'

const ExamsPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">My Exams</span>
        <ul>
          <li>
            <Row className="actions">
              <Column>
                <h3>Training Title</h3>
                <span className="subtext">Description</span>
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
                <h3>Training Title</h3>
                <span className="subtext">Description</span>
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
                <h3>Training Title</h3>
                <span className="subtext">Description</span>
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
                <h3>Training Title</h3>
                <span className="subtext">Description</span>
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

export default ExamsPanel
