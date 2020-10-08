import React from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import { Container, LikeIcon } from './styles'

const ProfilePanelEdit: React.FC = () => {
  const router = useRouter()

  const handleSubmit = event => {
    router.push('/profile/me')
    event.preventDefault()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Panel>
          <div className="profile-cover"></div>
          <img
            src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
            alt="Avatar"
            className="profile-picture"
          />
          <div className="key-value">
            <label htmlFor="name" className="key">
              Name:
            </label>
            <input type="text" className="value" id="name" />
          </div>

          <div className="key-value">
            <label htmlFor="surname" className="key">
              Surname:
            </label>
            <input type="text" className="value" id="surname" />
          </div>

          <div className="key-value">
            <label htmlFor="jobTitle" className="key">
              Job title:
            </label>
            <input type="text" className="value" id="jobTitle" />
          </div>

          <div className="key-value">
            <label htmlFor="company" className="key">
              Company:
            </label>
            <input type="text" className="value" id="company" />
          </div>

          <div className="separator"></div>

          <div className="key-value">
            <label htmlFor="carrerPath" className="key">
              Carrer Path:
            </label>
            <select id="carrerPath" className="value">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="softwareEngineer">Software Engineer</option>
            </select>
          </div>
          <div className="key-value">
            <label htmlFor="jobSituation" className="key">
              Job Situation:
            </label>
            <select id="jobSituation" className="value">
              <option value="open">Open to new opportunity</option>
              <option value="searching">Itensive searching</option>
              <option value="notOpen">Not available to new opportunity</option>
            </select>
          </div>

          <div className="key-value">
            <label htmlFor="selftPresentationLetter" className="key">
              Self presentation letter:
            </label>
          </div>
          <div className="key-value">
            <textarea
              className="value value-all"
              id="selftPresentationLetter"
            />
          </div>
        </Panel>
        <button type="submit" className="btn btn-default">
          <LikeIcon />
          <span>Save</span>
        </button>
      </form>
    </Container>
  )
}

export default ProfilePanelEdit
