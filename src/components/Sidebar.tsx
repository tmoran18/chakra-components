import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	Icon,
	useColorModeValue,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	BoxProps,
	FlexProps,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'

interface LinkItemProps {
	name: string
}
const LinkItems: Array<LinkItemProps> = [{ name: 'Cards' }, { name: 'Stats' }]

export default function SidebarWithHeader({
	children,
}: {
	children: ReactNode
}) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size='full'
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p='4'>
				{children}
			</Box>
		</Box>
	)
}

interface SidebarProps extends BoxProps {
	onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	const router = useRouter()
	return (
		<Box
			transition='3s ease'
			bg={useColorModeValue('white', 'gray.900')}
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}
		>
			<Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					Logo
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<Flex dir='column' pl={8} py={4}>
					{router.pathname.includes(link.name) ? (
						<NavItem active key={link.name}>
							{link.name}
						</NavItem>
					) : (
						<NavItem key={link.name}>{link.name}</NavItem>
					)}
				</Flex>
			))}
		</Box>
	)
}

interface NavItemProps extends FlexProps {
	children: ReactText
	active?: boolean
}

const NavItem = ({ children, active }: NavItemProps) => {
	return (
		<Box borderBottom={active && `2px`} borderColor={active && 'blue.400'}>
			<Link href={`/components/${children}`}>
				<a>{children}</a>
			</Link>
		</Box>
	)
}

interface MobileProps extends FlexProps {
	onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height='20'
			alignItems='center'
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth='1px'
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant='outline'
				aria-label='open menu'
				icon={<FiMenu />}
			/>

			<Text
				display={{ base: 'flex', md: 'none' }}
				fontSize='2xl'
				fontFamily='monospace'
				fontWeight='bold'
			>
				Logo
			</Text>
			<DarkModeSwitch />
		</Flex>
	)
}
