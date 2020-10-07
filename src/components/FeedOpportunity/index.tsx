import React, {useState} from 'react';

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
  ApplyIcon,
  HashtagIconCertified,
  LikeIconLess
} from './styles';

const FeedOpportunity: React.FC = () => {
  const router = useRouter()
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
		  	{ fullOpportunity ? <><span className="title">Description</span><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p><div className="separator"></div><Row><Column><p className="tag"><span><HashtagIconCertified />Competence 1{' '}</span></p><p className="tag"><span><HashtagIconCertified />Competence 2{' '}</span></p><p className="tag"><span><HashtagIconCertified />Competence 3{' '}</span></p><p className="tag"><span><HashtagIconCertified />Competence 4{' '}</span></p></Column></Row></> : <><span className="title">Short Description</span><p>Nam condimentum commodo ligula, imperdiet auctor justo ultrices sed. Aenean nec nisi vestibulum turpis pulvinar lobortis quis at magna.</p></>}
          </Column>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
			{ fullOpportunity ?
			<div className="buttons">
				<div className="left">
				<button onClick={()=>{setFullOpportunity(!fullOpportunity)}}>
					<LikeIconLess />
					<span>View less</span>
				</button>
				</div>
				<div className="right">
				<button onClick={()=>{router.push('/')}}>
					<ApplyIcon />
					<span>Apply</span>
				</button>
				<button onClick={()=>{router.push('/training/code')}}>
					<CommentIcon />
					<span>Training</span>
				</button>
				</div>
		  	</div> : <div className="buttons">
				<div className="left">
				<button onClick={()=>{setFullOpportunity(!fullOpportunity)}}>
					<LikeIcon />
					<span>View more</span>
				</button>
				</div>
				<div className="right">
				<button onClick={()=>{router.push('/')}}>
					<ApplyIcon />
					<span>Apply</span>
				</button>
				<button onClick={()=>{router.push('/training/code')}}>
					<CommentIcon />
					<span>Training</span>
				</button>
				</div>
			</div> }
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedOpportunity;
