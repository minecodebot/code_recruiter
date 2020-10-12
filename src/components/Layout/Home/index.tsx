import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import MobileHeader from '../../MobileHeader'
import DesktopHeader from '../../DesktopHeader'
import AdBanner from '../../AdBanner'
import { Container } from '../styles'

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
  posts: {
    title: string
    company: string
    post_date: string
    short_description: string
    long_description: string
    competences: string[]
    exam: number
    trainings: number[]
  }[]
}

const LayoutHome: React.FC<Props> = ({ isLoading, me, posts }) => {
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader isLoading={isLoading} me={me} />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} posts={posts} />
        <RightColumn isLoading={isLoading} me={me} />
      </main>
    </Container>
  )
}

export default LayoutHome
