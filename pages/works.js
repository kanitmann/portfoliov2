import { Container, Box, Heading, SimpleGrid, Dividers } from '@chakra-ui/react'
import Section from "../components/section"
import { WorkGridItem } from '../components/grid-item'
import thumbTheoryJS from '../public/images/Theoryjs.png'
import thumbCOVIDAPI from '../public/images/news_api.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="theoryjs" title="TheoryJS" thumbnail={thumbTheoryJS}>
                        CLI Tool to quickly save what's on your mind 🦋
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="covidnewsapi" title="COVID News API" thumbnail={thumbCOVIDAPI}>
                        API to get COVID-19 news
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;