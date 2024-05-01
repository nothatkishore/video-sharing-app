import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);


  useEffect(() => 
  {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack
      sx={{flexDirection : {sx : 'column', md : 'row'}}}
    >

        {/* This box is for the side bar */}
        <Box 
          sx={{ 
                height : { sx : 'auto', md : '92vh' },
                borderRight : '1px solid #3d3d3d',
                px : { sx : 0, md : 2},
                width : { sx : 0, md : 250 }
            }}
        >
        
        {/* Renders the sidebar component */}
          <Sidebar 

            selectedCategory = {selectedCategory}
            setSelectedCategory = {setSelectedCategory}
          
          />

        {/* Renders the copyright text */}
          <Typography 
            className='copyright'
            variant='body2'
            sx={{
              mt : 1.5,
              color : '#fff'
            }}
          >
            Copyright 2024 kishorear
          </Typography>

        </Box>

        {/* This box is for the video section */}

        <Box
          p={2}
          sx ={{
            overflowY : 'auto',
            height : '90vh',
            flex : 2
          }}
        >

          {/* This represents the title */}
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx = {{color : 'white'}}

          >
            {selectedCategory} <span style={{color : '#F31503'}}>
              Videos
            </span>
          </Typography>
          
          {/* This represents the videos */}
         
          <Videos videos = {videos}/>

        </Box>

    </Stack>
  )
}

export default Feed
