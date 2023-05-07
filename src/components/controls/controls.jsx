import React from 'react';
import css from 'components/counters/counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={css.counterControls}>
      <button className={css.button} type="button" onClick={onIncrement}>
        збільшити на 1
      </button>

      <button className={css.button} type="button" onClick={onDecrement}>
        зменшити на 1
      </button>
    </div>
  );
};

export default Controls;
