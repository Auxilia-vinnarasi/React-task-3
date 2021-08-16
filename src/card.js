import React from "react";

export default function Card(props) {

    return (
        <>
        
        <div className="col-lg-4">
            <div class="card mt-2">
         <img src={props.data.img}/*"https://m.media-amazon.com/images/I/514cvuAnEjL.jpg"*/ class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.title}</h5>
                    <p class="card-text">{props.data.description}</p>
                    <p>Rs.{props.data.price}</p>
                    <a href="#" class="btn btn-primary" onClick={()=>props.handleCart(props.data.id)}>Add to Cart</a>
                </div>
            </div>
        </div> 
       </>     
       
    )

}