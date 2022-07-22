import dynamic from "next/dynamic"
import React from 'react'

const noSsr = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(noSsr), { ssr: false })