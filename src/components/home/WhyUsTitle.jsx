import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const WhyUsTitle = () =>
{
    return (
        <Box textAlign="center" bg="white"
            px={{ base: '20px', lg: 10 }}>
            <Box color="#0BA043" pt={20} pb={5}
            >Why us</Box>
            <Heading as="h1"
                fontWeight="bold"
                px={{ base: '0', lg: 20 }}
                fontSize={{ base: '24px', lg: '36px' }}
                sx={{
                    '& br': {
                        display: { base: 'none', md: 'none', lg: 'block' }
                    }
                }}>
                Why African <Box as="span" bgGradient="linear(to-r, #C1EB64, #0BA043)" bgClip="text">Enterprises </Box><br />
                Need Fort
            </Heading>
        </Box>
    )
}

export default WhyUsTitle
