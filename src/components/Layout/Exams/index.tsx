import React, { useState, useEffect } from 'react'
import MiddleColumn from './MiddleColumn'
import OneColumn from '../OneColumn'

const LayouExams: React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const Column = OneColumn(MiddleColumn)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return <Column isLoading={isLoading} />
}

export default LayouExams
