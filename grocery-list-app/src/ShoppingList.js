import React from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {

    return (

    <ul id="shoppingList" className="shoppinglist">

<ShoppingItem cn="meat" spanText="Steaks" startWith={3} />
<ShoppingItem cn="prod" spanText="Apples" startWith={4}/>
<ShoppingItem cn="dairy" spanText="Milk (1L, 2%)" startWith={1}/>
<ShoppingItem cn="bakery" spanText="Baguettes" startWith={2}/>

   
  </ul>
);
};

export default ShoppingList;