import { Box, useColorModeValue, Button, Flex, Heading } from '@chakra-ui/react'
import { HiPencilAlt } from 'react-icons/hi'

const CardWithUser = () => {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.700')}
			rounded={{
				md: 'lg',
			}}
			shadow='base'
			overflow='hidden'
		>
			<CardHeader
				title='Account Info'
				action={
					<Button variant='outline' minW='20' leftIcon={<HiPencilAlt />}>
						Edit
					</Button>
				}
			/>
			<CardContent>
				<Property label='Name' value='Chakra UI' />
				<Property label='Email' value='chakra-ui.sh@gmail.com' />
				<Property label='Member since' value='February, 2021' />
				<Property label='Subscription Plan' value='Starter Pro' />
			</CardContent>
		</Box>
	)
}

const CardContent = (props) => <Box {...props} />

const CardHeader = (props) => {
	const { title, action } = props
	return (
		<Flex
			align='center'
			justify='space-between'
			px='6'
			py='4'
			borderBottomWidth='1px'
		>
			<Heading fontSize='lg'>{title}</Heading>
			{action}
		</Flex>
	)
}

const Property = (props) => {
	const { label, value, ...flexProps } = props
	return (
		<Flex
			as='dl'
			direction={{
				base: 'column',
				sm: 'row',
			}}
			px='6'
			py='4'
			_even={{
				bg: useColorModeValue('gray.50', 'gray.600'),
			}}
			{...flexProps}
		>
			<Box as='dt' minWidth='180px'>
				{label}
			</Box>
			<Box as='dd' flex='1' fontWeight='semibold'>
				{value}
			</Box>
		</Flex>
	)
}

export default CardWithUser
