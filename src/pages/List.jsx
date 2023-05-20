import React from 'react'

function List() {
  const products = [
    { name: 'Product 1', price: 100, outStock: true },
    { name: 'Product 2', price: 200, outStock: false },
    { name: 'Product 3', price: 300, outStock: true },
  ].map(product => ({
    ...product,
    id: Math.random(0, 5)
  }))
  
  const renderWithForEach = [];

  products.forEach(product => {
    const item = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        {product.outStock && <p>Out of Stock</p>}
        <hr />
      </div>
    )
    renderWithForEach.push(item)
  })
  

  console.log('renderWithForEach: ', { renderWithForEach })

  return (
    <div>

      {products.length > 0 && products.map((product) => {
        return (
          <div 
            key={product.id}
            style={{
              color: product.outStock ? '#f00' : '#000',
              fontWeight: 'bold'
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {product.outStock && <p>Out of Stock</p>}
            <hr />
          </div>
        )
      })}

      <h2> Redner list with forEach</h2>
      {renderWithForEach}
      
    </div>
  )
}

export default List




