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

  const [a, setA] = useState('a');
  const [b, setB] = useState('b');
  const [c, setC] = useState('c');
  const [d, setD] = useState('d');

  const [all, setAll] = useState({ a, b, c, d });

  return (
    <div className="App">
      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setAll({ a, b, c, d });
        }}
      >
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>
          <div className={classes.Item}>
            <TextField fullWidth label="A" value={a} onChange={(e) => setA(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="B" value={b} onChange={(e) => setB(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="C" value={c} onChange={(e) => setC(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="D" value={d} onChange={(e) => setD(e.target.value)} />
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
      </Paper>
    </div>
  );
}

export default App;
