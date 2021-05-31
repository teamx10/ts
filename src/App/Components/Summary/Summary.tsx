import React from 'react';

import { Item } from '../../Interfaces/Items';

interface Props {
  items: Item[];
  sumNumber: number;
  sumString: string;
}

export const Summary: React.FC<Props> = ({ items, sumNumber, sumString }: Props) => {
  return (
    <div>
      <pre>{JSON.stringify(items, null, 2)}</pre>
      <hr />
      {sumString}
      <hr />
      {sumNumber}
    </div>
  );
};
