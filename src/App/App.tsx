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

function App() {
  const classes = useStyles();

  const [a, setA] = useState<string | number>('a');
  const [b, setB] = useState<string | number>('b');
  const [c, setC] = useState<string | number>('c');
  const [d, setD] = useState<string | number>('d');

  const [all, setAll] = useState({ a, b, c, d });

  const [sumStr, setSumStr] = useState('');
  const [sum, setSum] = useState(0);

  const handleSubmit = () => {
    setAll({ a, b, c, d });
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number') {
      setSum(a + b + c + d);
    } else {
      setSumStr(`${a}${b}${c}${d}`);
    }
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
          <div className={classes.Item}>
            <TextField
              fullWidth
              label="A"
              value={a}
              onChange={(e) => setA(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <TextField
              fullWidth
              label="B"
              value={b}
              onChange={(e) => setB(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <TextField
              fullWidth
              label="C"
              value={c}
              onChange={(e) => setC(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <TextField
              fullWidth
              label="D"
              value={d}
              onChange={(e) => setD(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
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
