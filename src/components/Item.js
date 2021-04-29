import React, {useState} from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(false);


  function handleCartClick () {

    setAddItem((addItem) => !addItem)

  }

  return (
    <li className={addItem ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        onClick={handleCartClick} 
        className={addItem ? 'remove' : 'add'}>
        {addItem? 'Remove From' : 'Add To'} Cart 
      </button>
    </li>
  );
}

export default Item;
