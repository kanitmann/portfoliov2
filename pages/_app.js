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
                    <CookieConsent
                        location="bottom"
                        buttonText="Sure man!!"
                        cookieName="web_cookie"
                        style={{ background: "#2B373B" }}
                        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                        expires={150}
                    >
                        This website uses cookies to enhance the user experience.{" "}
                    </CookieConsent>
                    <AnimatePresence
                        exitBeforeEnter
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