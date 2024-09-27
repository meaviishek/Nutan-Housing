import { useState,useEffect } from 'react'
import { Footer, Header,Floating, Logo,Login } from './components'
import { Outlet } from 'react-router-dom'
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (in real projects, you can use window.onload or actual API/content loading)
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Delay for 2 seconds to simulate load

    return () => clearTimeout(loadTimeout); // Cleanup on unmount
  }, []);



  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
    {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          {/* Spinner or any image */}
          <img src={Logo} alt="Loading..." className="w-36 h-24 animate-pulse" />
        </div>
      ) : (
      <div className='transition-all duration-700 ease-in-out'>
        <div className='relative'>
      <Header openLogin={openLogin} />
      {isLoginOpen && <Login closeLogin={closeLogin} />}
      </div>
      <main>
        <Outlet/>
      </main>
      <Floating/>
      <Footer/></div> )}
    </>
  )
}

export default App
