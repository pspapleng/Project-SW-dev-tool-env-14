import React from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Radios({ onSelect: {onSelect} }) {
    return(
        <FormControl >
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
          >
            <FormControlLabel onClick={() => onSelect(1)} value="yes" control={<Radio />} label="ใช่" />
            <FormControlLabel onClick={() => onSelect(0)} value="no" control={<Radio />} label="ไม่ใช่" />
          </RadioGroup>
      </FormControl>
    )
}

export default Radios;