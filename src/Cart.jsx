function Cartitem({cartitem, removeFromCart}){
    return <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{cartitem.title}</div>
        {cartitem.price}
      </div>
      <button onClick={() => {removeFromCart(cartitem)}} className="badge bg-primary rounded-pill">remove</button>
    </li>
}
export default Cartitem;