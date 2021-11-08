import Link from 'next/link'
import { useRouter } from 'next/router'

const Cards = () => {
	return (
		<div>
			<Link href={{ pathname: '/preview', query: { component: 'card' } }}>
				<a target='_blank'>Cards External</a>
			</Link>
		</div>
	)
}

export default Cards
