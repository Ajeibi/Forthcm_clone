import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const HomeTitle = () =>
{
    return (
        <Box textAlign="center" m={10}>
            <Heading as="h1" size="xl" fontWeight="bold" color="black" lineHeight="1.5">
                Start Recruiting With Fort Now
            </Heading>
            <Text mt={2} mb={5} fontSize="md" opacity={0.9}>
                Join the exceptional Recruiters and Organizations leveraging <br />
                Fort to elevate their recruitment.
            </Text>
            <Flex justifyContent="center" gap={3}>
                <Button
                    colorScheme="teal"
                    size="lg"
                    width={{ base: '100%', md: 'auto' }}
                    bgGradient="linear(to-r, #C1EB64, #0BA043)"
                    fontWeight="light"
                    _hover={{}}
                >
                    Join Waitlist
                </Button>
                <Button
                    as={Link}
                    size="lg"
                    to="/contact-us"
                    bg="black"
                    color="white"
                    fontWeight="light"
                    _hover={{ bg: 'black' }}
                    width={{ base: '100%', md: 'auto' }}
                >
                    <Flex alignItems="center" gap={2}>
                        Contact Sales
                        <GoArrowUpRight />
                    </Flex>
                </Button>
            </Flex>
        </Box>
    )
}

export default HomeTitle
