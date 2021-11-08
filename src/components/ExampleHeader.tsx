import { Flex, Box } from '@chakra-ui/react'

// The header component will house the preview/code switch, sizing switch and preview button
export const ExampleHeader = () => {
	return (
		<Flex
			justify='space-between'
			padding={5}
			borderBottom='1px solid'
			borderColor='gray.200'
		>
			<Box>Preview Switch</Box>
			<Box>View Switch | Preview Btn</Box>
		</Flex>
	)
}
