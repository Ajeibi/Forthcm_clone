import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const HomeAccordion = () =>
{
    return (
        <Box p={20}>
            <Box textAlign="center" mb={8}>
                <Heading as="h1" size="xl" fontWeight="bold" color="black" lineHeight="1.5">
                    Frequently Asked Questions
                </Heading>
                <Text mt={2} mb={20} fontSize="md" opacity={0.9}>
                    Everything you need to know about Fort.
                </Text>
            </Box>
            <Box px={20}>
                <Accordion allowToggle mx={20}>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton
                                        _hover={{ bg: 'none' }} // Remove hover effect
                                        borderTopWidth={0} // Remove top border
                                    >
                                        <Box as='span' flex='1' textAlign='left' py={4}>
                                            What is Fort?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} lineHeight={2.0} opacity={0.7}>
                                    Fort is a comprehensive human capital management solution that combines advanced
                                    technology and strategic human resources practices to optimize workforce management.
                                    It encompasses various features such as talent acquisition, talent management,
                                    compliance management, performance optimization, employee engagement, and more.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: 'none' }}>
                                        <Box as='span' flex='1' textAlign='left' py={4}>
                                            How can Fort benefit my organization?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} lineHeight={2.0} opacity={0.7}>
                                    Fort provides numerous benefits for your organization. It streamlines HR processes,
                                    enhances talent acquisition and management, improves compliance management, fosters
                                    employee engagement, boosts productivity, and supports data-driven decision-making.
                                    Ultimately, it helps unlock the full potential of your workforce and drives
                                    organizational success.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: 'none' }}>
                                        <Box as='span' flex='1' textAlign='left' py={4}>
                                            Is Fort customizable to our specific needs?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} lineHeight={2.0} opacity={0.7}>
                                    Yes, we understand that each organization has unique requirements. Therefore, Fort
                                    is highly customizable to cater to your specific needs. In configuring the system,
                                    configure the system, tailor workflows, and adapt features to align with your HR
                                    processes and business objectives.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: 'none' }}>
                                        <Box as='span' flex='1' textAlign='left' py={4}>
                                            Is Fort secure and compliant with data protection regulations?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} lineHeight={2.0} opacity={0.7}>
                                    Absolutely. Data security and compliance are of paramount importance to us. Fort
                                    incorporates robust security measures to protect sensitive information. We adhere
                                    to industry best practices and comply with relevant data protection regulations,
                                    ensuring your data is safeguarded.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: 'none' }}>
                                        <Box as='span' flex='1' textAlign='left' py={4}>
                                            Can Fort scale as our organization grows?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} lineHeight={2.0} opacity={0.7}>
                                    Absolutely. Fort is designed to scale with your organization. Whether you are a
                                    small business or an enterprise-level company, our solution can accommodate your
                                    growth. It offers the flexibility to add or modify features, expand user access,
                                    and adapt to your changing needs as you evolve.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _hover={{ bg: 'none' }}>
                                        <Box as='span' flex='1' textAlign='left' py={4}>
                                            How can we get started with Fort?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} lineHeight={2.0} opacity={0.7}>
                                    Getting started is simple. Simply sign up on our website. Also, you can reach out
                                    to our team through our website or contact us directly to schedule a consultation.
                                    We will discuss your requirements, provide an overview of our solution, and guide
                                    you through the implementation process. Our goal is to ensure a seamless onboarding
                                    experience and set you up for success.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    )
}

export default HomeAccordion
