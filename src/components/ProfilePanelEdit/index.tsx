import React, { useState } from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import { Container, LikeIcon } from './styles'
import Button from '../Button'

const ProfilePanelEdit: React.FC = () => {
  const reqSvgs = require.context('../../assets/Avatares', true, /\.svg$/)
  const allSvgFilePaths = reqSvgs.keys()

  const router = useRouter()

  const handleSubmit = event => {
    router.push('/profile/me')
    event.preventDefault()
  }

  const [modal, setModal] = useState(false)

  return (
    <>
      <Container>
        <div>
          {modal ? (
            allSvgFilePaths.map(item => {
              console.log(item)
              console.log(`../../assets/Avatares/${item.split('./')[1]}`)
              import(`../../assets/Avatares/${item.split('./')[1]}`).then(
                Icon => (
                  <div key={item} className="icon">
                    <Icon />
                  </div>
                )
              )
              // <img
              //   // src={'../../assets/Avatares' + item.split('.', 2)[1] + '.svg'}
              //   src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
              //   alt="Avatar"
              //   className="profile-picture list"
              //   onClick={() => {
              //     setModal(!modal)
              //   }}
              // />
            })
          ) : (
            <></>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <Panel>
            <div className="profile-cover"></div>
            <img
              src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
              alt="Avatar"
              className="profile-picture"
              onClick={() => {
                setModal(!modal)
              }}
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
                <option value="notOpen">
                  Not available to new opportunity
                </option>
              </select>
            </div>

            <div className="separator"></div>

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
          <button type="submit">
            <Button type="save" />
          </button>
        </form>
      </Container>
    </>
  )
}

export default ProfilePanelEdit
