import React from 'react'
import ProfileCard from './constants/ProfileCard'

function App() {
  return (
    <div className=' h-dvh flex flex-col gap-10 justify-center items-center'>
      <ProfileCard name="Furqan Qadri" age="24" job="Software Engineer" city="Kuala Lumpur"/>
    </div>
  )
}

export default App