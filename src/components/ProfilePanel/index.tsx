import React from 'react'
import Panel from '../Panel'
import { Container } from './styles'
import {
  uniqueNamesGenerator,
  Config,
  names,
  starWars
} from 'unique-names-generator'

export interface Props {
  personalDataHidden?: boolean
}

const ProfilePanel: React.FC<Props> = ({ personalDataHidden }) => {
  const config: Config = {
    dictionaries: [names, starWars],
    length: 2,
    style: 'capital'
  }
  const characterName: string = uniqueNamesGenerator(config) // Winona
  let name = 'Name Surname'
  if (personalDataHidden) {
    name = characterName.split('_').join(' ')
  }
  return (
    <Container>
      <Panel>
        <div className="profile-cover"></div>
        <img
          src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>{name}</h1>
        {personalDataHidden ? <></> : <h2>Job Title @ Company</h2>}

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Carrer path</span>
          <span className="value">Job Title</span>
        </div>
        <div className="key-value">
          <span className="key">Job Situation</span>
          <span className="value">Status</span>
        </div>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Presentation Letter</span>
          {personalDataHidden ? (
            <span className="value">Formal, Friendly</span>
          ) : (
            <></>
          )}
        </div>
        {personalDataHidden ? (
          <></>
        ) : (
          <div className="key-value">
            <span className="value">
              asdsd hasjdhas jkhasdjk ashdja hdjk asjdk hasdjk asdsd hasjdhas
              jkhasdjk ashdja hdjk asjdk hasdjk asdsd hasjdhas jkhasdjk ashdja
              hdjk asjdk hasdjk asdsd hasjdhas jkhasdjk ashdja hdjk asjdk hasdjk{' '}
              asdsd hasjdhas jkhasdjk ashdja hdjk asjdk hasdjk asdsd hasjdhas
              jkhasdjk ashdja hdjk asjdk hasdjk asdsd hasjdhas jkhasdjk ashdja
              hdjk asjdk hasdjk{' '}
            </span>
          </div>
        )}
      </Panel>
    </Container>
  )
}

export default ProfilePanel
