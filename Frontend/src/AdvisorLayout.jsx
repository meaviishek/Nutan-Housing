
import { AdHeader,Footer } from './components'
import { Outlet } from 'react-router-dom'

function AdvisorLayout() {
  return (

     <div className="min-h-screen flex flex-col">
      <AdHeader />
      <main className="flex-grow">

        <Outlet />
      </main>
      <Footer />
    </div>



    
  )
}

export default AdvisorLayout