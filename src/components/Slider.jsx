import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderProducts } from '../data/products';
import Slide from './Slide'


const Slider = () => {
  return (
    <div className='swiper_container'>
<Swiper
className='theSwiper'
modules={[Navigation,Pagination]}
navigation={true}
spaceBetween={20}
slidesPerView={3}
slidesPerGroup={1}
loop={true}
loopFillGroupWithBlank={true}
breakpoints={{
 1046:{slidesPerView:3},
  640:{slidesPerView:2},
  0:{slidesPerView:1}
}}



>
    


{SliderProducts.map((slide)=>{

    return(
        <SwiperSlide>
          <Slide  slide={slide}/>
        </SwiperSlide>
    )
})}
  
</Swiper>



    </div>
  )
}

export default Slider