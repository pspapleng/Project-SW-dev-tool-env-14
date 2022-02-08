import React from 'react';
import Buttons from '@mui/material/Button';

function Button(data) {
  return (
      <Buttons onClick={() => data.onSubmit(data.props.condition)}>{ data.props.title }</Buttons>
  );
}

export default Button;
