import React, { useState } from 'react';

const ShoppingItem = ({cn, spanText, startWith}) => {

 let [oldValue, updateTheValue] = useState(startWith);

const handleUp = (oldValue) => {updateTheValue(oldValue + 1);};

const handleDown = (oldValue) => { 
    if(oldValue > 0)
    {
    updateTheValue(oldValue - 1);
}
};


    return (
        <li className={cn}>
        <button onClick={ () => { handleDown(oldValue)} }>-</button>
        <span >{oldValue} {spanText}</span>
        <button onClick={ () => { handleUp(oldValue)} }>+</button>
      </li>
    );
};

export default ShoppingItem;
