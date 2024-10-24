
import { AdHeader,Footer } from './components'
import { Navigate, Outlet } from 'react-router-dom'


function AdvisorLayout() {
  const token = localStorage.getItem('token')
  return token ? (

     <div className="min-h-screen flex flex-col">

      <AdHeader />
      <main className="flex-grow">

        <Outlet />
      </main>
      <Footer />
   
    </div>



    
  ) : ( <Navigate to='/'/>)
}

export default AdvisorLayout