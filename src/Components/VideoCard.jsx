import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl } from '../utils/constant'


const VideoCard = ({ video : { id : { videoId }, snippet } }) => {

  return (
    <Card
      sx={{width : { md : '320px', xs : '100%' }}}
    >

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width : 350, height : 180}}
        />

        <CardContent
          sx={{backgroundColor : '#1e1e1e', height : '100px'}}
        >

          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              color='#FFF'
            >
              {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
            </Typography>   
          </Link>

          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography
              variant='subtitle2'
              fontWeight='bold'              
              color='gray'
            >
              {snippet?.channelTitle || demoChannelTitle}

              <CheckCircle 
                sx={{ fontSize : 12, color : 'gray', ml : '5px' }}
              />
            </Typography>
          </Link>

        </CardContent>
      
      </Link>

    </Card>
  )
}

export default VideoCard;