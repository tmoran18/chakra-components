import { Box } from '@chakra-ui/layout'

interface exampleBodyProps {
	bg?: string
	py?: number | string
	px?: number
	maxWidth?: number
	children: React.ReactNode
}

export const ExampleBody = ({
	bg,
	py,
	px,
	maxWidth,
	children,
}: exampleBodyProps) => {
	return (
		<Box bg={bg} py={py} px={px} maxW={maxWidth} borderBottomRadius={10}>
			{children}
		</Box>
	)
}
