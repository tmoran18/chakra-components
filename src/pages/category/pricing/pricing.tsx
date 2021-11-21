import { ExampleContainer } from '../../../components/ExampleContainer'
import SidebarWithHeader from '../../../components/Sidebar'
import { baseURL } from '../../../Utils/baseURL'

import PricingPlanFourTierToggle from '../../../components/Pricing/PricingPlanFourTierToggle'

import pricingPlansData from '../../../../data/pricingPlansData'

const Cards = () => {
    const URL = baseURL()

    const pricingFourTierToggleCode =
        require(`!!raw-loader!../../../components/Pricing/PricingPlanFourTierToggle.tsx`).default
    return (
        <SidebarWithHeader>
            <ExampleContainer
                iframeURL={`${URL}/components/pricing/pricing-four-tier-toggle`}
                previewURL={`${URL}/components/pricing/pricing-four-tier-toggle`}
                code={pricingFourTierToggleCode}
                maxWidth={'100%'}>
                <PricingPlanFourTierToggle
                    pricingPlansData={pricingPlansData}
                />
            </ExampleContainer>
        </SidebarWithHeader>
    )
}

export default Cards
