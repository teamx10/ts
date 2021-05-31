import React from 'react';

import { Item } from '../../Interfaces/Items';
import { ListItem } from '../ListItem';

interface Props {
  handleChange: (item: Item, index: number) => void;
  handleRemove: (index: number) => void;
  items: Item[];
}

export const ItemsList: React.FC<Props> = ({ items, handleChange, handleRemove }: Props) => {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem
          handleChange={(itm) => handleChange(itm, index)}
          handleRemove={() => handleRemove(index)}
          item={item}
          key={`${item}`}
          label={`${index}`}
        />
      ))}
    </div>
  );
};
