import './App.css';

import { Paper } from '@material-ui/core';
import React, { useState } from 'react';

import { useAppStyles } from './App.styles';
import { ItemsForm } from './Components/ItemsForm';
import { Summary } from './Components/Summary';
import { Item } from './Interfaces/Items';
import { isArrayOfNumber } from './Utils/arrays';

function App() {
  const classes = useAppStyles();

  const [items, setItems] = useState<Item[]>(['a', 'b', 123, 'd']);

  const [all, setAll] = useState([...items]);

  const [sumStr, setSumStr] = useState('');
  const [sum, setSum] = useState(0);

  const handleSubmit = () => {
    setAll([...items]);
    if (isArrayOfNumber(items)) {
      setSum(items.reduce((acc, value) => acc + value, 0));
    } else {
      setSumStr(items.reduce((acc: string, value) => acc + `${value}`, ''));
    }
  };

  const handleChange = (value: Item, index: number) => {
    const itms = [...items];
    itms[index] = value;
    setItems(itms);
  };

  const handleAdd = () => {
    setItems([...items, '']);
  };

  const handleRemove = (index: number) => {
    const itms = [...items];
    itms.splice(index, 1);
    setItems(itms);
  };

  return (
    <div className="App">
      <Paper className={classes.PaperAll}>
        <ItemsForm
          handleAdd={handleAdd}
          handleChange={handleChange}
          handleRemove={handleRemove}
          handleSubmit={handleSubmit}
          items={items}
        />
        <Summary items={all} sumNumber={sum} sumString={sumStr} />
      </Paper>
    </div>
  );
}

export default App;
