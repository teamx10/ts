import React, {useState} from 'react';
import './App.css';
import {Button, makeStyles, Paper, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: 400,
    margin: '20px auto',
    justifyContent: 'center',
  },
  PaperAll: {
    width: 400,
    margin: '20px auto',
    textAlign: 'left'
  },
  Item: {
    margin: 20,
  },
  Button: {
    marginBottom: 20
  }
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
      <form noValidate autoComplete="off" onSubmit={(e) => {e.preventDefault();  setAll({a, b, c, d}); }}>
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>
          <div className={classes.Item}>
            <TextField label="A" fullWidth value={a} onChange={(e) => setA(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField label="B" fullWidth value={b} onChange={(e) => setB(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField label="C" fullWidth value={c} onChange={(e) => setC(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField label="D" fullWidth value={d} onChange={(e) => setD(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <Button variant="outlined" className={classes.Button} type="submit">Submit</Button>
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
