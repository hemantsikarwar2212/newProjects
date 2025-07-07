import React, { useEffect } from 'react'
import { useProducts } from '../../context/DataContext'

export const Carousel = () => {
  const { data,fetchAllProducts } = useProducts();
  console.log(data);
  
  
useEffect(()=>{
  fetchAllProducts()
},[])

  return (
    <div></div>
  )
}
