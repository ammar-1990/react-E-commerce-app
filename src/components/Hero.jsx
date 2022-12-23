import css from './Hero.module.css'
import HeroImg from '../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className={css.hero}>

        <div className={css.sides}>
<span className={css.textOne}>skin protection creams</span>
<div className={css.textTwo}>
    <span >Trendy Collections</span>
    <span>Seedily say has suitable disposal and boy . Exercise joy man children rejoiced</span>
</div>
        </div>
        <div className={css.middle}>
            <motion.div
            initial={{top:'45%'}}
            whileInView={{top:'50%'}}
            transition={{duration:3,type:'spring'}}
            className={css.circle}></motion.div>
            <motion.img 
            initial={{transform:'translateY(+20px)'}}
            whileInView={{transform:'translateY(0px)'}}
            transition={{duration:3,type:'spring'}}
            src={HeroImg} alt="" />
            <motion.div
             initial={{right:'4%'}}
             whileInView={{right:'2%'}}
             transition={{duration:3,type:'spring'}}
            className={css.signup}>
                <div className={css.left_icon}><RiShoppingBagFill /></div>
                <div className={css.tosign}><div className={css.toTitle}>Best Sign up Offers</div>
                <div className={css.rightIcon}><BsArrowRight className={css.rightTheIcon}/></div></div>
            </motion.div>
        </div>


        <div className={css.sides}>
            <div className={css.traffic}>
                <span  >200k</span>
                <span>Monthly Traffic</span>
            </div>

            <div className={css.costumer}>
                <span  >100k</span>
                <span>Happy Costumers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero