import './Footer.css'
import Logo from '../assets/logo.png'
import Fline from '../components/Fline'
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {VscSignIn} from 'react-icons/vsc'
import {BsPeople} from 'react-icons/bs'
import {AiOutlineSafety} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="theFooter">
    <div className='fWrapper'>
<div className='fLogo'> <img src={Logo} alt="" />
<span>amazon</span>
</div>
<div  className='block'>
  <h3>Contact us</h3>
  <Fline icon={<GoLocation/>} title ={'USE - NewYork'}/>
  <Fline  icon ={<BsTelephone />} title={'112 321 546'}/>
  <Fline icon ={<AiOutlineMail/> } title ={'aaa@aaa.com'}/>
</div>
<div  className='block'>
  <h3>Account</h3>
  <Fline  icon = {<VscSignIn/>} title ={'Sign in'}/>
  
  </div>
<div  className='block'>
  <h3>Company</h3>
  <Fline  icon ={<BsPeople />} title={'About us'}/>
  </div>
<div  className='block'>
  <h3>Resources</h3>
  <Fline  icon ={<AiOutlineSafety/>} title={'Safety Privacy and Terms'} />
  </div>

    </div>
    <div className="end">
      <span>Developed By Ammar </span>
      <span>2022</span>
    </div>
    </div>
  )
}

export default Footer