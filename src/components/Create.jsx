import React, {  useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'

const Create = () => {
    const [products , setproducts] = useContext(ProductContext)
    const [image, setimage] = useState("")
    const [title, settitle] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")

    

    const AddProductHandler = (e)=>{
        e.preventDefault();

        if(image.trim().length < 5 || 
            title.trim().length < 5 || 
            category.trim().length < 5 ||
            description.trim().length < 5 || 
            price.trim().length < 1 
        ){
           alert("every field must have 5 characters")
           return
        }
        const product = {
            image,
            title,
            category,
            description,
            price
        }
        setproducts([...products , product]);
    }

    return (
        <div className='w-full h-screen'>
            
            <form onSubmit={AddProductHandler}
            className='w-[40%] h-full m-auto flex items-center justify-center flex-col gap-4' action="">
            <h1 className='text-3xl font-semibold '>Add Products</h1>
            <input
                type="url"
                placeholder='Enter image url'
                className='bg-zinc-200 p-2 w-[100%] outline-none rounded border-none'
                onChange={(e) => setimage(e.target.value)}
                value={image}
            />
            <input
                type="text"
                placeholder='Enter title'
                className='bg-zinc-200 p-2 w-[100%] outline-none rounded border-none'
                onChange={(e) => settitle(e.target.value)}
                value={title}
            />
            <div className='w-[100%] flex justify-between'>
            <input
                type="text"
                placeholder='Enter category'
                className='bg-zinc-200 p-2 w-[48%] outline-none rounded border-none'
                onChange={(e) => setcategory(e.target.value)}
                value={category}
            />
             <input
                type="number"
                placeholder='Enter price'
                className='bg-zinc-200 p-2 w-[48%] outline-none rounded border-none'
                onChange={(e) => setprice(e.target.value)}
                value={price}
            />
            </div>
            <textarea
            type="text"
            placeholder='Enter description'
            className='bg-zinc-200 p-2 w-[100%] outline-none rounded border-none'
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            >

            </textarea>
            <button className='py-2 px-5 border rounded border-blue-200 text-blue-300 self-start'>Add Products</button>
       
            </form>
            </div>
    )
}

export default Create
