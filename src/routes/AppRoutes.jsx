import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../components/Home'
import Detail from '../components/Detail'
import Create from '../components/Create'

const AppRoutes = () => {
  const {search , pathname} = useLocation();

  return (
    <div className='w-screen h-screen flex'>
      {(pathname !== '/' || search.length >0) && (
      <Link to='/' className='text-red-500 absolute left-[18%] top-[5%]'>Home</Link>
      )}
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/create' element={<Create/>}/>
     <Route path='/detail/:id' element={<Detail/>}/>
     </Routes>
    </div>
  )
}

export default AppRoutes
