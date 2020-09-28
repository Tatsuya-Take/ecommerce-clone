import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useHistory, Link } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{user, basket}] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket?.length} items ) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {user ? (
        <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
      ) : (
        <Link to="/login">Please Sign In</Link>
      )}
    </div>
  )
}

export default Subtotal;
