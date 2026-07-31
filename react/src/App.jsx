// rafce (arrow function)
import React from 'react'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Student from './components/Student';



const App = () => {
  return (    
    <div className="container">
      <Header />
      <Footer />
      <Menu />
    </div>
  )
}

export default App