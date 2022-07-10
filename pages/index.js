import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Container, Box, Heading, Image, useCOlorModeValue, useColorModeValue, Link } from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragragh';
import { BioMonth, BioSection, BioYear } from '../components/layouts/bio';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I am Kanit Mann. I love creating!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Kanit Mann</Heading>
                    {/* <p>Developer / Designer / Programmer</p> */}
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
                    Tech enthusiast with entry-level industrial experience in Database Management, Web Development, and
                    Embedded Programming.
                    {/* <NextLink href="/works/"><Link>Working Link</Link></NextLink> */}
                </Paragraph>
                <Box align="center" my={4}>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Github
                    </Button>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">Bio</Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    <BioMonth>July</BioMonth>
                    Born in Haryana, India.
                </BioSection>

                <BioSection>
                    <BioYear>2019</BioYear>
                    <BioMonth>March</BioMonth>
                    Completed HighSchool in Noida, India.

                    <BioMonth>July</BioMonth>
                    Started studying at <Link href="https://www.vit.ac.in/">Vellore Institute of Technology </Link>, Vellore.
                </BioSection>

                <BioSection>
                    <BioYear>2021</BioYear>
                    <BioMonth>Mar - Aug</BioMonth>
                    Interned at <Link href="https://www.trikon.tech/">Trikon Technologies</Link> as Firmware Developer.
                    <BioMonth>Jul - Sep</BioMonth>
                    Joined <Link href="https://www.tatapower.com/">Tata Power</Link> as Full Stack Intern.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">I ♥</Heading>
                <Paragraph>
                    Programming, Designing , Gaming, Reading, Listening to and Writing Rap Music
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page;