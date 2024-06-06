import { Box, Flex, HStack, Text, Divider, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import fort_logo_light from '../../assets/fort_logo_light.svg';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaMedium } from 'react-icons/fa';


const Footer = () =>
{
    return (
        <Box bg="#101828" color="white" py={10} px={{ base: '20px', lg: 10 }}>
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={fort_logo_light} alt="logo" />
            </Link>
            <Flex pt={5} fontWeight="bold">
                <HStack spacing="24px" flexDirection={{ base: 'column', md: 'row' }} align='flex-start'>
                    <a href="/about-us" onClick={() => window.scrollTo(0, 0)}>
                        About Us
                    </a>
                    <a href="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                        Contact Us
                    </a>
                    <a href="https://medium.com/@fort_hcm" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                    <a href="https://jobs.forthcm.com/" target="_blank" rel="noopener noreferrer">
                        Jobs <ExternalLinkIcon />
                    </a>
                    <a href="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>
                        Privacy Policy
                    </a>
                    <a href="/terms-of-use" onClick={() => window.scrollTo(0, 0)}>
                        Terms of Use
                    </a>
                </HStack>
            </Flex>
            <Divider borderColor="white" py={5} />
            <Flex justify="space-between" py={10} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <Text py={{ base: 5 }}>© 2024 Fort. Powered by Pyranex HQ. All rights reserved.</Text>
                <HStack spacing={4} color="gray.400">
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
            </Flex>
        </Box>
    );
};

export default Footer;
