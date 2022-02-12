import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


//Import Components
import Card from '../../components/Cards/ServiceInfoCard'
import GGMap from '../../components/Cards/GGMapCard'
import Suggestion from '../../components/Cards/SuggestionCard'
import CommentBox from './components/CommentBox'
import ReviewForm from './components/ReviewForm'

//Import style

import './ServiceCenter.scss'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function ServiceCenter() {
  
  const serviceData = {
    name: 'Paolo', 
    locaion: 'Bangkok', 
    cost: '3000-10000', 
    contact: '02-384-5748', 
    description: 'Welcome', 
    imageUrl: ''
  }
  const serviceReivews = [{
    username: 'Markspoon',
    date: '01/01/2022',
    comment: 'a report that gives someone\'s opinion about the quality of a book, performance, product, etc.',
    imgUrl: ''
  },
  {
    username: 'Markspoon',
    date: '01/01/2022',
    comment: 'a report that gives someone\'s opinion about the quality of a book, performance, product, etc.',
    imgUrl: ''
  }
]

  return (
      <Box sx={{ flexGrow: 1, py: 4, px: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Item>
              <Card data={serviceData}/>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <GGMap/>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item sx={{p: 3}}>
              <div className='review-box'>
                <span style={{fontSize: 30, fontWeight: 'bold'}}>10 reviews</span>
                {serviceReivews.map((review, index) => <CommentBox key={index} data={review}/>)}
              </div>
              <ReviewForm/>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <span style={{fontSize: 30, fontWeight: 'bold'}}>Suggestion</span>
            <Item>
              <Suggestion/>
            </Item>
          </Grid>
        </Grid>
      </Box>
  );
}

export default ServiceCenter;
