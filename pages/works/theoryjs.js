import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="TheoryJS">
            <Container maxW='container.sm'>
                <Title>TheoryJS <Badge>2022</Badge> </Title>
                <P>A Command Line Interface (CLI) Tool to quickly save what&apos;s on your mind.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/kanitmann/theoryJS">https://github.com/kanitmann/theoryJS <ExternalLinkIcon mx="1px" />  </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows / Mac / Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs</span>
                    </ListItem>
                </List>
                <Divider />
                <WorkImage src="/images/Theoryjs.png" alt="TheoryJS" />
            </Container>
        </Layout>
    )
}

export default Work;