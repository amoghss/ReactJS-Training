import React, { useState } from 'react';
import './App.css';

function App() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [itemList, setItemList] = useState([]);

  const handleAddItem = () => {
    if (itemName && price && description) {
      const newItem = {
        itemName,
        price,
        description,
      };
      setItemList([...itemList, newItem]);
      setItemName('');
      setPrice('');
      setDescription('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItemList = [...itemList];
    updatedItemList.splice(index, 1);
    setItemList(updatedItemList);
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div className="item-list">
        {itemList.map((item, index) => (
          <div className="item-card" key={index}>
            <h3>{item.itemName}</h3>
            <p>Price: ${item.price}</p>
            <p>{item.description}</p>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
