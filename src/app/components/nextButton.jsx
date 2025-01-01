import React from 'react'

const nextButton = ({ pagiNation, setPagiNation }) => {
  return (
    <button
      className="absolute bottom-5 right-5 font-bold text-2xl text-black bg-white py-5 w-60 border-black border-2 rounded-full hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:via-purple-500 hover:via-pink-500 hover:to-cyan-400 transition-all"
      onClick={() => setPagiNation(pagiNation + 1)}
    >
      Next
    </button>
  )
}

export default nextButton