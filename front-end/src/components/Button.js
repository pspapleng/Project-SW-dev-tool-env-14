import React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';


const blackGray = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.15rem;
  background-color: #595959;
  padding: 8px;
  border-radius: 30px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #717171};
  }

`;


const lightGray = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.15rem;
  background-color: #C4C4C4;
  padding: 8px ;
  border-radius: 30px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #AFAFAF;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #828282;
  }
`;

const red = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.15rem;
  background-color: #BB0202;
  padding: 8px ;
  border-radius: 30px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #720000;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #828282;
  }
`;

const blue = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.15rem;
  background-color: #1976d2;
  padding: 8px ;
  border-radius: 30px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #378FE7;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #828282;
  }
`;

function DarkGrayBut(props) {
  return <ButtonUnstyled onClick={() => props.onClick()} {...props} component={blackGray} />;
}

function LightGrayBut(props) {
  return <ButtonUnstyled onClick={() => props.onClick()} {...props} component={lightGray}/>;
}


function RedDelBut(props) {
  return <ButtonUnstyled onClick={() => props.onClick()} {...props} component={red} />;
}

function BlueBut(props) {
  return <ButtonUnstyled onClick={() => props.onClick()} {...props} component={blue} />;
}
export { DarkGrayBut, LightGrayBut, RedDelBut, BlueBut}