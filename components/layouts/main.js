import Head from "next/head"
import NavBar from "../navbar"
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={0}>
            <Head>
                <meta name="viewport" const="width=device-width, initial-scale=1" />
                <title>
                    Kanit Mann - Homepage
                </title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW='container.md' pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main