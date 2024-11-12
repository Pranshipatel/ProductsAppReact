import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Detail from '../components/Detail'

const AppRoutes = () => {
  return (
    <div className='w-screen h-screen flex'>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/detail/:id' element={<Detail/>}/>
     </Routes>
    </div>
  )
}

export default AppRoutes
