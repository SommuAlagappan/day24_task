import './App.css';
import Card from './Card'
import Cartitem from './Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const products = [
    {
      id: 1,
      title: "iPhone",
      price: 50000,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSujEeo1rm5xD0SU_Xo-0VP--TqffmcTVReGdQ_MC8m93oy_MNJ4cL7b-zxwQfx606cQeD-vHI-GEoM19iDs5vV7QZyjUOV",
      ratings: 5,
      
    },
    {
      id: 2,
      title: "iMac",
      price: 90000,
      image: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2021_11/story_4346/assets/1.jpeg?time=1637746818",
      ratings: 4.5
    },
    {
      id: 3,
      title: "iWatch",
      price: 30000,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
      ratings: 3.5
    },
    {
      id: 4,
      title: "iPad",
      price: 40000,
      image: "https://m.media-amazon.com/images/I/71-sHQAPtPL._SX522_.jpg",
      ratings: 3.5
    },
    {
      id: 5,
      title: "iCloth",
      price: 5000,
      image: "https://m.media-amazon.com/images/I/71TsidtbumL._SL1500_.jpg",
      ratings: 2.5
    },
    {
      id: 6,
      title: "iPods",
      price: 10000,
      image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ipod/ipodclassic/ipod-6th-classic-gen.png",
      ratings: 3.5
    }
  ]

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
  }

  let removeFromCart = (item) => {

    //find which object to be removed
    let index = cart.findIndex((obj) => obj.id === item.id)
    cart.splice(index, 1);
    setCart([...cart])
    setTotal(total - item.price)
  }

  return <div className="container">
    <div className="row">
      <div className="col-lg-9 mt-2">
        <div className='row'>
          {
            products.map((item) => {
              return <Card item={item} disablekey={cart} handleAddtoCart={addToCart}></Card>
            })
          }

        </div>
      </div>

      <div className="col-lg-3 mt-3">
        {
          cart.length === 0 ? <h3>No items in the Cart</h3> : <div className="row">
            <ol class="list-group list-group-numbered">
              {cart.map((cartitem) => {
                return <Cartitem cartitem={cartitem} removeFromCart={removeFromCart}></Cartitem>
              })}
            </ol>
            <h1>Total - {total}</h1>
          </div>
        }
      </div>
    </div>
  </div>
}

export default App;
