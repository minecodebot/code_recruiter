import React, { useState, useEffect } from 'react'
import MiddleColumn from './MiddleColumn'
import RightColumn from './RightColumn'
import TwoColumns from '../TwoColumns'

const LayoutEditProfile: React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const Columns = TwoColumns(MiddleColumn, RightColumn)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return <Columns isLoading={isLoading} />
}

export default LayoutEditProfile
