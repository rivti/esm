import React, { useEffect } from "https://esm.sh/react@18.2.0"
import confetti from "https://esm.sh/canvas-confetti@1.6.0"
import { Button } from "https://esm.sh/@mui/material@5.11.15"

const App = () => {
  useEffect(() => {
    confetti()
  }, [])

  return (
    <div>
      <h1>Hello React! 222⚛️</h1>
      <p>Building user interfaces.</p>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}

export default App
