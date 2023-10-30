import React from 'react'
import './style.scss'

const Searchbar = ({ radius, className, placeholder, onChange, value }) => {
    return (
        <div className={`searchbar_wrap ${className}`}>
            <div className={`Input_Search_main `}>
                <input
                    className={`Search_input_field ${radius ? "Search_input_field_radius" : ""}`}
                    placeholder={placeholder ? placeholder : "Search..."}
                    type='search'
                    onChange={onChange}
                    value={value}
                />
                <i className={"Search_icon"} />
                {
                    radius ? "" :
                        <div className="search_wrap"><p>search &#8594;</p></div>
                }
            </div>
        </div>
    )
}

export default Searchbar