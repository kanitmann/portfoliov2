import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Container, Box, Heading, Image, useCOlorModeValue, useColorModeValue, Link } from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragragh';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} textColor="white" align="center">
                Hello, I am Kanit Mann. I love creating!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Kanit Mann</Heading>
                    <p>Developer / Designer / Programmer</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/kanitmann.png"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">Works</Heading>
                <Paragraph>
                    Computer Science Undergraduate Batch of 2023 from Vellore Institute Of Technology, Vellore, TN, India. <NextLink href="/works/"><Link>Working Link</Link></NextLink>
                </Paragraph>
                <Box align="center" my={4}>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Portfolio
                    </Button>
                </Box>
            </Section>
        </Container>
    )
}

export default Page;