// eslint-disable-next-line react/display-name
import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PCSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="60%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const PCContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="pc"
        m="auto"
        mt={['-20px', '-60px', '-220px']}
        mb={['-40px', '-180px', '-140px']}
        w={[280, 480, 600]}
        h={[280, 480, 600]}
        position="relative"
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <PCContainer>
            <PCSpinner />
        </PCContainer>
    )
}

export default Loader