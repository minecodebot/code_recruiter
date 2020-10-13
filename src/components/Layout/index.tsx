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
import { userInterface, trainingInterface, postInterface } from '../Interface'

export interface Props {
  isLoading: boolean
  me: userInterface
  trainings?: trainingInterface[]
  posts?: postInterface[]
  user?: userInterface
}

const Layout: React.FC<Props> = ({ isLoading, me, trainings, posts, user }) => {
  const router = useRouter()
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader me={me} />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        {router.pathname === '/' ? (
          <>
            <HomeLeftColumn posts={posts} />
            <HomeRightColumn me={me} />
          </>
        ) : router.pathname === '/exams' ? (
          <ExamsMiddleColumn me={me} />
        ) : router.pathname === '/trainings' ? (
          <TrainingsMiddleColumn me={me} trainings={trainings} />
        ) : router.pathname === '/profile/me' ? (
          <ProfileMeMiddleColumn me={me} />
        ) : router.pathname === '/profile/edit' ? (
          <ProfileEditMiddleColumn me={me} />
        ) : router.pathname.includes('/profile/user/') ? (
          <ProfileIdMiddleColumn user={user} />
        ) : (
          <></>
        )}
      </main>
    </Container>
  )
}

export default Layout
