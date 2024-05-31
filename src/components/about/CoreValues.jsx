import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { IoFlashOutline } from 'react-icons/io5';
import { PiChatsCircleBold, PiRecycleLight } from 'react-icons/pi';
import { GiProgression } from 'react-icons/gi';

const CoreValues = () =>
{
    return (
        <section>
            <Flex bg="#F5FFFA" opacity={0.9} pb={20} px={10} alignItems="center">
                <Box flex="4" pr={20} mx="auto">
                    <Heading as="h2" size="xl" mb={4} color="black">
                        Core Values
                    </Heading>
                    <Text fontSize="xl" mb={8} pr={20}>
                        Our core values embody the essence of our
                        human capital management (HCM) solution,
                        defining our approach to business, our
                        commitment to our workforce, and our
                        dedication to our customers.
                    </Text>
                </Box>

                <Box flex="6">
                    <Flex mb={20} pt={20}>
                        <Box flex="1" pr={10}>
                            <Box mb={5} style={{ display: 'inline-block', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '10%', padding: '4px' }} color="teal.600"><GiProgression size={24} /></Box>
                            <Heading as="h3" size="md" mb={5}>Growth</Heading>
                            <Text fontSize="md">
                                We believe in fostering continuous growth,
                                both personally and professionally. By
                                prioritizing growth, we ensure that our
                                team and customers  remain adaptable,
                                innovative, and future-ready. Your growth
                                is our growth.
                            </Text>
                        </Box>

                        <Box flex="1">
                            <Box mb={5} style={{ display: 'inline-block', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '10%', padding: '4px' }} color="teal.600"><PiRecycleLight size={24} /></Box>
                            <Heading as="h3" size="md" mb={5}>Resilience & Integrity</Heading>
                            <Text fontSize="md">
                                We strive to maintain the highest ethical
                                standards, treating our workers and
                                customers with honesty, transparency, and
                                respect. Our commitment to resilience and
                                integrity builds trust and fosters long-
                                lasting relationships.
                            </Text>
                        </Box>
                    </Flex>


                    <Flex>
                        <Box flex="1" pr={10}>
                            <Box mb={5} style={{ display: 'inline-block', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '10%', padding: '4px' }} color="teal.600"><PiChatsCircleBold size={24} /></Box>
                            <Heading as="h3" size="md" mb={5}>Collaboration</Heading>
                            <Text fontSize="md">
                                We recognize that diverse perspectives
                                drive innovation and creativity. By
                                embracing inclusion, we create a
                                collaborative and supportive culture that
                                harnesses the collective strength of our
                                workforce.
                            </Text>
                        </Box>

                        <Box flex="1">
                            <Box mb={5} style={{ display: 'inline-block', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '10%', padding: '4px' }} color="teal.600"><IoFlashOutline size={24} /></Box>
                            <Heading as="h3" size="md" mb={5}>Inclusion</Heading>
                            <Text fontSize="md">
                                By promoting collaboration, we tap into
                                the collective expertise and ideas of our
                                workforce and customers, enabling us to
                                deliver comprehensive and tailored
                                solutions. Together, we achieve more.
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </section>
    )
}

export default CoreValues;
