import React from 'react'
import { useSelector } from 'react-redux'

function Home(props) {
    // console.log('home => props: ', props.data);
    const {cardItems} = useSelector(state => state)
    
  return (
    <div>
      {/* <div className="add-to-cart">
        <span className='cart-count'>{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="add to cart icon" />
      </div> */}
        <h2>Home Component</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://www.refurbished.store/cache/images/iphone-x-zilver-0_600x600_BGresize_16777215-tj.png" alt="iphone" />
        </div>
        <div className="text-wrapper item">
            <span>I-Phone</span><br/>
            <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper item">
            <button onClick={()=>props.addToCartHandler({price: 1000,name: 'iphone 11'})}>Add To Cart</button>
            <button className='remove-cart-btn' onClick={()=>props.removeToCartHandler(cardItems)}>Remove To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home

