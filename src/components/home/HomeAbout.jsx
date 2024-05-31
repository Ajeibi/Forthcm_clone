import React from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import fort_recruitment_use_case from "../../assets/fort_recruitment_use_case.png"
import fort_organisation from "../../assets/fort_organisation.png"
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const HomeAbout = () =>
{
    return (
        <Box p={20} mx={10}>
            {/* Main Header */}
            <Box textAlign="center" mb={8}>
                <Heading as="h1" size="xl" fontWeight="bold" color="black" lineHeight="1.5">
                    One platform built for <br /> different use cases
                </Heading>
                <Text mt={2} mb={20} fontSize="lg" opacity={0.4}>
                    Trusted by the world's best companies.
                </Text>
            </Box>
            {/* First Section */}
            <Flex mb={10} align="center" px={10}>
                <Box flex="1" pr={20}>
                    <img src={fort_recruitment_use_case} alt="fort_recruitment_use_case" />
                </Box>
                <Box flex="1" pl={20}>
                    <Heading as="h4" size="sm" color="#0BA043" mb={5}>RECRUITERS</Heading>
                    <Heading as="h2" size="lg" color="black">Elevate Talent <br /> Acquisition for Your<br /> Clients</Heading>
                    <Text mt={4} color="#535353" pb={5}>
                        Fort helps you effortlessly manage job posts,
                        applications, and team collaborations, enabling
                        you to attract and hire the best candidates.
                    </Text>
                    <Flex alignItems="center" gap={2}>
                        <Link style={{ fontWeight: 'bold' }}>Get Started With Hiring</Link>
                        <Icon as={GoArrowRight} boxSize={7} />
                    </Flex>
                </Box>
            </Flex>

            {/* Second Section */}
            <Flex align="center" mt={10} pt={10} px={10}>
                <Box flex="1" pr={20}>
                    <Heading as="h4" size="sm" color="#0BA043" mb={5}>ORGANISATIONS</Heading>
                    <Heading as="h2" size="lg" color="black">Enhance Your<br />
                        Organization’s Hiring<br />
                        Strategy</Heading>
                    <Text mt={4} color="#535353" pb={5}>
                        Fort enables you to streamline your recruitment
                        processes, automate repetitive hiring tasks, and
                        make data-driven decisions to support your
                        organization's talent strategy.
                    </Text>
                    <Flex alignItems="center" gap={2}>
                        <Link style={{ fontWeight: 'bold' }}>Streamline Your Hiring Process Now</Link>
                        <Icon as={GoArrowRight} boxSize={7} />
                    </Flex>
                </Box>
                <Box flex="1" pl={20}>
                    <img src={fort_organisation} alt="fort_organisation" />
                </Box>
            </Flex>

        </Box>
    );
};

export default HomeAbout;
