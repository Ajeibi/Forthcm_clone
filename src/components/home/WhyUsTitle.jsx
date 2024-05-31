import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const WhyUsTitle = () =>
{
    return (
        <Box textAlign="center" bg="white" p={10}>
            <Box color="#0BA043" pt={20} pb={5}>Why us</Box>
            <Heading as="h1" size="2xl" fontWeight="bold" px={20}>
                Why African <Box as="span" bgGradient="linear(to-r, #C1EB64, #0BA043)" bgClip="text">Enterprises</Box><br />
                Need Fort
            </Heading>
        </Box>
    )
}

export default WhyUsTitle
