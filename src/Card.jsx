
import ReactStars from "react-rating-stars-component";
import React from "react";

function Card({ item, handleAddtoCart }) {

    return <div className="col-lg-4 mb-3">
        <div className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt="random_pics" height={195} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <span className="card-text">Rs.{item.price}</span>
                <span className="card-text" >
                    <ReactStars
                    size={20}
                    value={item.ratings}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                /></span>

                <button onClick={() => { handleAddtoCart(item) }} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>

}

export default Card;