import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import fort_pricing_hero from "../../assets/fort_pricing_hero.svg";
import fort_sofa_with_people from "../../assets/fort_sofa_with_people.png";
import fort_mission_vision from "../../assets/fort_mission_vision.png";
import CoreValues from './CoreValues';


const AboutHero = () =>
{
    return (
        <Box px={{ base: "20px", lg: 0 }}>
            <Box px={{ lg: 10 }} position="relative">
                <Box
                    position="absolute"
                    top={{ base: '56px', lg: 20 }}
                    left={0}
                    right={0}
                    bottom={0}
                    bgImage={`url(${fort_pricing_hero})`}
                    bgRepeat="no-repeat"
                    bgPosition="top"
                    bgSize={{ lg: "70%" }}
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

                    <Text
                        display={{ base: 'block', md: 'none' }}
                        textAlign="center"
                        fontSize="18px"
                        mb={{ base: '8', sm: '4' }}
                        color="#535353"
                        lineHeight={{ base: '1.75', md: '1.75', lg: '1.5' }}
                        pt={{ base: 5, lg: 0 }}
                    >
                        Fort simplifies your hiring process, allowing you to source, screen, and select candidates who are the perfect fit for your organisation without breaking the bank or losing out on hiring the best fit.
                    </Text>
                </Box>

                <Box m={0} p={0}>
                    <Image src={fort_sofa_with_people} alt='fort_sofa_with_people' width="100%" />
                </Box>

                <Flex pt={{ base: '64px', lg: 20 }} pb={5} direction={{ base: 'column', md: 'row' }}>
                    <Box flex="1" pt={{ lg: 10 }} textAlign={{ base: 'center', md: 'left' }}>
                        <Box pr={{ base: 0, lg: 20 }}>
                            <Heading as="h2" fontSize={{ base: '18px', lg: "30px" }} mb={4} color="black">
                                Our Mission
                            </Heading>
                            <Text fontSize={{ base: '16px', lg: "20px" }} mb={20} pr={{ lg: 20 }}>
                                To harness, enhance, and enable human
                                capital in Africa through innovative solutions.
                            </Text>
                            <Heading as="h2" fontSize={{ base: '18px', lg: "30px" }} mb={4} color="black">
                                Our Vision
                            </Heading>
                            <Text fontSize={{ base: '16px', lg: "20px" }} mb={{ base: '64px', lg: 20 }} pr={{ lg: 20 }}>
                                To be the leading provider of human capital
                                management solutions and resources in
                                Africa, unlocking the full potential of
                                individuals and businesses across the
                                continent.
                            </Text>
                        </Box>
                    </Box>
                    <Box flex="1" pt={{ lg: 5 }}>
                        <img src={fort_mission_vision} alt="fort_mission_vision" />
                    </Box>
                </Flex>
            </Box>
            <CoreValues />
        </Box>
    );
};

export default AboutHero;
