import Head from "next/head"
import NavBar from "../navbar"
import { Box, Container } from '@chakra-ui/react'
import PCLoader from "../pc-loader"
import dynamic from "next/dynamic"
import Footer from "../footer"


const LazyPC = dynamic(() => import('../pc'), {
    ssr: false,
    loading: () => <PCLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Kanit's homepage" />
                <meta name="author" content="Kanit Mann" />
                <meta name="author" content="kanitmann" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/apple-touch-icon.png" type="image/x-icon" />
                <meta name="twitter:title" content="Kanit Mann" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mannkanit" />
                <meta name="twitter:creator" content="@mannkanit" />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kanitmann/portfoliov2/master/public/card.png" />
                <meta property="og:site_name" content="Kanit Mann" />
                <meta name="og:title" content="Kanit Mann" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://raw.githubusercontent.com/kanitmann/portfoliov2/master/public/card.png" />
                <title>Kanit Mann - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyPC />

                {children}

                <Footer />
            </Container>
        </Box>
    )
}


export default Main