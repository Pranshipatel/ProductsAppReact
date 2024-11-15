import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { ProductContext } from '../utils/Context'
import { toast } from 'react-toastify'


const Edit = () => {
    const [products , setproducts] = useContext(ProductContext)
    const {id} = useParams()
    const [product , setproduct] = useState({
        image:"",
        title:"",
        category:"",
        price:"",
        description:""
    })

    const changeHandler = (e)=>{
      setproduct({...product , [e.target.name]:e.target.value})
    }
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        setproduct(products.filter((p)=> p.id == id)[0])
    },[id])

    const AddProductHandler = (e)=>{
        e.preventDefault();

        if(
            product.image.trim().length < 4 || 
            product.title.trim().length < 4 || 
            product.category.trim().length < 4 ||
            product.description.trim().length < 4 || 
            product.price.length < 1 
        ){
           toast.success("Inputs must have atleast 4")
           return
        }
        const pi = products.findIndex((p) => p.id == id)
        const copyData = [...products]
        copyData[pi] = {...products[pi] , ...product}
       
        setproducts(copyData);
        localStorage.setItem("products",JSON.stringify(copyData))
        toast.success("Product updated successfully")
        navigate(-1)
    }

  return (
    <div className='w-full h-screen'>
            
    <form onSubmit={AddProductHandler}
    className='w-[40%] h-full m-auto flex items-center justify-center flex-col gap-4' action="">
    <h1 className='text-3xl font-semibold '>Update Products</h1>
    <input
        type="url"
        placeholder='Enter image url'
        className='bg-zinc-200 p-2 w-[100%] outline-none rounded border-none'
        onChange={changeHandler}
        name='image'
        value={product && product.image}
    />
    <input
        type="text"
        placeholder='Enter title'
        className='bg-zinc-200 p-2 w-[100%] outline-none rounded border-none'
        onChange={changeHandler}
        name='title'
        value={product && product.title}
    />
    <div className='w-[100%] flex justify-between'>
    <input
        type="text"
        placeholder='Enter category'
        className='bg-zinc-200 p-2 w-[48%] outline-none rounded border-none'
        onChange={changeHandler}
        name='category'
        value={product && product.category}
    />
     <input
        type="number"
        placeholder='Enter price'
        className='bg-zinc-200 p-2 w-[48%] outline-none rounded border-none'
        onChange={changeHandler}
        name='price'
        value={product && product.price}
    />
    </div>
    <textarea
    type="text"
    placeholder='Enter description'
    className='bg-zinc-200 p-2 w-[100%] outline-none rounded border-none'
    onChange={changeHandler}
    name='description'
    value={product && product.description}
    >

    </textarea>
    <button className='py-2 px-5 border rounded border-blue-200 text-blue-300 self-start'>Update Products</button>

    </form>
    </div>
  )
}

export default Edit
