import React from 'react'

const Menu = () => {
  return (
    <>
    <h2>Our Menu</h2>
    <div className="cards">
        <div className="card">
            <h3>Burger</h3>
            <p>INR 79</p>
        </div>

        <div className="card">
            <h3>Coke</h3>
            <p>INR 49</p>
        </div>

        <div className="card">
            <h3>Pizza</h3>
            <p>INR 199</p>
        </div>
    </div>

    <p>Good for Food</p>
    </>
  )
}

export default Menu