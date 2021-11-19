import Link from 'next/link'
import CardWithUser from '../../../components/Card/Card'
import { ExampleContainer } from '../../../components/ExampleContainer'
import SidebarWithHeader from '../../../components/Sidebar'
import { baseURL } from '../../../Utils/baseURL'

const Cards = () => {
	const URL = baseURL()
	return (
		<SidebarWithHeader>
			<ExampleContainer
				iframeURL={`${URL}/components/card/card-with-user-preview`}
			>
				<CardWithUser />
			</ExampleContainer>
		</SidebarWithHeader>
	)
}

export default Cards
