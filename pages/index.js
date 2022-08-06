import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons';
// import { BeatLoader } from 'react-spinners';
import Layout from '../components/layouts/article';
import { Button, Container, Box, Heading, Image, Icon, Text, useColorModeValue, Link, ListItem, List, chakra } from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioMonth, BioSection, BioYear } from '../components/layouts/bio';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
        <Layout>
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
                        <Text>Developer / Designer / Programmer</Text>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <ProfileImage
                                src="/images/kanitmann.png"
                                alt="Profile image"
                                borderRadius="full"
                                width="100%"
                                height="100%"
                            />
                        </Box>
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
                        <NextLink href="https://www.github.com/kanitmann" target="_blank">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            // spinner={<BeatLoader size={8} color='white' />}
                            >
                                My Github
                            </Button>
                        </NextLink>
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
                        <BioMonth>Mar - Dec</BioMonth>
                        Promoted to <b>Head of Design</b> and <b>Member of Board </b>at RobotVITics - Official Robotics Club of VIT.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">I ♥</Heading>
                    <Paragraph>
                        Programming, Designing, Gaming, Reading, Listening to and Writing Rap Music
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">Social</Heading>
                    <List>
                        <ListItem>
                            <Link href="https://twitter.com/mannkanit" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @mannkanit
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/kanitmann/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    @kanitmann
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/can.it07/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @can.it07
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page;
export { getServerSideProps } from '../components/chakra'