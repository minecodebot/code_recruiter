import React from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Wrapper,
  LinkedInIcon,
  ProfileCircle,
  TrainingIcon,
  ExamIcon,
  AddJob,
  AddExam,
  AddTraining
} from './styles'

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
            {router.pathname.includes('/admin') ? (
              <>
                <button
                  onClick={() => {
                    router.push('/add/job')
                  }}
                >
                  <AddExam />
                  <span>Add Exam</span>
                </button>
                <button
                  onClick={() => {
                    router.push('/add/job')
                  }}
                >
                  <AddTraining />
                  <span>Add Training</span>
                </button>
                <button
                  onClick={() => {
                    router.push('/add/job')
                  }}
                >
                  <AddJob />
                  <span>Add Job Opportunity</span>
                </button>
              </>
            ) : (
              <>
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
                  <ProfileCircle src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" />
                  <span>Me</span>
                </button>
              </>
            )}
          </nav>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Header
