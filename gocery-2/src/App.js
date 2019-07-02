import React, { useState } from 'react';
import Form from './Form';
import Filters from './Filters';
import List from './List';

const App = () => {


  const initialItems = [
    { name: 'Steak', type: 'meat', quantity: 3 },
    { name: 'Apples', type: 'prod', quantity: 4 },
    { name: 'Milk (1L, 2%)', type: 'dairy', quantity: 1 },
    { name: 'Baguettes', type: 'bakery', quantity: 2 },
  ];
  let [items, setItems] = useState(initialItems);

  const initialFilters = [
    { name: 'All', value: 'all'},
    { name: 'Meat', value: 'meat' },
    { name: 'Produce', value: 'prod' },
    { name: 'Dairy', value: 'dairy' },
    { name: 'Bakery', value: 'bakery' },
  ];

  const [filters, setFilters] = useState(initialFilters);


  const addItem = (s) => {
    setItems( (oldItems) =>
      [...oldItems, s]

    )
  }


  const incrementItemQuantity = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    setItems(updatedItems);
  };

  const decrementItemQuantity = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    setItems(updatedItems);
  };




  const handleFilter = index => {
    // console.log('selected filter index is:', filters[index]);


    items = initialItems;
    
    console.log('before->', items);
    const filteredItems = items.filter(e => {
      if(filters[index].value === 'all') return true;
      return e.type == filters[index].value
    });


    setItems(filteredItems);
    console.log('after->', items);


  };

  return (
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>
      <Form onSubmit={addItem}/>
      {/* <Filters filters={filters}/> */}
      <Filters filters={filters} handleFilter={handleFilter}  />
      <List
        items={items}
        incrementItem={incrementItemQuantity}
        decrementItem={decrementItemQuantity}
      />
    </main>
  );
};

export default App;
