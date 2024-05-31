import React from 'react';
import { Box, Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
import '../../App.css'
import fort_hero from '../../assets/fort_hero.svg';

const HomeHero = () =>
{
    return (
        <Flex
            pt="5"
            // pb="2"
            px={{ base: '20px', md: '20', lg: '20' }}
            bgGradient="linear(to bottom, white, rgba(203, 213, 224, 0.5) 90%, #FFFFFE)"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Box flex="1" mr={{ base: '0', md: '8' }}>
                <Heading as="h1" size="2xl" mb="10" color="black" lineHeight="1.5">
                    Find, hire and onboard world-class talents effortlessly
                </Heading>
                <Text fontSize="md" mb={{ base: '8', sm: '4' }} color="#535353" lineHeight="1.5">
                    Fort simplifies your hiring process, allowing you to source, screen and select candidates who are the perfect fit for your organisation.
                </Text>
                <Flex
                    as="form"
                    direction={{ base: 'column', sm: 'row' }}
                    w="full"
                    alignItems="center"
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        size="lg"
                        flex="1"
                        mb={{ base: '4', sm: '0' }}
                        mr={{ base: '0', sm: '4' }}
                        width={{ base: '100%', md: 'auto' }}
                        paddingY="10px"
                        _placeholder={{
                        }}
                        borderWidth="2px"
                        borderRadius="md"
                        focusBorderColor="black"
                        background="white"
                    />
                    <Button
                        colorScheme="teal"
                        size="lg"
                        mx={{ base: '3px', sm: '3px', md: '4', lg: '5' }}
                        bgGradient="linear(to-r, #C1EB64, #0BA043)"
                        fontWeight="light"
                        width={{ base: '100%', md: 'auto' }}
                        _hover={{}}
                    >
                        Join Waitlist
                    </Button>



                </Flex>
            </Box>

            <Box flex="1" mt={{ base: '8', md: '0' }}>
                <img src={fort_hero} alt="Hero Image" />
            </Box>
        </Flex>
    );
};

export default HomeHero;
