import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useClipboard, Button, Box } from '@chakra-ui/react'

interface ExampleCodeProps {
    code: string
}

export const ExampleCode = ({ code }: ExampleCodeProps) => {
    const { hasCopied, onCopy } = useClipboard(code)

    return (
        <Box pos='relative'>
            <Button
                pos='absolute'
                right={4}
                top={4}
                onClick={onCopy}
                paddingY={1}
                height={'auto'}>
                {hasCopied ? 'Copied' : 'Copy'}
            </Button>
            <SyntaxHighlighter
                wrapLines={false}
                showLineNumbers={true}
                language='tsx'
                style={atomDark}
                customStyle={{
                    textDecoration: 'none',
                    backgroundColor: '#282c34',
                }}>
                {code}
            </SyntaxHighlighter>
        </Box>
    )
}
