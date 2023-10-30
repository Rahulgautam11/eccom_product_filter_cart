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
    const [MinPrice, setMinPrice] = useState()
    const [MaxPrice, setMaxPrice] = useState()
    const { productdata } = useSelector((state) => {
        return {
            productdata: state.ElectronicProduct.product
        }
    })

    useEffect(() => {
        disPatch(ElectronicProductAPi())
    }, [])

    const HandleSearch = (e) => {
        let Inputvalue = e.target.value
        setInputdata(Inputvalue)
        const result = productdata.data.filter((elm) => elm.company.toLowerCase().includes(Inputvalue.toLocaleLowerCase()))
        setData(result)
    }

    useEffect(() => {
        setData(productdata?.data)
    }, [productdata])

    const handleCart = (item) => {
        setcart(pre => [...pre, item])
    }
    const HandleMinprice = (e) => {
        let value = e.target.value
        setMinPrice(value)
    }
    const HandleMaxprice = (e) => {
        let value = e.target.value
        setMaxPrice(value)
    }

    useEffect(() => {
        if (MinPrice && MaxPrice) {
            let ProductValue = productdata?.data
            let FilterPrice = ProductValue.filter((elm) => elm.price > MinPrice && elm.price < MaxPrice)
            setData(FilterPrice)
        }
    }, [MinPrice, MaxPrice])

    return (
        <div className="product_container">
            <div className="searbar_main">
                <Searchbar
                    className={"searchbar"}
                    onChange={HandleSearch}
                    value={InputData}
                />
            </div>
            <div className="Price_range_main">
                <div className="input_wrap">
                    <label htmlFor="min">Min-Price</label>
                    <input id="min" type="number" onChange={HandleMinprice} />
                </div>
                <div className="input_wrap">
                    <label htmlFor="max">Max-Price</label>
                    <input id="max" type="number" onChange={HandleMaxprice} />
                </div>
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