import React from 'react'

const CategoryCard = ({subCategory}) => {
  return (
    <div className='card rounded shadow-xl px-4 border py-3'>
      <div className='w-40 bg-blue-gray-200 p-2 rounded'>
      <img className='h-36 mx-auto' src={subCategory.image} alt="" />
      </div>
      <h1 className='text-center mt-3'>{subCategory.subcategory_Name}</h1>
    </div>
  )
}

export default CategoryCard
