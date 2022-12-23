import './Products.css'
import Plane from '../assets/plane.png'
import { ProductsData } from '../data/products'
import Product from './Product'
import {useState} from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Products = () => {

const [parent]=useAutoAnimate()
    const [data,setData]=useState(ProductsData)


    const filter =(value)=> {
   setData(ProductsData.filter((item)=>item.type===value))
    }
  return (
    <div className='products'>
        <div className="productsHeader">
            <img src={Plane} alt="" />
            <h1>Our Products</h1>
        </div>

        <div className="productsContainer">
            <div className="left">
<span onClick={()=>setData(ProductsData)}>All</span>
<span onClick={()=>filter('skin care')}>Skin Care</span>
<span  onClick={()=>filter('conditioner')}>Conditioners</span>
<span  onClick={()=>filter('foundation')}>Foundations</span>
            </div>
            <div className="right" ref={parent}>
{data.map((value)=>((
    <Product product={value}/>
)))}
            </div>
        </div>
    </div>
  )
}

export default Products