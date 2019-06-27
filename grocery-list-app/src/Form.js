import React, {useRef} from 'react';


const Form = ({onSubmit}) => {

  const aRef = useRef();
  
  const handleSubmit = (event) => {
      event.preventDefault();

      const s = {
          add: aRef.current.value,
      }
      onSubmit(s);
  }
return (
    <form onSubmit={handleSubmit} id="newItem" className="newitem" autocomplete="off">
        <label for="itemName" className="line-label">New Item</label>
        <div className="addnew">
          <input ref={aRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?"/>
          <input ref={aRef} type="submit" value="Add" className="form-component btn"/>
        </div>
      </form>
)
};

export default Form;