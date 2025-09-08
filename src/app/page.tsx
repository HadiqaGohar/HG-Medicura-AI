import React from 'react'
import HomePage from './components/Home'
import HowItWorks from './components/Services'
import AsSeenOn from './components/AsSeenOn'
import HelpingAssistant from './components/HelpingAssistant'
import Banner from './components/Banner'
import FAQ from './components/FAQ'
import MovingSeparation from './components/MovingSeparation'
import BugReportButton from './components/BugReportButton'
import MovingPills from './components/Movingpills'

export default function Main() {
  return (
    <div className=''>
      <HomePage/>
      <AsSeenOn/>
            <HowItWorks/>
            {/* <MovingSeparation/> */}
            <MovingPills/>
            

      <HelpingAssistant/>
      
      <Banner/>
      
      <MovingSeparation/>
      <FAQ/>
              <BugReportButton />
    </div>
  )
}
