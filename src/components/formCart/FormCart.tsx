import { useContext, useState } from 'react'
import { iconCartWhite } from '../../assets/icons'
import { numberOfItemInCartContext } from '../../context/ItemsInCart'
import './formCart.css'

export const FormCart = (): JSX.Element => {
  const [numberOfItem, setNumberOfItem] = useState(0)
  const { setNumberOfItemInCart } = useContext(numberOfItemInCartContext)

  function handleOnSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if (numberOfItem < 1) return

    setNumberOfItemInCart(numberOfItem)
  }

  return (
    <form className='form-cart'
      onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
        handleOnSubmit(e)
      }}>
      <div>
        <button onClick={
          (e) => {
            e.preventDefault()
            if (numberOfItem === 0) return
            setNumberOfItem(prev => prev - 1)
          }}>-</button>
        <input
        className='form-input'
          type="text"
          readOnly
          placeholder='0'
          value={numberOfItem}
        />
        <button onClick={
          (e) => {
            e.preventDefault()
            setNumberOfItem(prev => prev + 1)
          }
        }
        >+</button>
      </div>

      <button>
        {iconCartWhite}
        <p>Add to cart</p>
      </button>
    </form>
  )
}
