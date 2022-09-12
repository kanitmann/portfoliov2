import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from "../../components/section"
import Layout from '../../components/layouts/article'
import { WorkGridItem } from '../../components/grid-item'
import thumbBlank from '../../public/images/blank.png'

const Freelance = () => {
    return (
        <Layout>
            <Container maxW='container.sm'>
                <Heading as="h3" fontSize={20} mb={4}>
                    Logo Design
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="theoryjs" title="TheoryJS" thumbnail={thumbBlank}>
                            {`CLI Tool to quickly save what's on your mind 🦋`}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="covidnewsapi" title="COVID News API" thumbnail={thumbBlank}>
                            An API to get latest COVID-19 news, made in JS
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="gauth" title="G-Mailer" thumbnail={thumbBlank}>
                            Auto-Mailer is a mail automation service for Gmail built on python
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.3}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        UI/UX
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem id="dwebapp" title="Decentralized Social Wall" thumbnail={thumbBlank}>
                            Decentralized Social Media Wall
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="vitflex" title="VIT Flex" thumbnail={thumbBlank}>
                            Companion app for VIT students
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.3}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Catalogue Design
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem id="freelance" title="Freelance Profile" thumbnail={thumbBlank}>
                            Freelance profile TBA
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container >
        </Layout>
    )
}

export default Freelance;
export { getServerSideProps } from '../../components/chakra'