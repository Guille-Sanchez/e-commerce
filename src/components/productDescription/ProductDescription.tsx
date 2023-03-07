import './productDescription.css'
import { iconCartWhite } from '../../assets/icons'
export const ProductDescription = (): JSX.Element => {
  return (
    <section className='product'>
      <h1>SNEAKER COMPANY</h1>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
      </p>

      <div className='discount'>
        <div>
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <p>$250.00</p>
      </div>

      <form>
          <div>
            <button>-</button>
            <input
              type="text"
              readOnly
              placeholder='0'
            />
            <button>+</button>
          </div>

        <button>
          {iconCartWhite}
          <p>Add to cart</p>
        </button>
      </form>

    </section>
  )
}
