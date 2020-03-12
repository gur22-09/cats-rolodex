import React from 'react';

import { Card } from '../Card/Card';

import './cardList.css';

export const CardList = props => (
  <div className='card-list'>
    {props.cats.map(cat => (
      <Card key={cat.id} cat={cat} />
    ))}
  </div>
);