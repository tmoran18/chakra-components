import CardWithUser from '../../../components/Card/CardWithUser'
import { ExampleContainer } from '../../../components/ExampleContainer'
import SidebarWithHeader from '../../../components/Sidebar'
import { baseURL } from '../../../Utils/baseURL'

const Cards = () => {
    const URL = baseURL()

    const cardWithUserCode =
        require(`!!raw-loader!../../../components/Card/CardWithUser.tsx`).default

    return (
        <SidebarWithHeader>
            <ExampleContainer
                iframeURL={`${URL}/components/card/card-with-user-preview`}
                previewURL={`${URL}/components/card/card-with-user-preview`}
                code={cardWithUserCode}
                maxWidth={'3xl'}>
                <CardWithUser />
            </ExampleContainer>
        </SidebarWithHeader>
    )
}

export default Cards
