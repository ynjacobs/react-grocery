import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import Header from './Header';
import Form from './Form';
import Category from './Category';
import ShoppingList from './ShoppingList';

function App() {
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Meat', value: 'meat' },
    { name: 'Produce', value: 'prod' },
    { name: 'Dairy', value: 'dairy' },
    { name: 'Bakery', value: 'bakery' },
  ];

  const initialitems = [
    { name: 'Steak', type: 'meat', quantity: 3 },
    { name: 'Apples', type: 'prod', quantity: 4 },
    { name: 'Milk (1L, 2%)', type: 'dairy', quantity: 1 },
    { name: 'Baguettes', type: 'bakery', quantity: 2 },
  ];
 

  const [item, setItems] = useState(initialitems);

  const addItem = (s) => {
    setItems( (oldItems) =>
      [...oldItems, s]

    )
  }

  return (
    <React.Fragment> 
    <Header />
    
      <Form onSubmit={addItem} />
<Category />
<ShoppingList/>
     
      </React.Fragment>
  );
}

export default App;
