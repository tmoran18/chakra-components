import Link from 'next/link'
import CardWithUser from '../../../components/Card/Card'
import { ExampleContainer } from '../../../components/ExampleContainer'
import SidebarWithHeader from '../../../components/Sidebar'

const Cards = () => {
	return (
		<SidebarWithHeader>
			<ExampleContainer>
				<CardWithUser />
			</ExampleContainer>
		</SidebarWithHeader>
	)
}

export default Cards
