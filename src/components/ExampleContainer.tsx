import { Box } from '@chakra-ui/react'
import { ExampleHeader } from './ExampleHeader'
import { ExampleBody } from './ExampleBody'
import { ExampleCode } from './ExampleCode'

interface ExampleContainerProps {
    iframeURL: string
    children: React.ReactNode
}

export const ExampleContainer: React.FunctionComponent<ExampleContainerProps> =
    ({ iframeURL }) => {
        return (
            <Box
                border='1px solid'
                borderColor='gray.300'
                borderRadius={8}
                bg='white'
                shadow='lg'>
                <ExampleHeader>
                    <ExampleBody
                        iframeURL={iframeURL}
                        bg='gray.600'
                        py='10'
                        px={10}
                    />
                    <ExampleCode />
                </ExampleHeader>
            </Box>
        )
    }
