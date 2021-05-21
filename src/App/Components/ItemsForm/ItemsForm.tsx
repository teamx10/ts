import { Button, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

import { useAppStyles } from '../../App.styles';
import { Item } from '../../Interfaces/Items';

interface Props {
  handleAdd: () => void;
  handleChange: (item: Item, index: number) => void;
  handleRemove: (index: number) => void;
  handleSubmit: () => void;
  items: Item[];
}

export const ItemsForm: React.FC<Props> = ({ handleSubmit, items, handleRemove, handleAdd, handleChange }: Props) => {
  const classes = useAppStyles();
  return (
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
            <IconButton
              aria-label="delete"
              className={classes.DeleteButton}
              size="small"
              onClick={() => handleRemove(index)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        ))}

        <div className={classes.Item}>
          <Button className={classes.Button} variant="outlined" onClick={handleAdd}>
            Add
          </Button>
          <Button className={classes.Button} color="primary" type="submit" variant="outlined">
            Submit
          </Button>
        </div>
      </Paper>
    </form>
  );
};
