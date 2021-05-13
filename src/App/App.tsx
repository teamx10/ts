import './App.css';

import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  Button: {
    marginBottom: theme.spacing(2),
  },
  Item: {
    margin: theme.spacing(2),
  },
  Paper: {
    justifyContent: 'center',
    margin: `${theme.spacing(2)}px auto`,
    width: theme.spacing(50),
  },
  PaperAll: {
    margin: '20px auto',
    textAlign: 'left',
    width: theme.spacing(50),
  },
}));

const isArrayOfNumber = (arr: (number | string)[]): arr is number[] => {
  return arr.every((value) => typeof value === 'number');
};

function App() {
  const classes = useStyles();

  const [items, setItems] = useState<(string | number)[]>(['a', 'b', 123, 'd']);

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

  const handleChange = (value: number | string, index: number) => {
    const itms = [...items];
    itms[index] = value;
    setItems(itms);
  };

  return (
    <div className="App">
      <form
        autoComplete="off"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>

          {items.map((item, index) => (
            <div className={classes.Item} key={index}>
              <TextField
                fullWidth
                label={`${index}`}
                value={item}
                onChange={(e) => handleChange(isNaN(+e.target.value) ? e.target.value : +e.target.value, index)}
              />
            </div>
          ))}

          <div className={classes.Item}>
            <Button className={classes.Button} type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </Paper>
      </form>
      <Paper className={classes.PaperAll}>
        <pre>{JSON.stringify(all, null, 2)}</pre>
        <hr />
        {sumStr}
        <hr />
        {sum}
      </Paper>
    </div>
  );
}

export default App;
