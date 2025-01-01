import React, { useState } from 'react'
import Link from 'next/link';

const hetter = ({ pagiNation, setPagiNationNumber }) => {

  const [pagiNationNumber, setPagiNationNumber] = useState(['１','２','３','４','５','EX'])

  return (
    <div className='absolute top-0 left-0 py-5 w-screen flex items-center justify-center shadow-lg'>
      <button className="absolute left-5">
        <p className='font-bold text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:via-purple-500 hover:via-pink-500 hover:to-cyan-400'>
          戻る
        </p>
      </button>
      <p className='font-bold'>{pagiNationNumber[pagiNation - 1]}/ ５問目</p>
    </div>
  )
}

export default hetter