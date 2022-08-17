import ReactStars from "react-rating-stars-component";
import React from "react";


function Card({ item, handleAddtoCart, disablekey}) {

    return <div className="col-lg-4 mb-3">
        <div className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt="random_pics" height={180} />
            <div className="card-body text-center">
                <h4 className="card-title ">{item.title}</h4>
                <span className="card-text "><b>Rs.{item.price}</b></span>
                <p className="card-text col-6 mx-auto mb-2"> 
                    <ReactStars
                    size={30}
                    value={item.ratings}
                    isHalf={true}
                    edit={false}
                    activeColor="yellow"
                /></p>

                <button disabled={disablekey.some((obj) => {
                    return obj.id === item.id
                })}
                 onClick={() => { handleAddtoCart(item) }} className="btn btn-primary text-center">Add to Cart</button>
            </div>
        </div>
    </div>

}

export default Card;