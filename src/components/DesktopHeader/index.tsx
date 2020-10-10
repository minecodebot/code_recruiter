import React from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Wrapper,
  LinkedInIcon,
  ProfileCircle,
  TrainingIcon,
  ExamIcon
} from './styles'
import Avatar from 'avataaars'

import me from '../../data/me/index.json'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Wrapper>
        <div
          className="left homeIcon"
          onClick={() => {
            router.push('/')
          }}
        >
          <LinkedInIcon />
        </div>

        <div className="right">
          <nav>
            <button
              onClick={() => {
                router.push('/trainings')
              }}
            >
              <TrainingIcon />
              <span>Trainings</span>
            </button>

            <button
              onClick={() => {
                router.push('/exams')
              }}
            >
              <ExamIcon />
              <span>My Exams</span>
            </button>

            <button
              onClick={() => {
                router.push('/profile/me')
              }}
            >
              <Avatar
                avatarStyle={me.avatar.avatarStyle}
                topType={me.avatar.topType}
                accessoriesType={me.avatar.accessoriesType}
                hairColor={me.avatar.hairColor}
                facialHairType={me.avatar.facialHairType}
                clotheType={me.avatar.clotheType}
                eyeType={me.avatar.eyeType}
                eyebrowType={me.avatar.eyebrowType}
                mouthType={me.avatar.mouthType}
                skinColor={me.avatar.skinColor}
                style={{
                  width: '24px',
                  height: '24px'
                }}
              />
              <span>Me</span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Header
