import React, { useState } from 'react'
import Panel from '../Panel'
import {
  Container,
  Row,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  HashtagIconCertified,
  LikeIconLess
} from './styles'
import Button from '../Button'

export interface Props {
  title: string
  company: string
  post_date: string
  short_description: string
  long_description: string
  competences: string[]
  exam: number
  trainings: number[]
}

const FeedOpportunity: React.FC<Props> = ({
  title,
  company,
  post_date,
  short_description,
  long_description,
  competences,
  exam,
  trainings
}) => {
  const [fullOpportunity, setFullOpportunity] = useState(false)
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <Column>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <time>{post_date}</time>
          </Column>
        </Row>
        <Row className="description">
          <Column>
            {fullOpportunity ? (
              <>
                <span className="title">Description</span>
                <p>{long_description}</p>
                <div className="separator"></div>
                <Row>
                  <Column>
                    {competences.map(competence => {
                      return (
                        <p className="tag">
                          <span>
                            <HashtagIconCertified />
                            {competence}
                          </span>
                        </p>
                      )
                    })}
                  </Column>
                </Row>
              </>
            ) : (
              <>
                <span className="title">Short Description</span>
                <p>{short_description}</p>
              </>
            )}
          </Column>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <div className="buttons">
            <div className="left">
              {fullOpportunity ? (
                <button
                  onClick={() => {
                    setFullOpportunity(!fullOpportunity)
                  }}
                >
                  <LikeIconLess />
                  <span>View less</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFullOpportunity(!fullOpportunity)
                  }}
                >
                  <LikeIcon />
                  <span>View more</span>
                </button>
              )}
            </div>
            <div className="right">
              <Button url={`/exam/code/${exam}`} type="exam" />
              <Button url={`/trainings/code/${trainings.join('/')}`} type="training" />
            </div>
          </div>
        </Row>
      </Container>
    </Panel>
  )
}

export default FeedOpportunity
