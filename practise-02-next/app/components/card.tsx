// components/Card.tsx
import React from 'react';
import { Kid } from './types';

interface CardProps {
  kid: Kid;
}

const Card: React.FC<CardProps> = ({ kid }) => {
  return (
    <div className="card">
      <h2>{kid.name}</h2>
      <p>Age: {kid.age}</p>
    </div>
  );
};

export default Card;
