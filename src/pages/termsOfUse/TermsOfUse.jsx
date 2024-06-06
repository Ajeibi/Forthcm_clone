import React from 'react';
import { ChakraProvider, Box, Text, Heading } from '@chakra-ui/react';

const TermsAndConditions = () =>
{
    return (
        <Box p={5}>
            <Heading size="lg" mb={4}>
                Terms and Conditions
            </Heading>
            <Box mb={4}>
                <Text>
                    <strong>3.12.</strong> The Recruiter Client agrees not to disclose information that you do not have the consent to disclose (such as confidential information of others (including your employer)).
                </Text>
                <Text>
                    <strong>3.13.</strong> The Recruiter Client shall not reverse engineer, decompile, disassemble, decipher or otherwise attempt to derive the source code or any related technology for the Website and its Services.
                </Text>
                <Text>
                    <strong>3.14.</strong> The Recruiter Client shall not imply or state that you are affiliated with or endorsed by Pyranex without our express written consent.
                </Text>
                <Text>
                    <strong>3.15.</strong> The Recruiter Client shall use the Website and Services in a professional manner.
                </Text>
                <Text>
                    <strong>3.16.</strong> The Recruiter Client indemnifies and will keep indemnified Pyranex, its officers, employees, and agents against all claims, actions, suits, liabilities, actual or contingent costs, damages, and expenses incurred by Pyranex in connection with:
                </Text>
                <Text ml={4}>
                    v. Any breach of these Terms by you;<br />
                    vi. Any negligent act or omission by you;<br />
                    vii. Any posting by you on the Website or;<br />
                    viii. An actual or alleged breach by you of any law, legislation, regulations, or codes of conduct which occurs as a consequence of your posting or information you provided appearing on the Website.
                </Text>
            </Box>
            <Box mb={4}>
                <Heading size="md" mb={2}>Section 4: Governing Law and Dispute Resolution</Heading>
                <Text>
                    <strong>4.1.</strong> In the unlikely event there is a legal dispute between Pyranex and You (the Client and Recruiter Client), You agree that the Laws of Nigeria shall exclusively govern any dispute relating to the Service(s).
                </Text>
                <Text>
                    <strong>4.2.</strong> You and Pyranex agree to the following procedure to resolve disputes:
                </Text>
                <Text ml={4}>
                    <strong>4.2.1.</strong> Once a dispute arises, You and Pyranex agree to attempt to resolve it informally for at least 90 days. In the event that You and Pyranex are unable to reach a resolution on the dispute, You and Pyranex agree that all claims and disputes shall be litigated in the court of competent jurisdiction in Lagos State, Nigeria.
                </Text>
            </Box>
            <Box mb={4}>
                <Heading size="md" mb={2}>Links to Third-Party Websites</Heading>
                <Text>
                    <strong>5.1.</strong> Pyranex shall have the right to update, amend, modify these Terms from time to time at its discretion.
                </Text>
                <Text>
                    <strong>5.2.</strong> By using the Pyranex website, Clients and Recruiter Clients agree to be bound by the terms stated herein.
                </Text>
                <Text>
                    <strong>5.3.</strong> Clients and Recruiter Clients may not assign any of the rights or obligations under the Agreement either in whole or in part.
                </Text>
                <Text>
                    <strong>5.4.</strong> Pyranex and its affiliates make no representation or warranty about the services, including any representation that the Website services will be uninterrupted or error-free and provide the services (including content and information) on an “as is” and “as available” basis. To the fullest extent permitted under applicable law, Pyranex and its affiliates disclaim any implied or statutory warranty, including any implied warranty of title, accuracy of data, non-infringement, merchantability or fitness for a particular purpose.
                </Text>
                <Text>
                    <strong>5.5.</strong> To the fullest extent permitted by law (and unless Pyranex has entered into a separate written agreement that overrides these terms and conditions), Pyranex, including its affiliates, will not be liable in connection with the use of the website for lost profits or lost business opportunities, reputation, loss of data or any indirect, incidental, consequential, special or punitive damages.
                </Text>
                <Text>
                    <strong>5.6.</strong> This Agreement and any rights or claims arising out of or in connection shall be governed exclusively by the laws of the Federal Republic of Nigeria.
                </Text>
            </Box>
        </Box>
    );
};

export default TermsAndConditions;