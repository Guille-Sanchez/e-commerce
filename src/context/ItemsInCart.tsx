import { createContext, useState } from 'react'

interface GlobalContent {
  numberOfItem: number
  setNumberOfItem: React.Dispatch<React.SetStateAction<number>>
}

export const numberOfItemInCartContext = createContext<GlobalContent>({
  numberOfItem: 0,
  setNumberOfItem: (_value: React.SetStateAction<number>) => {}
})

interface children {children: React.ReactNode}

export const ItemsInCartProvider = ({ children }: children): JSX.Element => {
  const [numberOfItem, setNumberOfItem] = useState(0)
  return (
    <numberOfItemInCartContext.Provider value={{
      numberOfItem, setNumberOfItem
    }}>
      {children}
    </numberOfItemInCartContext.Provider>
  )
}
