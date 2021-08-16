//import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Card from "./card";
import CartItems from './cartitems';
import React, { useState } from 'react';
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import Home from "./home";


export default function App() {

    const [products, setproducts] = useState([{
            id: 1,
            img: img1,
            title: "product 1",
            description: "loerm ipsum",
            price: 1098
        },
        {
            id: 2,
            img: img2,
            title: "product 2",
            description: "loerm ipsum",
            price: 1300
        },
        {
            id: 3,
            img: img3,
            title: "product 3",
            description: "loerm ipsum",
            price: 895
        },
        {
            id: 4,
            img: img4,
            title: "product 4",
            description: "loerm ipsum",
            price: 499
        },
        {
            id: 5,
            img: img5,
            title: "product 5",
            description: "loerm ipsum",
            price: 899
        },
        {
            id: 6,
            img: img6,
            title: "product 5",
            description: "loerm ipsum",
            price: 655
        },
        {
            id: 7,
            img: img7,
            title: "product 5",
            description: "loerm ipsum",
            price: 1899
        }
    ])

    const [cartitems, setcartItems] = useState([])

    const [total, setTotal] = useState(0);




    let addTocart = (id) => {
        let product = products.find(obj => obj.id == id);
        setcartItems([...cartitems, product])


        setTotal(total + product.price);
    }

    let removeCart = (id) => {
        let result = window.confirm("Are you sure you wanto remove from your cart");
        if (result) {
            let cartIndex = cartitems.findIndex(obj => obj.id == id);
            setTotal(total - cartitems[cartIndex].price)
            cartitems.splice(cartIndex, 1);
            setcartItems([...cartitems])
        }

    }
    return ( 
    <>

        <Header> </Header> 
        <Home></Home>
        <div className = "container" style = {{ marginTop: "70px"}}>
        <div className = "row">
        <div className = "col-lg-8">
        <div className = "row"> {
            products.map(product => {
                return <Card data = { product }
                handleCart = { addTocart } > </Card>

            })
        } 
        </div> 
        </div> 
      <div className = "col-lg-4">
        <ol class = "list-group list-group-numbered"> 
        {
            cartitems.length == 0 ? <h3> No items in Cart </h3>:null
        } {
            cartitems.map(item => {
                return <CartItems handleremove = { removeCart }
                data = { item } > </CartItems>
            })
        } 
        <h1> Total Rs - { total } </h1>

        </ol> 
        </div> 
        </div> 
        </div> 
        </>
    );
}