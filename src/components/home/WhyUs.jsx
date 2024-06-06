import React from 'react';
import { Box, Image, Text, Flex, Icon, Circle, SimpleGrid, Heading } from '@chakra-ui/react';
import { GoShieldCheck } from "react-icons/go";
import { TiFlashOutline } from "react-icons/ti";
import fort_why_us1 from "../../assets/fort_why_us1.svg";
import fort_recruitment_use_case from "../../assets/fort_recruitment_use_case.png";
import fort_why_us3 from "../../assets/fort_why_us3.svg";

const WhyUs = () =>
{
    return (
        <Box px={{ base: "20px", lg: 0 }}>
            <Box bg="#F5FFFA" p={{ lg: 10 }} opacity={0.9}>
                <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
                    {/* Left side with images */}
                    <Box w={{ base: '100%', md: '40%' }} p={{ lg: 4 }} mb={{ base: 8, md: 0 }}>
                        <Box mb={4}>
                            <Image src={fort_why_us1} alt="fort_why_us1" />
                        </Box>
                        <Flex flexDirection={{ base: 'row', md: 'row' }} gap={{ base: "10px" }}>
                            <Box w={{ base: '100%', md: '50%' }} pr={{ md: 2 }} mb={{ base: 4, md: 0 }}>
                                <Box h={{ base: "150px", lg: "200px" }} borderRadius="lg" overflow="hidden">
                                    <Image src={fort_recruitment_use_case} alt="fort_recruitment_use_case" h="100%" w="100%" objectFit="cover" />
                                </Box>
                            </Box>
                            <Box w={{ base: '100%', md: '50%' }} pl={{ md: 2 }}>
                                <Box h={{ base: "150px", lg: "200px" }} borderRadius="lg" overflow="hidden">
                                    <Image src={fort_why_us3} alt="fort_why_us3" h="100%" w="100%" objectFit="cover" />
                                </Box>
                            </Box>
                        </Flex>
                    </Box>

                    {/* Right side with texts and icons */}
                    <Box w={{ base: '100%', md: '60%' }} py={10} px={{ base: "20px", lg: 0 }}>
                        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
                            <Box>
                                <Flex align="center">
                                    <Box>
                                        <Circle size="50px" bg="rgba(173, 255, 195, 0.3)" color="teal.600" mr={4} mb={5}>
                                            <Icon as={TiFlashOutline} boxSize={6} />
                                        </Circle>
                                        <Text fontWeight="bold" fontSize="xl" mb={5}>Stability & Reliability</Text>
                                        <Text lineHeight="1.5" opacity={0.5}>We strive to deliver a robust platform that organizations can depend on, ensuring seamless operations.</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex align="center">
                                    <Box>
                                        <Circle size="50px" bg="rgba(173, 255, 195, 0.3)" color="teal.600" mr={4} mb={5}>
                                            <Icon as={GoShieldCheck} boxSize={7} />
                                        </Circle>

                                        <Text fontWeight="bold" fontSize="xl" mb={5}>Strength & Protection</Text>
                                        <Text lineHeight="1.5" opacity={0.5}>Fort is designed to safeguard and protect the vital assets of any organization – its people.</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex align="center">
                                    <Box>
                                        <Circle size="50px" bg="rgba(173, 255, 195, 0.3)" color="teal.600" mr={4} mb={5}>
                                            <Icon as={TiFlashOutline} boxSize={6} />
                                        </Circle>
                                        <Text fontWeight="bold" fontSize="xl" mb={5}>Strategic Positioning</Text>
                                        <Text lineHeight="1.5" opacity={0.5}>Fort offers organizations strategic insights and actionable data, empowering them to make informed decisions about their workforce.</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex align="center">
                                    <Box>
                                        <Circle size="50px" bg="rgba(173, 255, 195, 0.3)" color="teal.600" mr={4} mb={5}>
                                            <Icon as={GoShieldCheck} boxSize={7} />
                                        </Circle>
                                        <Text fontWeight="bold" fontSize="xl" mb={5}>Unity & Collaboration</Text>
                                        <Text lineHeight="1.5" opacity={0.5}>Our solutions enable seamless communication, enhance employees engagement, and promote collaboration.</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default WhyUs;
