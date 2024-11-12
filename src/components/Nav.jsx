import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [products] = useContext(ProductContext)
  let distinct_category = products && products.reduce((acc,cv) => [...acc , cv.category],[])
  distinct_category = [...new Set(distinct_category)];
  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
    <a
    className='py-2 px-5 border rounded border-blue-200 text-blue-300'
    href='/create'
    >
      Add New Product
    </a>
    <hr className='my-3 w-[80%]' />
    <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
    {distinct_category.map((category,index)=>(
      <div className='w-[80%]  ' >
      <Link  to={`/?category=${category}`} className='flex items-center mb-3'>
        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span>{" "}
         {category}
      </Link>
      
    </div>
    ))}
    
    </nav>
  )
}

export default Nav
