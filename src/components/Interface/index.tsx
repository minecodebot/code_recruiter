export interface userInterface {
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

export interface postInterface {
  title: string
  company: string
  post_date: string
  short_description: string
  long_description: string
  competences: string[]
  exam: number
  trainings: number[]
}

export interface trainingInterface {
  id: number
  title: string
  level: string
}
