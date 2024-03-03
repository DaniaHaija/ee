import React, { useEffect, useState } from 'react'

export default function Catagrie() {
  const [categories,setcat] =useState([]);
  const setdatat= async()=>{
    const respons= await fetch(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
    const data = await respons.json();
    setcat(data.categories)
  }
  useEffect(()=>{
    setdatat();
  },[])
  return (
    <>
    {categories.map(e=>
     <div className='categre' key={e.id}>
     <h2>{e.name}</h2>
     <img src={e.image.secure_url}/>

     </div> 
      
      )}
    </>
  )
  
  
}
