import React from 'react'

const CategoryPageCard = ({artCraft}) => {
  console.log("card",artCraft)

  return (
    <div>
      <div>
        <h1>{artCraft.item_name}</h1>
      </div>
    </div>
  )
}

export default CategoryPageCard
