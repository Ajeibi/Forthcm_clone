import React from 'react';
import { Box, Flex, VStack, Link as ChakraLink, CloseButton } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import sidebarLinks from '../../constants';
import fort_logo from '../../assets/fort_logo.svg';

const Sidebar = ({ onClose }) =>
{
    const location = useLocation();

    return (
        <Box
            position="fixed"
            top="0"
            right="0"
            w="100%"
            h="100%"
            bg="white"
            zIndex="overlay"
            p="4"
            display={{ base: 'block', md: 'none' }}
        >
            <Flex justify="space-between" align="center" mb="10">
                <Link to="/" onClick={onClose}>
                    <img src={fort_logo} alt="logo" />
                </Link>
                <CloseButton onClick={onClose} />
            </Flex>
            <VStack spacing="4" align="stretch">
                {sidebarLinks.map((link, index) => (
                    <ChakraLink
                        as={Link}
                        to={link.route}
                        key={link.label}
                        onClick={onClose}
                        p="5"
                        borderBottom="1px solid #E2E8F0"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        className={`common-link ${location.pathname === link.route ? 'active' : ''}`}
                    >
                        {link.label}
                        {index === sidebarLinks.length - 1 && <ExternalLinkIcon mx="2px" />}
                    </ChakraLink>
                ))}
            </VStack>
        </Box>
    );
};

export default Sidebar;
