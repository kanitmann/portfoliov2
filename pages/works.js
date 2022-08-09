import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from "../components/section"
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbTheoryJS from '../public/images/Theoryjs.png'
import thumbCOVIDAPI from '../public/images/news_api.png'
import thumbDWebApp from '../public/images/DAPP.png'
import thumbGAuth from '../public/images/gauth.png'
import thumbVITFlex from '../public/images/VITFlex.png'
import thumbFreelance from '../public/images/Freelanceimg.png'

const Works = () => {
    return (
        <Layout>
            <Container maxW='container.sm'>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="theoryjs" title="TheoryJS" thumbnail={thumbTheoryJS}>
                            {`CLI Tool to quickly save what's on your mind 🦋`}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="covidnewsapi" title="COVID News API" thumbnail={thumbCOVIDAPI}>
                            An API to get latest COVID-19 news, made in JS
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="gauth" title="G-Mailer" thumbnail={thumbGAuth}>
                            G-Mailer is a mail automation service for Gmail built on python
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.3}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem id="Dwebapp" title="Decentralized Social Wall" thumbnail={thumbDWebApp}>
                            Decentralized Social Media Wall
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="vitflex" title="Companion app for VIT students" thumbnail={thumbVITFlex}>
                            VIT FLEX
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.3}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Freelance
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem id="freelance" title="Freelance Profile" thumbnail={thumbFreelance}>
                            Freelance profile TBA
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container >
        </Layout>
    )
}

export default Works;
export { getServerSideProps } from '../components/chakra'