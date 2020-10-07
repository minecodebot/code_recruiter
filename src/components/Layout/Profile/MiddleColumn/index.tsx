import React from 'react';
import { useRouter } from 'next/router'

import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel';
import ProfilePanel from '../../../ProfilePanel';
import HashtagPanel from '../../../SkillsPanel';
import TrainingPanel from '../../../TrainingPanel';
import CompletedTrainingPanel from '../../../CompletedTrainingPanel';
import { Container, LikeIcon, Row } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  const router = useRouter()
  const competences = [['Competence 1', false],['Competence 2', false],['Competence 3', false],['Competence 4', false],['Competence 5', true],['Competence 6', true]]
  return (
    <Container className="middle-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <Row className='actions'>
		  <button onClick={()=>{router.push('/profile/edit')}}>
            <LikeIcon />
            <span>Edit Profile</span>
          </button>
          <ProfilePanel />
          <HashtagPanel tags={competences}/>
		  <CompletedTrainingPanel />
          <TrainingPanel />
        </Row>
      )}
    </Container>
  );
};

export default MiddleColumn;
