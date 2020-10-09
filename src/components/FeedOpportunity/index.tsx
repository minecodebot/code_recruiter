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
const FeedOpportunity: React.FC = () => {
  const [fullOpportunity, setFullOpportunity] = useState(false)
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <Column>
            <h3>Job Title</h3>
            <h4>Company</h4>
            <time>Post date</time>
          </Column>
        </Row>
        <Row className="description">
          <Column>
            {fullOpportunity ? (
              <>
                <span className="title">Description</span>
                <p>
                  Nam condimentum commodo ligula, imperdiet auctor justo
                  ultrices sed. Aenean nec nisi vestibulum turpis pulvinar
                  lobortis quis at magna.
                </p>
                <p>
                  Nam condimentum commodo ligula, imperdiet auctor justo
                  ultrices sed. Aenean nec nisi vestibulum turpis pulvinar
                  lobortis quis at magna.
                </p>
                <p>
                  Nam condimentum commodo ligula, imperdiet auctor justo
                  ultrices sed. Aenean nec nisi vestibulum turpis pulvinar
                  lobortis quis at magna.
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
            ) : (
              <>
                <span className="title">Short Description</span>
                <p>
                  Nam condimentum commodo ligula, imperdiet auctor justo
                  ultrices sed. Aenean nec nisi vestibulum turpis pulvinar
                  lobortis quis at magna.
                </p>
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
              <Button url="/exam/code" type="exam" />
              <Button url="/training/code" type="training" />
            </div>
          </div>
        </Row>
      </Container>
    </Panel>
  )
}

export default FeedOpportunity
