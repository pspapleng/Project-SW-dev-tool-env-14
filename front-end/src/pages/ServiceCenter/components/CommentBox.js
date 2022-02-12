import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

//Import Style
import '../ServiceCenter.scss'

export default function CommentBox({data: { username, date, comment, imgUrl }}) {
console.log(username)
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', backgroundColor: '#F5F5F5', p: 2, marginTop: 2 }}>
        <Avatar
        className='img-user-profile'
        sx={{ width: 110, height: 110, mr: 3 }}
        >
        </Avatar>
      <Grid container spacing={2}>
        <Grid item xs={11}>
        <Stack direction="row" spacing={2} style={{margin: 0}}>
          <span style={{fontSize: 24, alignSelf: 'flex-end' }}>Markspoon</span>
          <span style={{color: '#C4C4C4', fontSize: 18, alignSelf: 'center'}}>01/01/2022</span>
            </Stack>
        </Grid>
        <Grid item xs={1}>
            <Button style={{color: "#797979", backgroundColor: 'transparent'}}>
                <MoreVertIcon style={{ fontSize: 36 }}/>
            </Button>
        </Grid>
        <Grid item xs={12}>
          <p style={{color: '#C4C4C4', fontSize: 18, margin: 0}}>a report that gives someone's opinion about the quality of a book, performance, product, etc.</p>
        </Grid>
      </Grid>
    </Box>
  );
}