import React from 'react';

export const Selector = (props) => (
    <select>
      <input key={props.id} onClick={props.handleCheckChildElement} type='select' checked={props.isChecked} value={props.value} /> {props.name}
    </select>
);
export default Selector;
