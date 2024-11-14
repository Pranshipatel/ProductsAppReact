import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Detail from '../components/Detail'

const AppRoutes = () => {
  return (
    <div className='w-screen h-screen flex'>
      <Link to='/' className='text-red-500 absolute left-[18%] top-[5%]'>Home</Link>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/detail/:id' element={<Detail/>}/>
     </Routes>
    </div>
  )
}

export default AppRoutes
