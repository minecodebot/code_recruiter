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
import LoadingDesktopHeader from '../Shimmer/LoadingDesktopHeader'

export interface Props {
  isLoading: boolean
  me: {
    name: string
    surname: string
    company: string
    carrer_path: string
    job_situation: string
    job_title: string
    presentation_letter: string
    avatar: {
      avatarStyle: string
      topType: string
      accessoriesType: string
      hairColor: string
      facialHairType: string
      clotheType: string
      eyeType: string
      eyebrowType: string
      mouthType: string
      skinColor: string
    }
    competences: string[]
    suggestedTrainings: {
      id: number
      title: string
      level: string
    }[]
    completedTrainings: {
      id: number
      title: string
      level: string
    }[]
    exams: {
      title: string
      description: string
      date: string
      level: string
      status: string
    }[]
  }
}

const Header: React.FC<Props> = ({ isLoading, me }) => {
  const router = useRouter()

  return (
    <Container>
      {isLoading ? (
        <LoadingDesktopHeader />
      ) : (
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
      )}
    </Container>
  )
}

export default Header
