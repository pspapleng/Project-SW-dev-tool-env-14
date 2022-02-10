import React from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Radios() {

    return(
        <FormControl >
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="ใช่" />
            <FormControlLabel value="no" control={<Radio />} label="ไม่ใช่" />
          </RadioGroup>
      </FormControl>
    )
}

export default Radios;