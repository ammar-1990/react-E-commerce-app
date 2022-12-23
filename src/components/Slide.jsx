import './Slide.css'

const Slide = ({slide}) => {
  return (
    <div className="slide">
    <div className="left">
    <div className="name">{slide.name}</div>
    <div className="detail">{slide.detail}</div>
    <div className="price">{slide.price}$</div>
    <div className="shop">Shop Now</div>
    </div>
    <img src={slide.img} alt="" />
    
</div>
  )
}

export default Slide