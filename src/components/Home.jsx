import  { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {
  const [products] = useContext(ProductContext);
  return ( products ? (
    <>
        <Nav/>
      <div className="  p-10 w-[85%] pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
       

       {products.map((product,index)=>(
        <Link key={index} to={`/detail/${product.id}`} className='card mr-3  p-3 border shadow  rounded w-[18%] h-[35vh] flex-col  flex justify-center items-center'>
       <div
       className='hover:scale-105 mb-3 w-full  h-[80%] bg-contain bg-center bg-no-repeat '
       style={{
        backgroundImage: `url(${product.image})`,
       }}
       >
       </div>
       <h1 className='hover:text-blue-300'>{product.title}</h1>
       </Link>
       ))}

       

      </div>
    </>
  ):<Loading/>
    
  )
}

export default Home
