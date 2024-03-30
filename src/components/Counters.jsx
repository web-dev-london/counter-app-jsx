import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Counter from './Counter';
import Navbar from './Navbar';

const listOfCounters = [
    {
        id: 1, value: 0
    },
    {
        id: 2, value: 0
    },
    {
        id: 3, value: 0
    },
    {
        id: 4, value: 0
    }
]


const Counters = () => {
    const [counter, setCounter] = useState(listOfCounters);

    const increment = (id) => {
        setCounter(currentCount => {
            return currentCount.map(count => {
                if (count.id === id) {
                    const newValue = count.value + 1;
                    const newCount = { ...count, value: newValue }
                    return newCount
                }
                return count
            })
        })
    }

    const decrement = (id) => {
        setCounter(currentCount => {
            return currentCount.map((count) => {
                if (count.id === id && count.value > 0) {
                    const newValue = count.value - 1;
                    const newCount = { ...count, value: newValue }
                    return newCount;
                }
                return count
            })
        })
    }

    const handleDelete = (counterId) => {
        setCounter(currentCount => {
            return currentCount.filter(count => count.id !== counterId)
        })
    }

    const handleReset = () => {
        setCounter(currCount => {
            return currCount.map(count => {
                count.value = 0;
                return count
            })
        })
    }

    const allCounters = counter.map((count) => {
        return <Counter key={count.id}
            value={count.value}
            disabled={count.value === 0 ? 'disabled' : ''}
            onIncrement={() => increment(count.id)}
            onDecrement={() => decrement(count.id)}
            onDelete={() => handleDelete(count.id)}
        />
    })


    const totalCount = counter.filter(count => count.value > 0).length;

    return (
        <>
            <Navbar totalCounters={totalCount} />
            <Box ml='5' mt='5'>
                <button className='btn btn-success fw-bold' onClick={handleReset} >Reset</button>
                {allCounters}
            </Box>
        </>
    )
}

export default Counters