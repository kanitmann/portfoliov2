import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
    padding-left: 3.4em;
    text-indent: -3.4em;
`

export const SkillSection = styled(Box)`
    padding-top : 0.02em;
    display: flex;
    align-items: center;
    justify-content:center;
`


export const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1em;
`

export const BioMonth = styled.span`
    font-weight: bold;
    padding-left: 1em;
    text-indent: -1em;
    padding-top: 0.5em;
    display: block;
`

export const ItemedList = styled.span`
    display: inline-block;
    padding-right:1em;
`