import React from 'react';
import { Box, Grid, GridItem, Heading, Text, Link, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { PiChatsCircleBold } from 'react-icons/pi';

const Contact = () =>
{
    return (
        <Box p={8}>
            {/* Grid Section */}
            <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={8}>
                <GridItem>
                    <Box textAlign="center">
                        <PiChatsCircleBold size="40px" />
                        <Heading as="h3" size="md" mt={4}>Chat with us</Heading>
                        <Text mt={2}>Send us a mail if you need assistance.</Text>
                        <Link href="mailto:contact@forthcm.com" color="teal.500" mt={2} display="block">contact@forthcm.com</Link>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box textAlign="center">
                        <PiChatsCircleBold size="40px" />
                        <Heading as="h3" size="md" mt={4}>Chat with us</Heading>
                        <Text mt={2}>Send us a mail if you need assistance.</Text>
                        <Link href="mailto:contact@forthcm.com" color="teal.500" mt={2} display="block">contact@forthcm.com</Link>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box textAlign="center">
                        <PiChatsCircleBold size="40px" />
                        <Heading as="h3" size="md" mt={4}>Chat with us</Heading>
                        <Text mt={2}>Send us a mail if you need assistance.</Text>
                        <Link href="mailto:contact@forthcm.com" color="teal.500" mt={2} display="block">contact@forthcm.com</Link>
                    </Box>
                </GridItem>
            </Grid>

            {/* Contact Form Section */}
            <Heading as="h2" size="lg" mb={6}>Contact Us</Heading>
            <Box as="form" maxW="600px" mx="auto">
                <FormControl mb={4}>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder="First Name" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Last Name" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Contact</FormLabel>
                    <Input placeholder="Contact" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" type="email" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder="Phone Number" type="tel" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Your Message" size="lg" />
                </FormControl>
                <Button colorScheme="teal" width="100%">Submit</Button>
            </Box>
        </Box>
    );
};

export default Contact;
