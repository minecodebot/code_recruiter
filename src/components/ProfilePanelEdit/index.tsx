import React, { useState } from 'react'
import Panel from '../Panel'
import { useRouter } from 'next/router'
import { Container } from './styles'
import Button from '../Button'
import Avatar from 'avataaars'
import Modal from 'react-modal'

const ProfilePanelEdit: React.FC = () => {
  const router = useRouter()

  const handleSubmit = event => {
    router.push('/profile/me')
    console.log(event)
    event.preventDefault()
  }

  const [modalIsOpen, setIsOpen] = useState(false)
  const customStyles = {
    content: {
      backgroundColor: 'var(--color-medium)',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  const avatars = [
    {
      avatarStyle: 'Circle',
      topType: 'LongHairStraight',
      accessoriesType: 'Blank',
      hairColor: 'BrownDark',
      facialHairType: 'Blank',
      clotheType: 'BlazerShirt',
      eyeType: 'Default',
      eyebrowType: 'Default',
      mouthType: 'Default',
      skinColor: 'Light'
    },
    {
      avatarStyle: 'Circle',
      topType: 'Eyepatch',
      accessoriesType: 'Round',
      hairColor: 'Black',
      facialHairType: 'Blank',
      facialHairColor: 'Black',
      clotheType: 'ShirtCrewNeck',
      clotheColor: 'Black',
      eyeType: 'Happy',
      eyebrowType: 'Default',
      mouthType: 'Twinkle',
      skinColor: 'Tanned'
    },
    {
      avatarStyle: 'Circle',
      topType: 'ShortHairDreads01',
      accessoriesType: 'Prescription02',
      hairColor: 'Auburn',
      facialHairType: 'BeardMagestic',
      facialHairColor: 'Auburn',
      clotheType: 'ShirtScoopNeck',
      clotheColor: 'Heather',
      eyeType: 'Wink',
      eyebrowType: 'SadConcernedNatural',
      mouthType: 'Smile',
      skinColor: 'Brown'
    },
    {
      avatarStyle: 'Circle',
      topType: 'ShortHairTheCaesarSidePart',
      accessoriesType: 'Blank',
      hairColor: 'BlondeGolden',
      facialHairType: 'BeardMedium',
      facialHairColor: 'BrownDark',
      clotheType: 'ShirtCrewNeck',
      clotheColor: 'PastelOrange',
      eyeType: 'EyeRoll',
      eyebrowType: 'RaisedExcited',
      mouthType: 'Tongue',
      skinColor: 'Black'
    },
    {
      avatarStyle: 'Circle',
      topType: 'LongHairFroBand',
      accessoriesType: 'Wayfarers',
      hairColor: 'Auburn',
      facialHairType: 'BeardLight',
      facialHairColor: 'Black',
      clotheType: 'BlazerShirt',
      clotheColor: 'White',
      eyeType: 'Default',
      eyebrowType: 'SadConcernedNatural',
      mouthType: 'Sad',
      skinColor: 'Tanned'
    }
  ]
  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false)
        }}
        contentLabel="Modal"
        style={customStyles}
      >
        {avatars.map(element => {
          console.log(element)
          return (
            <button
              className="profile-picture"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Avatar
                avatarStyle={element.avatarStyle}
                topType={element.topType}
                accessoriesType={element.accessoriesType}
                hairColor={element.hairColor}
                facialHairType={element.facialHairType}
                clotheType={element.clotheType}
                eyeType={element.eyeType}
                eyebrowType={element.eyebrowType}
                mouthType={element.mouthType}
                skinColor={element.skinColor}
              />
            </button>
          )
        })}
      </Modal>
      <form onSubmit={handleSubmit}>
        <Panel>
          <div className="profile-cover"></div>
          <button
            type="button"
            className="profile-picture"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <Avatar
              avatarStyle="Circle"
              topType="LongHairStraight"
              accessoriesType="Blank"
              hairColor="BrownDark"
              facialHairType="Blank"
              clotheType="BlazerShirt"
              eyeType="Default"
              eyebrowType="Default"
              mouthType="Default"
              skinColor="Light"
            />
          </button>
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
  )
}

export default ProfilePanelEdit
