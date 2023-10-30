import React, { createContext, useState } from "react";
import './style.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../Serarchbar";
import { ElectronicProductAPi } from "../../redux/actions";
import Cart from "../Cartpage";


const Home = () => {
    const [InputData, setInputdata] = useState("")
    const [data, setData] = useState([]);
    const disPatch = useDispatch();
    const [cart, setcart] = useState([])
    const { productdata } = useSelector((state) => {
        return {
            productdata: state.ElectronicProduct.product
        }
    })

    useEffect(() => {
        disPatch(ElectronicProductAPi(InputData))
    }, [InputData])

    const HandleSearch = (e) => {
        let Inputvalue = e.target.value
        setInputdata(Inputvalue)
    }

    useEffect(() => {
        setData(productdata?.data)
    }, [productdata])

    const handleCart = (item) => {
        setcart(pre => [...pre, item])
    }

    return (
        <div className="product_container">
            <div className="searbar_main">
                <Searchbar
                    className={"searchbar"}
                    onChange={HandleSearch}
                    value={InputData}
                />
            </div>
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
                                        <button className="cart_btn" onClick={() => handleCart(item)}>add to cart</button>
                                        <h2 className="product_name">{item.name}</h2>
                                        <p className="company_name">{item.company}</p>
                                        <p className="price_name">{item.price}</p>
                                        <p className="product_desc">{item.description}</p>
                                    </div>
                                </div>
                            )
                        }) : 'Loading...'
                }
            </div>
            <hr className="cart_page" />
            <h1 className="cart_heading">Cart Page</h1>

            <Cart data={cart} setcart={setcart} />

        </div>
    )
}

export default Home;