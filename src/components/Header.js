import React from 'react'
import { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import Order from './order';

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  const handleClick = () => {
    setCartOpen(current => !current);
  };
  return (
    <header>
      <div className='header-line'>
        <div><span className='logo'><h2>House Staff</h2></span></div>
        <div className='block-2'></div>
        <div className='block-3'>
          <div className='block-item-2'>
            <div><b>Контакты</b></div>
            <div><b>о нас</b></div>
            <div className="icon"><i className="fi fi-rr-moon"></i></div>
            <div className="icon"><FaShoppingBag
              onClick={handleClick}
              className={cartOpen ? "shop-true":"shop-false"}
              />
              </div>
            <div className='icon'><i class="fi fi-rs-user"></i></div>
          </div>
        </div>
      </div>
      {cartOpen && (
        <div className='shop-card'>
          {props.orders.map(el => (
              <Order key={el.id} item={el} />
          ))}
        </div>
      )}
      <div className='container'>
        <div className='preview-block'>
          <div className='preview'></div>
        </div>
      </div>
    </header>
  )
}