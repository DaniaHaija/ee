import React, { useEffect, useState } from 'react'
import style from './Proudcts.module.css'

export default function Proudcts() {
  const[search,setsearch]=useState('');
  const [products,setproudcts]=useState([]);

  const setdata = async()=>{
    const respons= await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const data= await respons.json(); 
    setproudcts(data.products);
  }
  useEffect(()=>{
    setdata();
  },[search])
  
 
  return (
   <>
   <input type='text' value={search} onChange={(e)=>setsearch(e.target.value)}/>
   {products.map(proudct=>
   
    <div className={style.proudct} key={proudct.id}>
      <h2>{proudct.title}</h2>
      <img className={style.img} src={proudct.thumbnail}/>

    </div>  


  
   
    
    )}
   </>
  )
}
