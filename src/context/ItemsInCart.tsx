import { createContext, useState } from 'react'

interface GlobalContent {
  numberOfItemInCart: number
  setNumberOfItemInCart: React.Dispatch<React.SetStateAction<number>>
}

export const numberOfItemInCartContext = createContext<GlobalContent>({
  numberOfItemInCart: 0,
  setNumberOfItemInCart: (_value: React.SetStateAction<number>) => {}
})

interface children {children: React.ReactNode}

export const ItemsInCartProvider = ({ children }: children): JSX.Element => {
  const [numberOfItemInCart, setNumberOfItemInCart] = useState(0)
  return (
    <numberOfItemInCartContext.Provider value={{
      numberOfItemInCart, setNumberOfItemInCart
    }}>
      {children}
    </numberOfItemInCartContext.Provider>
  )
}
