import React from 'react'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanel from '../../../ProfilePanel'
import SkillsPanel from '../../../SkillsPanel'
import TrainingPanel from '../../../TrainingPanel'
import { Container } from './styles'
import LoadingExamTrainingPanel from '../../../Shimmer/LoadingExamTrainingPanel'
import { userInterface } from '../../../Interface'
export interface Props {
  me: userInterface
}

const RightColumn: React.FC<Props> = ({ me }) => {
  return (
    <Container className="left-column">
      {me === undefined ? (
        <>
          <LoadingProfilePanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
          <LoadingExamTrainingPanel />
        </>
      ) : (
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
      )}
    </Container>
  )
}

export default RightColumn
