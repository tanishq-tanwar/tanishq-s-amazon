import { useContext } from "react";
import { MyContext } from "./Layout";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Show = () => {
    const {cart, setCart} = useContext(MyContext)
    
    const handleDel = (index) => {
        const item = cart[index]
        if(item.count > 1) {
            const records = cart.map((cartItem) => {
                if(cartItem.id === item.id) {
                        return {...cartItem, count: cartItem.count - 1}
                    }
                    else {
                       return cartItem;
                    }
                }
            )
            setCart(records)
        }        
        else {
            const records = [...cart.slice(0, index), ...cart.slice(index + 1)]
            setCart(records);
        }
    }
    
    const isLoaded = cart.length;

    return (
        <>
      {
        isLoaded
        ?
        <div className="row row-gap-5">
            {
                cart.map((row,index) => {
                    return (
                        <div key={row.id} className="col-12 col-md-4 col-sm-6 col-lg-2">
                            <div className="box position-relative">
                                <img src={row.image} width={200} height={200} alt="" />
                                <p className='text-danger mt-3'>₹{row.price}</p>
                                <h6>{row.title}</h6>
                                <p>{row.rating.rate}/5 ({row.rating.count})</p>
                                <input type="button" value="Remove from cart" onClick={() => handleDel(index)} /> <br />
                            <div className="position-absolute placement">{row.count}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        :
        <div className='d-flex align-items-center justify-content-center loader'>
            <p className="text-center">Nothing is in cart</p>
        </div>
      }
    </>
    )
}

export default Show;