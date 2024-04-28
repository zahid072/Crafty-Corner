import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({subCategory}) => {
  return (
   <>
   <Link to={`/categoryCraft/${subCategory.subcategory_Name}`}>
    <div className='card rounded shadow-xl px-4 border py-3 cursor-pointer font-poppins font-medium'>
      <div className='w-48 bg-blue-gray-200 p-2 rounded'>
      <img className='h-36 mx-auto' src={subCategory.image} alt="" />
      </div>
      <h1 className='text-center mt-3'>{subCategory.subcategory_Name}</h1>
    </div>
   </Link>
   </>
  )
}

export default CategoryCard
