import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {ComponentPreviews} from '../../Utils/ComponentPreviews'
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'

// const getDynamicComponent = (c) =>
// 	dynamic(() => import('../components/templates/Card/Card') as any, {
// 		ssr: false,
// 		loading: () => <p>Loading...</p>,
// 	})

const Preview = () => {
	// const router = useRouter()

	// const { component } = router.query

	// const DynamicComponent = getDynamicComponent(component)

	// return <DynamicComponent />
}

export default Preview

// Check out readdirSync 

// Fetch necessary components to render
export const getStaticProps: GetStaticProps = async (context) => {
	const pages = ComponentPreviews();

	return {
	  props: { pages }, // will be passed to the page component as props
	}
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    // ...
  }
