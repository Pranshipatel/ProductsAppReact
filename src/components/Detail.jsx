import axios from '../utils/Axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'

const Detail = () => {
    const [product, setproduct] = useState(null)
    const { id } = useParams()
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`);
            setproduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])
    return (product ? (
        <div className=' w-[80%] h-full m-auto p-[10%] flex items-center'>

            <img className='w-[33%] h-[80%]' src={`${product.image}`} alt="" />

            <div className='w-[66%]  h-[80%] p-4 px-[10%] '>
                <h1 className='text-5xl font-semibold'>{product.title}</h1>
                <h3 className='text mt-2  text-md text-gray-400 font-medium'>{product.category}</h3>
                <h2 className='text-red-400 mt-3 mb-3'>{product.price}</h2>
                <p className='text-lg font-medium mb-4'>{product.description}</p>
                <Link
                    className='py-2 mr-2 px-5 border rounded border-blue-300 text-blue-300'
                >Edit</Link>
                <Link
                    className='py-2 mr-2 px-5 border rounded border-red-600 text-red-600'
                >Delete</Link>
            </div>
        </div>

    ) : <Loading />
    )
}

export default Detail
