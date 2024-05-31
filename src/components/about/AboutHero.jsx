import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import fort_pricing_hero from "../../assets/fort_pricing_hero.svg";
import fort_sofa_with_people from "../../assets/fort_sofa_with_people.png";
import fort_mission_vision from "../../assets/fort_mission_vision.png";
import CoreValues from './CoreValues';


const AboutHero = () =>
{
    return (
        <>
            <Box px={10} position="relative">
                <Box
                    position="absolute"
                    top={20}
                    left={0}
                    right={0}
                    bottom={0}
                    bgImage={`url(${fort_pricing_hero})`}
                    bgRepeat="no-repeat"
                    bgPosition="top"
                    bgSize="70%"
                    zIndex={-1}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: '3%',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(500px)',
                    }}
                />
                <Box py={10}>
                    <Heading as="h1" size="2xl" fontWeight="bold" color="black" lineHeight="1.5" textAlign="center" pt={20}>
                        Fort empowers organizations to<br />
                        focus on the greatest assets,<br />
                        their people
                    </Heading>
                </Box>

                <Box m={0} p={0}>
                    <Image src={fort_sofa_with_people} alt='fort_sofa_with_people' width="100%" />
                </Box>

                <Flex pt={20} pb={5}>
                    <Box flex="1" pt={10}>
                        <Box pr={20}>
                            <Heading as="h2" size="xl" mb={4} color="black">
                                Our Mission
                            </Heading>
                            <Text fontSize="xl" mb={20} pr={20}>
                                To harness, enhance, and enable human
                                capital in Africa through innovative solutions.
                            </Text>
                            <Heading as="h2" size="xl" mb={4} color="black">
                                Our Vision
                            </Heading>
                            <Text fontSize="xl" mb={20} pr={20}>
                                To be the leading provider of human capital
                                management solutions and resources in
                                Africa, unlocking the full potential of
                                individuals and businesses across the
                                continent.
                            </Text>
                        </Box>
                    </Box>
                    <Box flex="1" pt={5}>
                        <img src={fort_mission_vision} alt="fort_mission_vision" />
                    </Box>
                </Flex>
            </Box>
            <CoreValues />
        </>
    );
};

export default AboutHero;
