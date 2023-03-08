import { useContext } from 'react'
import { iconCartWhite } from '../../assets/icons'
import { numberOfItemInCartContext } from '../../context/ItemsInCart'
import './formCart.css'

export const FormCart = (): JSX.Element => {
  const { numberOfItem, setNumberOfItem } = useContext(numberOfItemInCartContext)

  return (
    <form className='form-cart'>
      <div>
        <button onClick={
          (e) => {
            e.preventDefault()
            if (numberOfItem === 0) return
            setNumberOfItem((prev: number) => prev - 1)
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
            setNumberOfItem((prev: number) => prev + 1)
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
