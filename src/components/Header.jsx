import css from './Header.module.css'
import logo from '../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'
 
const Header = () => {

  const [open,setOpen] =useState(false)
  return (
    <div className={css.header}>
<div className={css.logo}>

  <img src={logo} alt="" />
  <span>amazon</span>
</div>


<div className={css.rightHeader}>
<div className={css.bars} onClick={()=>setOpen(prev=>(!prev))}>
  <FaBars/>
</div>
<nav style={{height: open?'275px' : '0',padding:open ?'0.5rem' : '0'}}>
  
  <span>Collections</span>
  <span>Brands</span>
  <span>New</span>
  <span>Sales</span>
  <span>English</span>
  <input type="text"  placeholder='search...'/>
  
</nav>
<span className={css.icon}>{<CgShoppingBag className= {css.cart} /> }</span>


</div>


    </div>
  )
}

export default Header