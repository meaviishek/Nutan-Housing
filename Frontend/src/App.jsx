import { useState } from 'react'
import { Footer, Header,Floating } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Floating/>
      <Footer/>
    </>
  )
}

export default App
