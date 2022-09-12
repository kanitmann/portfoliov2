import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import '../public/app.css'
import CookieConsent from "react-cookie-consent";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <ChakraProvider theme={theme}>
                <Fonts />
                <Layout router={router}>
                    <AnimatePresence
                        mode="wait"
                        initial={true}
                        onExitComplete={() => {
                            if (typeof window !== 'undefined') {
                                window.scrollTo({ top: 0 })
                            }
                        }}
                    >
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
        </Chakra>
    )
}

export default Website