import React from 'react';

import Panel from '../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <div className="profile-cover"></div>
        <img
          src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Name Surname</h1>
        <h2>Job Title @ Company</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Carrer path</span>
          <span className="value">Job Title</span>
        </div>
        <div className="key-value">
          <span className="key">Job Situation</span>
          <span className="value">Status</span>
        </div>
      </Panel>
    </Container>
  );
};

export default ProfilePanel;
