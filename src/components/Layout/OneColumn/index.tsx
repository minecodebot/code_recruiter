import React, { useState, useEffect } from 'react'
import MobileHeader from '../../MobileHeader'
import DesktopHeader from '../../DesktopHeader'
import AdBanner from '../../AdBanner'
import { Container } from '../styles'

export interface Props {
  Column: React.FC
}
const OneColumn = Column => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  interface Props {
    isLoading: boolean
  }

  return class extends React.Component<Props> {
    render() {
      return (
        <Container>
          <MobileHeader />
          <DesktopHeader />

          <span>{!isLoading && <AdBanner />}</span>

          <main>
            <Column {...this.props} />
          </main>
        </Container>
      )
    }
  }
}

export default OneColumn
