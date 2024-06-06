import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import '../../App.css';

const NavLinks = () =>
{
    return (
        <HStack spacing="24px">
            <NavLink to="/" exact className="common-link" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/about-us" className="common-link" activeClassName="active">
                About Us
            </NavLink>
            <NavLink to="/contact-us" className="common-link" activeClassName="active">
                Contact Us
            </NavLink>
            <a href="https://jobs.forthcm.com/" className="common-link" target="_blank" rel="noopener noreferrer">
                Jobs <ExternalLinkIcon mx="2px" />
            </a>
        </HStack>
    );
};

export default NavLinks;
