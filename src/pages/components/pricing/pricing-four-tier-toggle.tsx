import PricingPlanFourTierToggle from '../../../components/Pricing/PricingPlanFourTierToggle'
import pricingPlansData from '../../../../data/pricingPlansData'

const pricingFourTierToggle = () => {
    return (
        <div>
            <PricingPlanFourTierToggle pricingPlansData={pricingPlansData} />
        </div>
    )
}

export default pricingFourTierToggle
