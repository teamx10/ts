import { IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

import { useAppStyles } from '../../App.styles';
import { Item } from '../../Interfaces/Items';

interface Props {
  handleChange: (item: Item) => void;
  handleRemove: () => void;
  item: Item;
  label: string;
}

export const ListItem: React.FC<Props> = ({ label, item, handleChange, handleRemove }: Props) => {
  const classes = useAppStyles();
  return (
    <div className={classes.Item}>
      <TextField
        fullWidth
        label={label}
        value={item}
        onChange={(e) => handleChange(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
      />
      <IconButton aria-label="delete" className={classes.DeleteButton} size="small" onClick={() => handleRemove()}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};
