'use client'

import React, { useState } from 'react'
import Hetter from '../components/hetter'
import NextButton from '../components/nextButton'
import Page from './page'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'

const Layout = () => {

  const [question1, setQuestion1] = useState('')
  const [pagiNation, setPagiNation] = useState(1)

  return (
    <div className='relative h-screen'>
      <Hetter pagiNation={pagiNation} setPagiNation={setPagiNation}/>



      <NextButton pagiNation={pagiNation} setPagiNation={setPagiNation}/>
    </div>
  )
}

export default Layout
