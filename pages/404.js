import NextLink from 'next/link'
import { Box, Container, Text, Heading, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container maxW='container.sm'>
            <Heading as="h1">
                Not Found
            </Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound