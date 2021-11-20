import SyntaxHighlighter from 'react-syntax-highlighter'
import atomOneDark from '../themes/atom-one-dark'

export const ExampleCode = () => {
    const code = require(`!!raw-loader!./Card/Card.tsx`).default

    return (
        <div>
            <SyntaxHighlighter
                wrapLines={false}
                showLineNumbers={true}
                language='tsx'
                style={atomOneDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
