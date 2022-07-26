import React, { useState } from 'react'
import './Questionaire.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import receipt1 from './assets/receipt_1.png';
import receipt2 from './assets/receipt_2.png';
import receipt3 from './assets/receipt_3.png';
import receipt4 from './assets/receipt_4.png';

const Questionaire = () => {

  const [store, setStore] = useState('');
  const [numItems, setNumItems] = useState('');
  const [total, setTotal] = useState('');
  const [imgIndex, setImgIndex] = useState(0);
  const pictureArray = [receipt1, receipt2, receipt3, receipt4];

  const handleClick = () => {
    console.log("Submitting form to backend/receipt-api");
    console.log("Store: " + store);
    console.log("Number of Items: " + numItems);
    console.log("Total price: " + total);

    setStore('');
    setNumItems('');
    setTotal('');
    setImgIndex(Math.floor(Math.random() * 4));
  }

  return (
    <div className="questionaire-container">
      <div className='receipt-image-container'>
        <img src={pictureArray[imgIndex]} alt="receipt" className='receipt-image'/>
      </div>
      <div className='questions-container'>
        <div className='input-form-container'>
          <TextField
            id="store-helperText"
            label="Store"
            value={store}
            onChange={(event) => setStore(event.target.value)}
          />
          <TextField
            id="numItems-helperText"
            label="Number of Items"
            value={numItems}
            onChange={(event) => setNumItems(event.target.value)}
          />
          <TextField
            id="total-helperText"
            label="Total Price"
            value={total}
            onChange={(event) => setTotal(event.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>Submit Answers</Button>
        </div>
      </div>
    </div>
  )
}

export default Questionaire