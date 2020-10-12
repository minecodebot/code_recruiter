import React, { useState, useEffect } from 'react'
import MiddleColumn from './MiddleColumn'
import OneColumn from '../../OneColumn'

export interface Props {
  isLoading: boolean
}

const LayoutProfileId: React.FC<Props> = ({ isLoading }) => {
  // const [isLoading, setLoading] = useState(true)
  const Column = OneColumn(MiddleColumn)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  return <Column isLoading={isLoading} />
}

export default LayoutProfileId
