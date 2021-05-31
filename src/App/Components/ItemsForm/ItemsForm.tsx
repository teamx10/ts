import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { useAppStyles } from '../../App.styles';
import { Item } from '../../Interfaces/Items';
import { ItemsList } from '../ItemsList';

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

        <ItemsList handleChange={handleChange} handleRemove={handleRemove} items={items} />

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
