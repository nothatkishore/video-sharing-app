import React from 'react'

import { Stack } from '@mui/material'
import { categories } from '../utils/constant'

const selectedCategory = 'New';

const Sidebar = () => (

    <Stack 
        sx = {{
            overflowY : "auto",
            height : { sx : 'auto', md : '95%' },
            flexDirection : { sx : 'row', md : 'column' }
        }}
    >

        {
            categories.map((element) =>
            (
                <button
                    className='category-btn'
                    style={{
                        background : element.name === selectedCategory && '#FC1503', 
                        color : 'white'
                    }}

                    key = {element.name}
                >
                    <span
                        style={{
                            color : element.name === selectedCategory ? 'white' : 'red',
                            marginRight : '15px',
                        }}
                    > 
                        {element.icon}
                    </span>


                    <span
                        style={{
                            opacity : element.name === selectedCategory ? '1' : '0.5'
                        }}
                    >
                        {element.name}
                    </span>


                </button>
            ))
        }


    </Stack>



)

export default Sidebar
