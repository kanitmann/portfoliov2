import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} textColor="white" align="center">
                Hello, I am Kanit Mann. I love creating!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as = "h2" variant = "page-title">Kanit Mann</Heading>
                    <p>Developer / Designer / Programmer</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page;