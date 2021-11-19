export const baseURL = (): string => {
	if (process.env.NODE_ENV === 'production') {
		return 'https://chakra-components-eight.vercel.app'
	} else {
		return 'http://localhost:3000'
	}
}
