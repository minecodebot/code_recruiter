import React from 'react'
import LoadingProfilePanel from '../../../Shimmer/LoadingProfilePanel'
import ProfilePanelEdit from '../../../ProfilePanelEdit'
import { Container, Row } from './styles'

import me from '../../../../data/me/index.json'

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingProfilePanel />
        </>
      ) : (
        <Row className="actions">
          <ProfilePanelEdit
            name={me.name}
            surname={me.surname}
            company={me.company}
            carrer_path={me.carrer_path}
            job_situation={me.job_situation}
            job_title={me.job_title}
            presentation_letter={me.presentation_letter}
            avatar={me.avatar}
          />
        </Row>
      )}
    </Container>
  )
}

export default MiddleColumn
