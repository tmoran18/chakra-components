import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import SidebarWithHeader from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<SidebarWithHeader>
				<Component {...pageProps} />
			</SidebarWithHeader>
		</ChakraProvider>
	)
}

export default MyApp
