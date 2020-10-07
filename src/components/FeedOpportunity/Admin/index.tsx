import React from 'react'
import Panel from '../../Panel'
import { useRouter } from 'next/router'
import {
  Container,
  Row,
  Separator,
  Avatar,
  Column,
  CommentIcon,
  ApplyIcon,
  HashtagIconCertified,
  EditIcon,
  ResponsesIcon
} from '../styles'

const FeedOpportunity: React.FC = () => {
  const router = useRouter()
  return (
    <Panel>
      <Container>
        <Row className="heading actions">
          <div className="buttons">
            <div className="right">
              <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
              <Column>
                <h3>Job Title</h3>
                <h4>Company</h4>
                <time>Post date</time>
              </Column>
            </div>
            <div className="left">
              <Column>
                <button
                  onClick={() => {
                    router.push('/profile/edit')
                  }}
                >
                  <EditIcon />
                  <span>Edit Job</span>
                </button>
              </Column>
            </div>
          </div>
        </Row>
        <Row className="description">
          <Column>
            <>
              <span className="title">Description</span>
              <p>
                Nam condimentum commodo ligula, imperdiet auctor justo ultrices
                sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at
                magna.
              </p>
              <p>
                Nam condimentum commodo ligula, imperdiet auctor justo ultrices
                sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at
                magna.
              </p>
              <p>
                Nam condimentum commodo ligula, imperdiet auctor justo ultrices
                sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at
                magna.
              </p>
              <div className="separator"></div>
              <Row>
                <Column>
                  <p className="tag">
                    <span>
                      <HashtagIconCertified />
                      Competence 1{' '}
                    </span>
                  </p>
                  <p className="tag">
                    <span>
                      <HashtagIconCertified />
                      Competence 2{' '}
                    </span>
                  </p>
                  <p className="tag">
                    <span>
                      <HashtagIconCertified />
                      Competence 3{' '}
                    </span>
                  </p>
                  <p className="tag">
                    <span>
                      <HashtagIconCertified />
                      Competence 4{' '}
                    </span>
                  </p>
                </Column>
              </Row>
            </>
          </Column>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <div className="buttons">
            <div className="right">
              <button
                onClick={() => {
                  router.push('/')
                }}
              >
                <ApplyIcon />
                <span>Add Exam</span>
              </button>
              <button
                onClick={() => {
                  router.push('/training/code')
                }}
              >
                <CommentIcon />
                <span>Add Sugested Trainings</span>
              </button>
            </div>
            <div className="left">
              <button
                onClick={() => {
                  router.push('/admin/responses/job/1')
                }}
              >
                <ResponsesIcon />
                <span>Responses</span>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </Panel>
  )
}

export default FeedOpportunity
