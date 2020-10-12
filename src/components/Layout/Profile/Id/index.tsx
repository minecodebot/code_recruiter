import React, { useState, useEffect } from 'react'
import MiddleColumn from './MiddleColumn'
import OneColumn from '../../OneColumn'

export interface Props {
  user: string | string[]
}

const LayoutProfileId: React.FC<Props> = ({ user }) => {
  const [isLoading, setLoading] = useState(true)
  const Column = OneColumn(MiddleColumn)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return <Column isLoading={isLoading} user={user} />
}

export default LayoutProfileId
