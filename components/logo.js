import Link from 'next/link'
import Image from 'next/image'
import { Text, useClipboard, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height:30px;
    line-height: 20px;
    padding : 10px;

    img {
        transition: 200ms ease;
      }

    &:hover img{
        transform: rotate(20deg);
    }
`
const Logo = () => {
    const codeImg = `/images/code1${useColorModeValue('', '-white')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={codeImg} width={20} height={15} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1C'
                        fontWeight="bold"
                        ml={3}
                    >
                        Kanit Mann
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;