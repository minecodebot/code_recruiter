import React from 'react'
import HomeLeftColumn from './Home/LeftColumn'
import HomeRightColumn from './Home/RightColumn'
import ExamsMiddleColumn from './Exams/MiddleColumn'
import TrainingsMiddleColumn from './Trainings/MiddleColumn'
import ProfileMeMiddleColumn from './Profile/Me/MiddleColumn'
import ProfileIdMiddleColumn from './Profile/Id/MiddleColumn'
import ProfileEditMiddleColumn from './Profile/Edit/MiddleColumn'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'
import AdBanner from '../AdBanner'
import { Container } from './styles'
import { useRouter } from 'next/router'

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
  trainings?: {
    id: number
    title: string
    level: string
  }[]
  posts?: {
    title: string
    company: string
    post_date: string
    short_description: string
    long_description: string
    competences: string[]
    exam: number
    trainings: number[]
  }[]
  user?: {
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

const Layout: React.FC<Props> = ({ isLoading, me, trainings, posts, user }) => {
  const router = useRouter()
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader isLoading={isLoading} me={me} />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        {router.pathname === '/' ? (
          <>
            <HomeLeftColumn isLoading={isLoading} posts={posts} />
            <HomeRightColumn isLoading={isLoading} me={me} />
          </>
        ) : router.pathname === '/exams' ? (
          <ExamsMiddleColumn isLoading={isLoading} me={me} />
        ) : router.pathname === '/trainings' ? (
          <TrainingsMiddleColumn
            isLoading={isLoading}
            me={me}
            trainings={trainings}
          />
        ) : router.pathname === '/profile/me' ? (
          <ProfileMeMiddleColumn isLoading={isLoading} me={me} />
        ) : router.pathname === '/profile/edit' ? (
          <ProfileEditMiddleColumn isLoading={isLoading} me={me} />
        ) : router.pathname.includes('/profile/user/') ? (
          <ProfileIdMiddleColumn isLoading={isLoading} user={user} />
        ) : (
          <></>
        )}
      </main>
    </Container>
  )
}

export default Layout
