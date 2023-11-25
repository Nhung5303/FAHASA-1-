import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
     <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
     </div>
     <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">{product.old_price}</div>
            <div className="productdisplay-right-price-new">{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Gặp được một quyển sách hay nên mua liền dù đọc được hay không đọc được, vì sớm muộn gì cũng cần đến nó
        </div>
        <div className="productdisplay-right-biasach">
            <h1>Chọn Bìa Sách</h1>
            <div className="productdisplay-right-biasachs">
                <div>Bìa Cứng</div>
                <div>Bìa Mềm</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>THANH TOÁN</button>
        
        <p className='productdisplay-right-category'><span>Category :</span>Bìa Cứng, Bìa Mềm</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Bán chạy</p>
    </div>
    </div>
  )
}

export default ProductDisplay