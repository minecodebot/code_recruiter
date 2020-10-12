import React, { useState, useEffect } from 'react'
import MiddleColumn from './MiddleColumn'
import OneColumn from '../../OneColumn'

export interface Props {
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

const LayoutProfileMe: React.FC<Props> = ({ me }) => {
  const [isLoading, setLoading] = useState(true)
  const Column = OneColumn(MiddleColumn)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return <Column isLoading={isLoading} me={me} />
}

export default LayoutProfileMe
