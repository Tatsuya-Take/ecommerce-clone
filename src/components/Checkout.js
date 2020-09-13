import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{user, basket}, dispatch] = useStateValue();

  return (
    <div　className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
          <h3 className="checkout__user">Hello, {user?.email}</h3>

          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout__title">Your shopping bascket is empty</h2>

              <p>
                You have no items in your bascket.
              </p>
              <p>
                To buy one or more product "Add
                to bascket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your shopping Basket</h2>
              <FlipMove
                appearAnimation="fade"
              >
                {basket.map(item => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </FlipMove>
          </div>
        )}
      </div>
      {basket?.length >= 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
