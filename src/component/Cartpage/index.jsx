import React from 'react'
import './style.scss'

const Cart = ({ data, setcart }) => {

    const handledelete = (item) => {
        if (data.includes(item)) {
            const res = data.filter(ra => ra !== item)
            setcart(res)
        }
    }

    return (
        <div className='cart_wrap_container'>
            <div className="product_wrap">
                {
                    data?.length > 0 ?
                        data?.map((item, key) => {
                            return (
                                <div className="product_card" key={key}>
                                    <figure className="image_main">
                                        <img src={item.image} alt="" />
                                    </figure>
                                    <div className="product_detail">
                                        <button className="delete_btn" onClick={() => handledelete(item)}>add to cart</button>
                                        <h2 className="product_name">{item.name}</h2>
                                        <p className="company_name">{item.company}</p>
                                        <p className="price_name">{item.price}</p>
                                        <p className="product_desc">{item.description}</p>
                                    </div>
                                </div>
                            )
                        }) : 'Cart Empty'
                }
            </div>
        </div>
    )
}

export default Cart