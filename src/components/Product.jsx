import './Product.css'

const Product = ({product}) => {
  return (
    <div className='product'>
<div className="productLeft">
    <span>{product.name}</span>
    <span>{product.detail}</span>
   
    <span>{product.price}$</span>
    <span>Shop Now</span>
</div>
<div className="productRight"><img src={product.img} alt="" /></div>

    </div>
  )
}

export default Product