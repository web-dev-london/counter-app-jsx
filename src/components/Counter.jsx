import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onDelete, disabled }) => {

    return (
        <>
            <Box>
                <Grid
                    textAlign='center' mt='3' templateColumns={'50px 40px 40px 50px'} gap={4}>
                    <span pt='1.5' className='btn btn-warning fw-bold ' >{value} </span>
                    <button className='btn btn-primary fw-bold' onClick={() => onIncrement()} >+</button>
                    <button disabled={disabled} className='btn btn-secondary fw-bold' onClick={() => onDecrement()} >-</button>
                    <Button colorScheme='red' className='fw-bold' onClick={() => onDelete()} >X</Button>
                </Grid>
            </Box>
        </>
    )

}


export default Counter