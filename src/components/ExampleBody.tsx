import { Box } from '@chakra-ui/layout'
import { Resizable } from 're-resizable'
import React from 'react'

interface exampleBodyProps {
    bg?: string
    py?: number | string
    px?: number
    maxWidth?: number
    iframeURL: string
}

export const ExampleBody = ({
    bg,
    py,
    px,
    maxWidth,
    iframeURL,
}: exampleBodyProps) => {
    const ref = React.useRef<HTMLIFrameElement>(null)
    const [height, setHeight] = React.useState('0px')

    const onLoad = () => {
        setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px')
        if (process.env.NODE_ENV === 'production') {
            console.log('In production')
        } else {
            console.log('Not in production')
        }
    }
    return (
        <Box bg={bg} py={py} px={px} borderBottomRadius={10}>
            <Box maxWidth='1000px' margin='0 auto'>
                <Resizable minWidth={250} minHeight={height} bounds={'parent'}>
                    <iframe
                        ref={ref}
                        onLoad={onLoad}
                        src={iframeURL}
                        width='100%'
                        height={height}
                        frameBorder='0'
                        style={{
                            borderRadius: '10px',
                            width: '100%',
                        }}
                        loading='eager'></iframe>
                </Resizable>
            </Box>
        </Box>
    )
}
