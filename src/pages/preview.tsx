import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const getDynamicComponent = (c) =>
	dynamic(() => import('../components/templates/Card/Card') as any, {
		ssr: false,
		loading: () => <p>Loading...</p>,
	})

const Preview = () => {
	const router = useRouter()

	const { component } = router.query

	const DynamicComponent = getDynamicComponent(component)

	return <DynamicComponent />
}

export default Preview
