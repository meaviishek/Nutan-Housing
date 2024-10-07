import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import {Home,About,Projects,Blogs,Contact,Career, Login, Enquire,Plot, Emi,AdvisorDash,Team,Incentive,CustomerDetails} from './components/index.js'
import AdvisorLayout from './AdvisorLayout.jsx'
import MainLayout from './MainLayout.jsx'
import './index.css'
import ProjectDetails from './components/pages/ProjectDetails.jsx'
import AllBlogs from './components/pages/AllBlogs.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<MainLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='career' element={<Career/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='enquire' element={<Enquire/>}/>
      <Route path='/projects/:id' element={<ProjectDetails/>}/>
      <Route path="/blogs/:id" element={<AllBlogs />} />
      <Route path='plot' element={<Plot/>}/>
      <Route path='emi_calc' element={<Emi/>}/>

    
      </Route>
       <Route path="advisor" element={<AdvisorLayout />}>
       <Route path="dashboard" element={<AdvisorDash/>} />
       
    
       <Route path="incentive" element={<Incentive />} />
       <Route path="team" element={<Team />} />
       <Route path="customer-details" element={<CustomerDetails />} />
     </Route>
     </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  
  </StrictMode>,
)
