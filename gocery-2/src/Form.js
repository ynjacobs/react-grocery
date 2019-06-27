import React, {useRef} from 'react';

const Form =({onSubmit}) => {

  const rRef = useRef();



  const handleSubmit = (event) => {
      event.preventDefault();

      const s = {
          name: rRef.current.value,
          quantity: 1,
          type: 'meat'
          
      }

      if(rRef.current.value !== '') {
        onSubmit(s);
        rRef.current.value = '';
      }
  }



  return (
   <form onSubmit={handleSubmit} id="newItem" className="newitem" auto-complete="off">
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
       <input ref={rRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
       <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;
