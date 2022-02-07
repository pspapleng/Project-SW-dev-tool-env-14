import React, { useState } from "react";
import './Home.scss'
import Button from '@mui/material/Button';


function Home() {
    const [text, setText] = useState(null)

    const changeText = event => {
        setText(event.target.value)
    }
    return (
      <div className='container'>
          <input type="text" onChange={changeText} />
          {text}
          <Button variant="contained" onClick={() => alert('Why you Click')}>Confirm</Button>
      </div>
    );
}

export default Home;