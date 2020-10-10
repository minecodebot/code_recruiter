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
