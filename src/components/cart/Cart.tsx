import { useContext } from 'react'
import { iconDelete } from '../../assets/icons'
import { numberOfItemInCartContext } from '../../context/ItemsInCart'
import { sneakers } from '../../mockups/sneakers'
import './cart.css'
export const Cart = (): JSX.Element => {
  const { numberOfItemInCart, setNumberOfItemInCart } = useContext(numberOfItemInCartContext)
  return (
    <div className="cart">
      <h3>Cart</h3>
      <hr />
      <div>
        {numberOfItemInCart === 0
          ? <p>Your cart is empty</p>
          : <div className='with-item'>
              <div>
                <img src={sneakers[0].src} alt={sneakers[0].alt} loading='lazy' />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>{`$125.00 x ${numberOfItemInCart}`} <strong>{`$${(125 * numberOfItemInCart).toFixed(2)}`}</strong></p>
                </div>

                <button
                  className='button-delete'
                  onClick={() => { setNumberOfItemInCart(() => 0) }}
                >
                  {iconDelete}
                </button>
              </div>
              <button>Checkout</button>
            </div>
        }
      </div>
    </div>
  )
}
