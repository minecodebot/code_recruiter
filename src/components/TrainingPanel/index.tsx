import React from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import { Container, CommentIcon, Row, Column } from './styles'

const TrainingPanel: React.FC = () => {
  const router = useRouter()
  return (
    <Container>
      <Panel>
        <span className="title">Suggested Trainings</span>
        <ul>
          <li>
            <Row className="actions">
              <Column>
                <h3>Training Title</h3>
                <span className="subtext">Level</span>
              </Column>
              <Column>
                <button
                  onClick={() => {
                    router.push('/training/code')
                  }}
                >
                  <CommentIcon />
                  <span>Training</span>
                </button>
              </Column>
            </Row>
          </li>
          <li>
            <Row className="actions">
              <Column>
                <h3>Training Title</h3>
                <span className="subtext">Level</span>
              </Column>
              <Column>
                <button
                  onClick={() => {
                    router.push('/training/code')
                  }}
                >
                  <CommentIcon />
                  <span>Training</span>
                </button>
              </Column>
            </Row>
          </li>
          <li>
            <Row className="actions">
              <Column>
                <h3>Training Title</h3>
                <span className="subtext">Level</span>
              </Column>
              <Column>
                <button
                  onClick={() => {
                    router.push('/training/code')
                  }}
                >
                  <CommentIcon />
                  <span>Training</span>
                </button>
              </Column>
            </Row>
          </li>
          <li>
            <Row className="actions">
              <Column>
                <h3>Training Title</h3>
                <span className="subtext">Level</span>
              </Column>
              <Column>
                <button
                  onClick={() => {
                    router.push('/training/code')
                  }}
                >
                  <CommentIcon />
                  <span>Training</span>
                </button>
              </Column>
            </Row>
          </li>
        </ul>
      </Panel>
    </Container>
  )
}

export default TrainingPanel
