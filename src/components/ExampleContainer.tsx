import { Box } from '@chakra-ui/react'
import { ExampleHeader } from './ExampleHeader'
import { ExampleBody } from './ExampleBody'

import Card from './templates/Card/Card'

export const ExampleContainer = () => {
	return (
		<Box
			border='1px solid'
			borderColor='gray.300'
			borderRadius={8}
			bg='white'
			shadow='lg'
		>
			<ExampleHeader />
			<ExampleBody bg='gray.600' py='10' px={10}>
				<Card />
			</ExampleBody>
		</Box>
	)
}
