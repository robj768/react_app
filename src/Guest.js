import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = props =>
  <li>
    <GuestName
      isEditing={props.isEditing}
      handleNameEdits={e => props.setName(e.target.value)}>
      {props.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.isConfirmed}
        onChange= {props.handlerConfirmation} /> Confirmed
    </label>
    <button onClick={props.handlerToggleEditing}>
      {props.isEditing ? "save" : "edit"}
    </button>
    <button onClick={props.handleRemove}>remove</button>
  </li>;

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handlerConfirmation: PropTypes.func.isRequired,
  handlerToggleEditing: PropTypes.func.isRequired,
  setName:PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Guest;




