import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import {Home,About,Projects,Blogs,Contact,Career, Login, Enquire} from './components/index.js'
import App from './App.jsx'
import './index.css'
import ProjectDetails from './components/pages/ProjectDetails.jsx'
import AllBlogs from './components/pages/AllBlogs.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
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
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  
  </StrictMode>,
)
