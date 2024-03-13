import { useState, useEffect, useContext } from 'react';
import { MyContext } from './Layout';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Save = () => {
  const [data, setData] = useState([]);
  const {cart, setCart} = useContext(MyContext)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleClick = (index) => {
    let item = data[index];
    const isItemInCartAlready = cart.find((cartItem) => cartItem.id === item.id)
    if(isItemInCartAlready) {
      item = {...isItemInCartAlready, count: isItemInCartAlready.count + 1}
      setCart((prevState) => {
        const newCart = prevState.filter((cart) => cart.id !== item.id)
        return [...newCart, item]}
        );
    } else {
      item.count = 1
      setCart((prevState) => [...prevState, item]);
    }
  };

  const isLoaded = data.length;

  return (
    <>
      {
        isLoaded
        ?
        <div className="row row-gap-5">
        {data.map((row, index) => {
          return (
                  <div key={row.id} className="col-12 col-md-4 col-sm-6 col-lg-2">
                    <div className="box">
                        <img src={row.image} width={200} height={200} alt="" />
                      <p className='text-danger mt-3'>₹{row.price}</p>
                      <h6>{row.title}</h6>
                      <p>
                        {row.rating.rate}/5 ({row.rating.count})
                      </p>
                      <input
                        type="button"
                        value="Add to cart"
                        onClick={() => handleClick(index)}
                      />{' '}
                      <br />
                    </div>
                  </div>
                  );
                })}
      </div>
        :
        <div className='d-flex align-items-center justify-content-center loader'>
          <p className='spinner-border text-dark'></p>
        </div>
      }
    </>
  );
};

export default Save;
