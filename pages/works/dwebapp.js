import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Dapp Web 3.0">
            <Container maxW='container.sm'>
                <Title>Decentralized Social Media DAPP <Badge>2021</Badge> </Title>
                <P>Decentralized Social Media Wall.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/kanitmann/DWebApp">https://github.com/kanitmann/DWebApp <ExternalLinkIcon mx="1px" />  </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JS, EthereumJS</span>
                    </ListItem>
                </List>
                <Divider />
                <WorkImage src="/images/DAPP.png" alt="News API" />
            </Container>
        </Layout>
    )
}

export default Work;