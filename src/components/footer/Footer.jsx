import { Box, Flex, HStack, Text, Divider, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import fort_logo_light from '../../assets/fort_logo_light.svg';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaMedium } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () =>
{
    return (
        <Box bg="#101828" color="white" p={10}>
            <NavLink href="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={fort_logo_light} alt="logo" />
            </NavLink>
            <Flex pt={5}>
                <HStack spacing="24px">
                    <a href="/about-us" onClick={() => window.scrollTo(0, 0)}>
                        About Us
                    </a>
                    <a href="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                        Contact Us
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
            <Flex justify="space-between" align="center" py={10}>
                <Text>© 2024 Fort. Powered by Pyranex HQ. All rights reserved.</Text>
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
