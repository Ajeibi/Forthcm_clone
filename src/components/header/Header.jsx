import React, { useState } from 'react';
import { Box, Flex, Button, IconButton } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import fort_logo from '../../assets/fort_logo.svg';

const Header = () =>
{
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () =>
    {
        setSidebarOpen(!isSidebarOpen);
    };

    const isHomePage = location.pathname === '/';

    return (
        <>
            <Box px={{ base: '20px', lg: "12" }} py="4" bg={isHomePage ? 'white' : 'gray.50'}>
                <Flex align="center" justify="space-between">
                    <Link to="/" onClick={() => setSidebarOpen(false)}>
                        <img src={fort_logo} alt="logo" />
                    </Link>
                    <Flex display={{ base: 'none', md: 'flex' }}>
                        <NavLinks />
                    </Flex>
                    <IconButton
                        display={{ base: 'flex', md: 'none' }}
                        icon={<HamburgerIcon boxSize={6} />}
                        onClick={toggleSidebar}
                        aria-label="Open Menu"
                        bg='none'
                        _hover='none'
                    />
                    <Button
                        as={Link}
                        to="/contact-us"
                        size="lg"
                        bg="black"
                        color="white"
                        textAlign="center"
                        fontWeight="light"
                        _hover={{ bg: 'black' }}
                        display={{ base: 'none', md: 'flex' }}
                        p="4"
                    >
                        Contact Sales
                    </Button>
                </Flex>
            </Box>
            {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
        </>
    );
};

export default Header;
