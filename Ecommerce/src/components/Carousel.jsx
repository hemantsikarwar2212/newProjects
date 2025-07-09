import React, { useEffect } from 'react'
import { useProducts } from '../../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = () => {
  const { data,fetchAllProducts } = useProducts();
  console.log(data);
  
  
useEffect(()=>{
  fetchAllProducts()
},[])

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  return (
    <div>
      <Slider{...settings}>
        {
          data?.slice(0,7).map((item,index)=>{
            return <div key={index} className='bg-gradient-to-r from-green-800 to-green-500 '>
              <div className='flex gap-10 justify-center h-[600px] items-center px-4'>
                <div className='space-y-6'>
                    <h3 className='text-black-500 font-semibold font-sans text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum necessitatibus eaque nobis reiciendis dignissimos asperiores, deleniti blanditiis cumque quisquam ut.
                    </h3>
                    <h1 className='text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
                    <p className='md:w-[400px] line-clamp-3 text-gray-400 pr-7 '>{item.description}</p>
                    <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
                </div>
                <div><img src={item.image} alt={item.title}  className='rounded-full w-[550px] hover:scale-105 transition-all  shadow-2xl shadow-red-400'/></div>
              </div>

            </div>
          })
        }
        <div>
          <h3></h3>
        </div>
        
      </Slider>
    </div>
  );
}
