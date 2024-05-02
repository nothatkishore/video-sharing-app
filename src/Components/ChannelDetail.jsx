import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI' 
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => 
{
    const { id } = useParams()
    const [channelDetails, setChannelDetails ] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() =>
    {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetails(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items))
    }, [id])


    return (
      <Box minHeight="95vh">

        <Box>
          <ChannelCard channelDetail={channelDetails}/>
        </Box>

        <Box display="flex" p="2" m="120px">
          <Box>
            <Videos videos={videos} />
          </Box>
        </Box>

      </Box>
    )
}

export default ChannelDetail
