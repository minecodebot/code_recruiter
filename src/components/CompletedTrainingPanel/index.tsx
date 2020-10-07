import React from 'react';

import Panel from '../Panel';
import { useRouter } from 'next/router'

import { Container, CommentIcon, Row, Column } from './styles';

const CompletedTrainingPanel: React.FC = () => {
	const router = useRouter()
	return (
    <Container>
      <Panel>
        <span className="title">Completed Trainings</span>
        <ul>
          <li>
            <Row className="actions">
                <h3>Training Title</h3>
                <span className="subtext">Level</span>
            </Row>
          </li>
          <li>
            <Row className="actions">
				<h3>Training Title</h3>
                <span className="subtext">Level</span>
            </Row>
          </li>
          <li>
            <Row className="actions">
                <h3>Training Title</h3>
                <span className="subtext">Level</span>
            </Row>
          </li>
          <li>
            <Row className="actions">
			    <h3>Training Title</h3>
                <span className="subtext">Level</span>
            </Row>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default CompletedTrainingPanel;
