import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import fort_collaborate from "../../assets/fort_collaborate.png";
import fort_communicate from "../../assets/fort_communicate.png";
import fort_simplify from "../../assets/fort_simplify.png";
import fort_data from "../../assets/fort_data.svg";
import fort_job_listing from "../../assets/fort_job_listing.svg";

const HomeAboutCtd = () =>
{
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const sections = document.querySelectorAll('.scroll-section');

            sections.forEach((section, index) =>
            {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top - headerHeight;
                const sectionBottom = rect.bottom;

                if (sectionTop >= 0 && sectionBottom <= window.innerHeight)
                {
                    setActiveIndex(index);
                }
            });
        };

        const debounceScroll = () =>
        {
            let timer;
            return () =>
            {
                clearTimeout(timer);
                timer = setTimeout(handleScroll, 100);
            };
        };

        const debouncedHandleScroll = debounceScroll();
        window.addEventListener('scroll', debouncedHandleScroll);

        return () => window.removeEventListener('scroll', debouncedHandleScroll);
    }, []);

    const images = [
        fort_job_listing,
        fort_simplify,
        fort_collaborate,
        fort_communicate,
        fort_data,
    ];

    return (
        <Box bg="#101828" color="white" p={20} minHeight="100vh">
            <Box textAlign="center" mb={8}>
                <Heading as="h1" size="2xl" fontWeight="bold" p={20}>
                    Streamline your <Box as="span" color="#0BA043">hiring</Box><br />
                    <Box as="span" bgGradient="linear(to-r, #C1EB64, #0BA043)" bgClip="text">process</Box> with Fort
                </Heading>
            </Box>

            <Flex position="relative">
                <Box flex="1" pr={{ base: 0, md: 8 }}>
                    {[
                        {
                            title: "Source Talents Easily",
                            description: "Talent acquisition demands efficiency. With Fort, you can create compelling job posts and identify talents perfect fit for your team."
                        },
                        {
                            title: "Track and Manage Applicants with Ease",
                            description: "Keeping track of applicants and managing their information can be overwhelming. Our intuitive interface simplifies applicant tracking and management, enabling you to stay in control and make decisions with clarity."
                        },
                        {
                            title: "Collaborate Effectively with Your Team",
                            description: "We know that collaboration among team members is crucial for successful hiring. Fort allows you to collaborate seamlessly with your hiring team, making collective decisions and improving the recruitment process."
                        },
                        {
                            title: "Communicate Seamlessly For a Smooth Hiring Process",
                            description: "Communication is key during the hiring process. Fort enables constant and transparent communication with applicants, keeping them engaged and informed every step of the way."
                        },
                        {
                            title: "Make Informed Decisions with Data-Driven Insights",
                            description: "Data and analytics provide valuable insights into your recruitment process. Fort empowers you with data-driven decision-making by offering relevant reports and analytics, helping you refine your strategies for even better results."
                        }
                    ].map((section, index) => (
                        <Box key={index} my={20} className="scroll-section">
                            <Heading as="h3" size="lg" mb={8} color={activeIndex === index ? 'white' : 'gray'}>
                                {section.title}
                            </Heading>
                            <Text fontSize="lg" pb={20} color={activeIndex === index ? 'white' : 'gray'}>
                                {section.description}
                            </Text>
                        </Box>
                    ))}
                </Box>
                <Box
                    flex="1"
                    display={{ base: 'none', md: 'block' }}
                    position="sticky"
                    top="20vh"
                    height="200vh"
                    p={20}
                    ml={20}
                    overflow="hidden"
                >
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`Image ${activeIndex + 1}`}
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            style={{
                                position: 'fixed',
                                width: '100%'
                            }}
                        />
                    </motion.div>
                </Box>
            </Flex>
        </Box>
    );
};

export default HomeAboutCtd;