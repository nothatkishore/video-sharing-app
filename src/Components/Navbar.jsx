import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constant'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div>
      <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          sx={{position : 'sticky', background : '#000', top : 0}}
      >

        <Link to='/' style={{diplay : 'flex', alignItems : 'center'}}>
          <img src={logo} alt="" height={45}/>
        </Link>

        <SearchBar/>

      </Stack>

    </div>
  )
}

export default Navbar
