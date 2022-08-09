import { Container, Badge, Divider, Button, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Auto-Mailer">
            <Container maxW='container.sm'>
                <Title>VIT Flex <Badge>2021</Badge> </Title>
                <P>This page is still under construction.
                </P>
                <Divider my={6} />
                <Box my={6} align="center">
                    <NextLink href="/works" passHref>
                        <Button colorScheme="teal">Return to Works</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work;