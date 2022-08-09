import { Container, Badge, Link, List, ListItem, Divider, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Auto-Mailer">
            <Container maxW='container.sm'>
                <Title>Auto Mailer <Badge>2021</Badge> </Title>
                <P>&apos;Auto Mailer&apos; is a mail automation service for Gmail built on python with the following features.
                    <UnorderedList ml={4} my={2}>
                        <ListItem>
                            Support CSV Mailing
                        </ListItem>
                        <ListItem>
                            Send multiple mails in one-click
                        </ListItem>
                        <ListItem>
                            Zero latency
                        </ListItem>
                        <ListItem>
                            Supports Personalised Mails
                        </ListItem>
                    </UnorderedList>
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Rapid-API</Meta>
                        <Link href="https://rapidapi.com/kanitmann/api/covid-news-live1">https://rapidapi.com/kanitmann/api/covid-news-live1 <ExternalLinkIcon mx="1px" />  </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Supports</Meta>
                        <span>Python 3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Libraries</Meta>
                        <span>Python, Axios</span>
                    </ListItem>
                </List>
                <Divider />
                <WorkImage src="/images/gauth.png" alt="News API" />
            </Container>
        </Layout>
    )
}

export default Work;