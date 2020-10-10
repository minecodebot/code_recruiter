import React from 'react'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../ProfilePanel'
import SkillsPanel from '../../../SkillsPanel'
import TrainingPanel from '../../../TrainingPanel'
import { Container } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'

import me from '../../../../data/me/index.json'

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : me ? (
        <>
          <ProfilePanel
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrer_path={me.carrer_path}
            job_situation={me.job_situation}
            job_title={me.job_title}
            presentation_letter={me.presentation_letter}
            avatar={me.avatar}
            short={true}
          />
          <SkillsPanel tags={me.competences} />
          <TrainingPanel title="Completed" trainings={me.completedTrainings} />
          <TrainingPanel title="Suggested" trainings={me.suggestedTrainings} />
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default RightColumn
