import Head from "next/head"
import NavBar from "../navbar"
import { Box, Container } from '@chakra-ui/react'
import PCLoader from "../pc-loader"
import dynamic from "next/dynamic"
import Footer from "../footer"
import Script from 'next/script';


const LazyPC = dynamic(() => import('../pc'), {
    ssr: false,
    loading: () => <PCLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Script id="analytics" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script id="googleanalytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Kanit Mann is a tech enthusiast with entry-level industrial experience in Database Management, Web Development, and Embedded Programming." />
                <meta name="author" content="Kanit Mann" />
                <meta name="author" content="kanitmann" />
                <meta name="robots" content="all" />
                <meta name="robots" content="max-image-preview:standard" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/apple-touch-icon.png" type="image/apple-touch-icon.png" />
                <meta name="twitter:title" content="Kanit Mann" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mannkanit" />
                <meta name="twitter:creator" content="@mannkanit" />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kanitmann/portfoliov2/master/public/card.png" />
                <meta property="og:site_name" content="Kanit Mann" />
                <meta name="og:title" content="Kanit Mann" />
                <meta property="og:type" content="website" />
                <meta property="og:image:url" content="https://raw.githubusercontent.com/kanitmann/portfoliov2/master/public/card.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:alt" content="A screenshot image of Kanit's homepage" />
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