import React, { useState, useEffect } from 'react'
import MobileHeader from '../../MobileHeader'
import DesktopHeader from '../../DesktopHeader'
import AdBanner from '../../AdBanner'
import LeftColumn from './LeftColumn'
import MiddleColumn from './MiddleColumn'
import { Container } from '../styles'

const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <MiddleColumn isLoading={isLoading} />
        <LeftColumn isLoading={isLoading} />
      </main>
    </Container>
  )
}

export default Layout
