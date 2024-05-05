import { useEffect, useState } from "react"; 
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () =>
{
    const { id } = useParams()
    const [videoDetail, setvideoDetail] = useState([])
    const [videos, setVideos] = useState([])


    useEffect(() =>
    {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideoDetail(data.items[0]))

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

    }, [id])

    if(!videoDetail?.snippet) return 'Loading...'

    const { snippet : {title, channelId, channelTitle}, statistics : {viewCount, likeCount} } = videoDetail

    return(
      
      <Box
        minHeight='95vh'
      >

        <Stack direction={{xs : 'column', md : 'row'}}>

          <Box flex={1}>

            <Box sx={{width : '100%', position : 'sticky', top : '86px'}}>

              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${id}`} 
                className='react-player'
                controls
              />

              <Typography
                color='#fff'
                variant='h5'
                fontWeight='bold'
                p={2}
              >
                {title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems='center'
                sx={{color : '#fff'}}
                py={1}
                px={2}
                gap={4}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography 
                    variant="h6"
                    color='white'
                    display='flex'
                    flexDirection='row'
                    gap='5px'
                    justifyContent='center'
                    alignItems='center'
                  >
                    
                    <Box>
                      {channelTitle}
                    </Box>
                    <CheckCircleOutlined 
                      
                    />
                  </Typography>
                </Link>

                <Stack 
                  direction="row"
                  alignItems="center"
                  gap={2}
                  px={2}
                >

                    <Typography
                      color='gray'
                      variant="subtitle1"
                    >
                      {parseInt(viewCount).toLocaleString()} Views
                    </Typography>

                    <Typography
                      color='gray'
                      variant="subtitle1"
                    >
                      {parseInt(likeCount).toLocaleString()} Likes
                    </Typography>

                </Stack>

              </Stack>

            </Box>

          </Box>

          <Box
            px={2}
            py={{md : 1, xs : 5}}
            justifyContent='center'
            alignItems='center'
          >

            <Videos 
              videos={videos}
              direction="column"
            />

          </Box>

        </Stack>

      </Box>

    )
}

export default VideoDetail


