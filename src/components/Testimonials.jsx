import './Testimonials.css'
import hero from '../assets/testimonialHero.png'
import  {Swiper,SwiperSlide}  from 'swiper/react'
import {TestimonialsData} from '../data/testimonials'

const Testimonials = () => {
  return (
    <div className='testimonials'>
<div className="testTop">
    <div className="testLeft">
        <span>top rated</span>
        <span>seedily say has suitable disposal and boy ,Exercise joy man children rejoiced</span>
    </div>
    <div className="testCenter">
        <img src={hero} alt="" />
    </div>
    <div className="testRight">
    <span>100k</span>
        <span>happy costumers with us</span>
    </div>
</div>

<div className="testReviews">Reviews</div>
<div className="testDown">

    <Swiper
    slidesPerView={3}
    slidesPerGroup={1}
    spaceBetween={20}
    className='testCarousal'
    breakpoints={{
        1046:{slidesPerView:3},
         640:{slidesPerView:2},
         0:{slidesPerView:1}
       }}
    
    >
{TestimonialsData.map((test)=> {
    return (
       <SwiperSlide>

<div className="testCard">
    <img src={test.image} alt="" />
    <span>{test.comment}</span>
    <hr />
    <span>{test.name}</span>
</div>

       </SwiperSlide>
    )
})}


    </Swiper>
</div>



    </div>
  )
}

export default Testimonials