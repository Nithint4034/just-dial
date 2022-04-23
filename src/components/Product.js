import axios from "axios";
import React, { useEffect, useState } from "react";

function Product() {
    const [data, setdata] = useState([])
    const [display, setdisplay] = useState(null)

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const url = "https://ty-shop.herokuapp.com/api/products";
            const res = await axios.get(url);
            console.log(res.data.products);
            setdata(res.data.products);
        } catch {
            console.log("Network Error");
        }
    };

    const handleClick = (ind) => {
        console.log(ind);
        // console.log(data[ind]);
        const obj = data[ind]
        setdisplay([
            obj
        ])
    }
    console.log(display);
    return (
        <div className="row">
            <div className="col-4">
                <h3>Product name</h3>
                {data.map((value, index) => {
                    return <div className="m-2">
                        <button onClick={() => { handleClick(index) }} >{value.productName}</button>
                    </div>
                })}
            </div>

            <div className="col-7">
                <h3>Product Details</h3>
                {display &&
                    display.map((val, ind) => {
                        return <div key={val._id} className="col-6">
                            <p><img src={val.productImageURL} /></p>
                            <p>{val.productName}</p>
                            <p>{val.productPrice}</p>
                            <p>{val.productDescription}</p>
                        </div>

                    })
                }
            </div>
        </div>
    );
}

export default Product;