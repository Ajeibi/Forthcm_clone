import React from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

import fort_recruitment_use_case from "../../assets/fort_recruitment_use_case.png"
import fort_organisation from "../../assets/fort_organisation.png"

const HomeAbout = () =>
{
    return (
        <Box
            p={{ base: '0', lg: '20' }}
            px={{ base: '20px', md: '20', lg: '20' }}
            mt={{ base: "64px" }}
        >
            {/* Main Header */}
            <Box textAlign="center" mb={8}>
                <Heading as="h1"
                    fontSize={{ base: '24px', md: '30px', lg: '40px' }}
                    fontWeight="bold"
                    color="black"
                    lineHeight="1.5"
                    sx={{
                        '& br': {
                            display: { base: 'none', md: 'none', lg: 'block' }
                        }
                    }}>
                    One platform built for <br /> different use cases
                </Heading>
                <Text as="p"
                    mt={2}
                    mb={{ base: '80px', lg: 20 }}
                    fontSize="16px"
                    opacity={0.4}
                >
                    Trusted by the world's best companies.
                </Text>
            </Box>

            {/* First Section */}
            <Flex
                mb={10}
                align="center"
                px={{ base: '0', lg: 20 }}
                mx={{ base: '0', lg: 5 }}
                sx={{
                    flexDirection: { base: 'column-reverse', md: 'row', lg: 'row' }
                }}
            >
                <Box flex="1"
                    pr={{ base: '0', lg: 20 }}
                >
                    <img src={fort_recruitment_use_case} alt="fort_recruitment_use_case" />
                </Box>
                <Box flex="1"
                    pl={{ base: '0', lg: 20 }}
                >
                    <Heading
                        as="h4"
                        fontSize={{ base: "14px", lg: "16px" }}
                        textTransform={{ base: "capitalize", md: "capitalize", lg: "uppercase" }}
                        color="#0BA043"
                        mb={5}
                    >
                        recruiters
                    </Heading>
                    <Heading as="h2"
                        fontSize={{ base: "16px", lg: "28px" }}
                        color="black"
                        sx={{
                            '& br': {
                                display: { base: 'none', md: 'none', lg: 'block' }
                            }
                        }}
                    >
                        Elevate Talent <br /> Acquisition for Your<br /> Clients
                    </Heading>
                    <Text mt={4} color="#535353" pb={5}>
                        Fort helps you effortlessly manage job posts,
                        applications, and team collaborations, enabling
                        you to attract and hire the best candidates.
                    </Text>
                    <Flex alignItems="center" gap={2} mb={{ base: '32px' }}>
                        <Link>
                            <Text
                                fontSize={{ base: '14px', lg: '16px' }}
                                fontWeight="bold"
                            >
                                Get Started With Hiring
                            </Text>
                        </Link>
                        <Icon as={GoArrowRight} boxSize={7} />
                    </Flex>
                </Box>
            </Flex>

            {/* Second Section */}
            <Flex
                align="center"
                mt={10}
                pt={{ base: '0', lg: 10 }}
                px={{ base: '0', lg: 20 }}
                mx={{ base: '0', lg: 5 }}
                sx={{
                    flexDirection: { base: 'column', md: 'row', lg: 'row' }
                }}
            >
                <Box flex="1" pr={20}>
                    <Heading
                        as="h4"
                        fontSize={{ base: "14px", lg: "16px" }}
                        textTransform={{ base: "capitalize", md: "capitalize", lg: "uppercase" }}
                        color="#0BA043"
                        mb={5}
                        mt={{ base: "10" }}
                    >
                        organisation
                    </Heading>
                    <Heading as="h2"
                        fontSize={{ base: "16px", lg: "28px" }}
                        color="black"
                        sx={{
                            '& br': {
                                display: { base: 'none', md: 'none', lg: 'block' }
                            }
                        }}
                    >
                        Enhance Your<br />
                        Organization’s Hiring<br />
                        Strategy
                    </Heading>
                    <Text mt={4} color="#535353" pb={5}>
                        Fort enables you to streamline your recruitment
                        processes, automate repetitive hiring tasks, and
                        make data-driven decisions to support your
                        organization's talent strategy.
                    </Text>
                    <Flex alignItems="center" gap={2} mb={{ base: '32px' }}>
                        <Link>
                            <Text
                                fontSize={{ base: '14px', lg: '16px' }}
                                fontWeight="bold"
                            >
                                Streamline Your Hiring Process
                            </Text>
                        </Link>
                        <Icon as={GoArrowRight} boxSize={7} />
                    </Flex>
                </Box>
                <Box flex="1"
                    pl={{ base: '0', lg: 20 }}
                    mb={{ base: '20' }}
                    mt={{ lg: 20 }}
                >
                    <img src={fort_organisation} alt="fort_organisation" />
                </Box>
            </Flex>

        </Box>
    );
};

export default HomeAbout;
