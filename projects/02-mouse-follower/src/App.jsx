import { useEffect, useState } from 'react'
import FollowMouse from './components/FollowMouse'

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button
        onClick={() => {
          setMounted(!mounted)
        }}
      >
        {mounted ? 'Mounted' : 'Unmounted'} component
      </button>
    </main>
  )
}

export default App
