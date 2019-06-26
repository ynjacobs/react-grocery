import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import Header from './Header';
import Form from './Form';
import Category from './Category';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <React.Fragment> 
    <Header />
    
      <Form/>
<Category />
<ShoppingList/>
     
      </React.Fragment>
  );
}

export default App;
