import React from 'react';

import Panel from '../Panel';
import { useRouter } from 'next/router'

import {
  Container,
  Row,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ApplyIcon
} from './styles';

export interface Props {
	fullOpportunity?: boolean
}

const FeedOpportunity: React.FC<Props> = ({ fullOpportunity }) => {
  const router = useRouter()

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
		  	{ fullOpportunity ? <><h4>Description</h4><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p></> : <><h4>Short Description</h4><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p></>}
          </Column>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
			{ fullOpportunity ?
			<>
				<button onClick={()=>{router.push('/')}}>
					<ApplyIcon />
					<span>Apply</span>
				</button>
				<button onClick={()=>{router.push('/training/code')}}>
					<CommentIcon />
					<span>Training</span>
				</button>
		  	</> : <>
				<button onClick={()=>{router.push('/opportunity/1')}}>
					<LikeIcon />
					<span>View more</span>
				</button>
				<button onClick={()=>{router.push('/training/code')}}>
					<CommentIcon />
					<span>Training</span>
				</button>
			</> }
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedOpportunity;
