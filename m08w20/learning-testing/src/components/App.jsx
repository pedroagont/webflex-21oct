import React, { useState } from 'react';
import '../styles/App.css';
import sortProductsByPrice from '../helpers/sortProductsByPrice'

function Header(){
  return (
    <header>
      <h1>My products</h1>
      <p>This is my amazing e-commerce!</p>
    </header>
  )
}

function ProductList({ items, handleSortProductsByPrice }){
  const [isSorted, setIsSorted] = useState(false)
  
  const handleClick = () => {
    handleSortProductsByPrice()
    setIsSorted(true)
  }

  return (
    <div>
      <button onClick={handleClick}>{ !isSorted ? 'Sort by price' : 'Sorted!'}</button>
      <ul>
          {
            items.map(item => (
              <li key={item.id}>{item.name} - ${item.price}</li>
            ))
          }
      </ul>
    </div>
  )
}

function App() {
  const initialProducts = [
    {
      id: 1,
      name: "ipad",
      price: 300
    },
    {
      id: 2,
      name: "iphone",
      price: 500
    },
    {
      id: 3,
      name: "apple mouse",
      price: 100
    }
  ]

  const [products, setProducts] = useState(initialProducts)

  const handleSortProductsByPrice = () => {
    setProducts(prev => sortProductsByPrice(prev))
  }

  return (
    <>
      <Header />
      <ProductList items={products} handleSortProductsByPrice={handleSortProductsByPrice} />
    </>
  )
}

export default App
