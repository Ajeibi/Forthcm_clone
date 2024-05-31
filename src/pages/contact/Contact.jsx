import
{
    Box, Grid, GridItem, Heading, Text, Link, FormControl, FormLabel, Input, Textarea, Button, Center, HStack, Icon
} from '@chakra-ui/react';
import { PiChatsCircleBold } from 'react-icons/pi';
import { FiHeadphones } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaMedium } from 'react-icons/fa';
import { SlPaperPlane } from "react-icons/sl";
import React from 'react'
import fort_pricing_hero from "../../assets/fort_pricing_hero.svg";

const Contact = () =>
{

    return (
        <Box mx={20} p={20} position='relative'>
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
                    top: '5%',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(500px)',
                }}
            />
            <Box py={10}>
                <Heading as="h1" size="2xl" fontWeight="bold" color="black" textAlign="center" pt={5}>
                    Contact Us
                </Heading>
            </Box>
            <Box mx={20} px={20}>
                {/* Grid Section */}
                <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={8} pb={20}>
                    <GridItem>
                        <Box textAlign="center">
                            <Center>
                                <PiChatsCircleBold size="25px" />
                            </Center>
                            <Heading as="h3" size="md" mt={4} color="black">Chat with us</Heading>
                            <Text mt={2} opacity={0.6} pb={5}>Send us a mail if you need assistance.</Text>
                            <Link href='mailto:contact@forthcm.com' sx={{ fontWeight: 'bold', color: "black", textDecoration: 'none', _hover: { textDecoration: 'none' } }}>contact@forthcm.com</Link>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box textAlign="center">
                            <Center>
                                <FiHeadphones size="25px" />
                            </Center>
                            <Heading as="h3" size="md" mt={4}>Phone</Heading>
                            <Text mt={2} opacity={0.6} pb={5} px={4}>Call us if you need support.</Text>
                            <Link href='tel:+234 817 474 0449' sx={{ fontWeight: 'bold', color: "black", textDecoration: 'none', _hover: { textDecoration: 'none' } }}>contact@forthcm.com</Link>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box textAlign="center">
                            <Center>
                                <SlPaperPlane size="25px" />
                            </Center>
                            <Heading as="h3" size="md" mt={4}>Socials</Heading>
                            <Text mt={2} opacity={0.6} pb={5} px={4}>Follow us on our social media pages.</Text>
                            <HStack spacing={6} color="black">
                                <Link href="https://www.instagram.com" isExternal>
                                    <Icon as={FaInstagram} boxSize={7} />
                                </Link>
                                <Link href="https://www.twitter.com" isExternal>
                                    <Icon as={FaTwitter} boxSize={7} />
                                </Link>
                                <Link href="https://www.linkedin.com" isExternal>
                                    <Icon as={FaLinkedin} boxSize={7} />
                                </Link>
                                <Link href="https://www.tiktok.com" isExternal>
                                    <Icon as={FaTiktok} boxSize={7} />
                                </Link>
                                <Link href="https://www.medium.com" isExternal>
                                    <Icon as={FaMedium} boxSize={7} />
                                </Link>
                            </HStack>
                        </Box>
                    </GridItem>
                </Grid>

                {/* Contact Form Section */}
                <Box mx={20} p={10}>
                    <Heading fontSize="23px" mb={10} textAlign="center" color="black">We’d love to hear from you. Please fill out this form.</Heading>
                    <Box as="form" maxW="600px" mx="auto" color="black" pb={8}>
                        <Grid templateColumns="repeat(2, 1fr)" gap={7}>
                            <GridItem>
                                <FormControl mb={4}>
                                    <FormLabel>First Name <Box as="span" color="black">*</Box></FormLabel>
                                    <Input placeholder="First Name" />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl mb={4} >
                                    <FormLabel>Last Name <Box as="span" color="black">*</Box></FormLabel>
                                    <Input placeholder="Last Name" />
                                </FormControl>
                            </GridItem>
                        </Grid>

                        <FormControl mb={4} >
                            <FormLabel>Name of organization <Box as="span" color="black">*</Box></FormLabel>
                            <Input placeholder="Enter organization name" />
                        </FormControl>
                        <FormControl mb={4} >
                            <FormLabel>Email <Box as="span" color="black">*</Box></FormLabel>
                            <Input placeholder="you@email.com" type="email" />
                        </FormControl>
                        <FormControl mb={4} >
                            <FormLabel>Phone Number <Box as="span" color="black">*</Box></FormLabel>
                            <Input placeholder="234 (70) 111 111 11" type="tel" />
                        </FormControl>
                        <FormControl mb={10}>
                            <FormLabel>Message <Box as="span" color="black">*</Box></FormLabel>
                            <Textarea placeholder="Leave us a message" size="lg" />
                        </FormControl>

                        <Button
                            size="lg"
                            bg="black"
                            color="white"
                            textAlign="center"
                            fontWeight="light"
                            _hover={{ bg: 'black' }}
                            p="8"
                            width="100%"
                            borderRadius="10px"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;
