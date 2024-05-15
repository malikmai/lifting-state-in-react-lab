import React from 'react';

const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul className="burger-stack">
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name} <button onClick={() => onRemove(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
