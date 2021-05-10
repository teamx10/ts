import React from 'react';
import './App.css';
import {Button, makeStyles, Paper, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: 400,
    margin: '20px auto',
    justifyContent: 'center',
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

  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>
          <div className={classes.Item}>
            <TextField label="A" fullWidth />
          </div>
          <div className={classes.Item}>
            <TextField label="B" fullWidth />
          </div>
          <div className={classes.Item}>
            <TextField label="C" fullWidth />
          </div>
          <div className={classes.Item}>
            <TextField label="D" fullWidth />
          </div>
          <div className={classes.Item}>
            <Button variant="outlined" className={classes.Button}>Default</Button>
          </div>
        </Paper>
      </form>
    </div>
  );
}

export default App;
