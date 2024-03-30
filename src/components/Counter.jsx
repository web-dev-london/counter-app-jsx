import { Badge, Button, Box } from '@chakra-ui/react';
import React from 'react';
let styles = {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 8,
    paddingLeft: 8,

};


const Counter = ({ value, onIncrement, onDecrement, onDelete }) => {

    return (
        <>
            <Box>
                <Button colorScheme='twitter' onClick={() => onDecrement()} >-</Button>
                <Badge variant='solid' colorScheme='orange' m='3' style={styles}>{value} </Badge>
                <Button colorScheme='blackAlpha' onClick={() => onIncrement()} >+</Button>
                <Button ml='3' colorScheme='red' onClick={() => onDelete()} >Delete</Button>
            </Box>
        </>
    )

}


export default Counter