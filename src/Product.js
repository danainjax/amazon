import React from 'react'
import ItemDescription from './ItemDescription'

function Product({ name, description, price }) {
  return (
    <div>
      <ItemDescription name={name} description={description} />
      <li>${price}</li>
    </div>
  )
}

export default Product
