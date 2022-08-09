import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Covid News API">
            <Container maxW='container.sm'>
                <Title>Covid News API <Badge>2021</Badge> </Title>
                <P>An API showing all the latest Covid News from around the world.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Rapid-API</Meta>
                        <Link href="https://rapidapi.com/kanitmann/api/covid-news-live1">https://rapidapi.com/kanitmann/api/covid-news-live1 <ExternalLinkIcon mx="1px" />  </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Supports</Meta>
                        <span>NodeJS, JQuery, Rest</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ExpressJS, Axios</span>
                    </ListItem>
                </List>
                <Divider />
                <WorkImage src="/images/news_api.png" alt="News API" />
            </Container>
        </Layout>
    )
}

export default Work;