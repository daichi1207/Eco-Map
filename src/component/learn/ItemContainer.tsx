import React from 'react';
import MediaQuery from 'react-responsive';
import Item from './Item';
import './style/ItemContainer.css';



const ItemContainer: React.FC = () => {
  const array = [...Array(17)].map((_, i) => i + 1);
  const item = array.map(i => {
    return < Item num={i} />
  })
  return (
    <div>
      <ul className="itemContainer">
        {item}
      </ul>
    </div>
  )
}

export default ItemContainer
