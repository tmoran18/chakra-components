import {
    Heading,
    Text,
    useRadio,
    Box,
    Button,
    HStack,
    VStack,
    useRadioGroup,
    Divider,
    List,
    ListItem,
    ListIcon,
    Flex
} from '@chakra-ui/react'

import { useState } from 'react'

import { FiCheck } from 'react-icons/fi'

const PricingPlanFourTierToggle = ({ pricingPlansData }) => {
    const [paymentFrequency, setPaymentFrequency] = useState('monthly')

    const togglePrice = (price): number => {
        if (paymentFrequency === 'monthly') {
            return price
        } else {
            return price * 12
        }
    }

    return (
        <VStack mt={12} spacing={12} padding={6}>
            <Heading as='h1' textAlign='center'>
                Simple, fair, predictable pricing.
            </Heading>
            <Text>Get started for free. No credit card required.</Text>
            <RadioSwitch
                paymentFrequency={paymentFrequency}
                setPaymentFrequency={setPaymentFrequency}
            />
            <Flex
                justify='center'
                align='center'
                wrap={'wrap'}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                {pricingPlansData.map((plan) => (
                    <PricingCard
                        key={plan.title}
                        title={plan.title}
                        description={plan.description}
                        price={togglePrice(plan.price)}
                        paymentFrequency={paymentFrequency}
                        featureList={plan.featureList}
                    />
                ))}
            </Flex>
        </VStack>
    )
}

interface PricingCardProps {
    title: string
    description: string
    price: number
    featureList: string[]
    paymentFrequency: string
}

const PricingCard = ({
    title,
    description,
    price,
    featureList,
    paymentFrequency,
}: PricingCardProps) => {
    return (
        <Flex
            align='start'
            direction='column'
            border='1px'
            borderColor='gray.300'
            borderRadius={8}
            padding={8}
            minH={'xl'}
            maxW={'sm'}
            minW={'200px'}
            margin={2}
>
            <Heading as='h5' size='s' py={1}>
                {title}
            </Heading>
            <Text py={4}>{description}</Text>
            <Box py={2}>
                <Text>
                    <Text
                        as='span'
                        fontWeight='bold'
                        fontSize={'3xl'}>{`$${price}`}</Text>{' '}
                    {`\\${paymentFrequency}`}
                </Text>
            </Box>
            <Button  bg='black' color='white'>{`Buy ${title}`}</Button>
            <Divider py={4} />
            <List py={3} spacing={3} ml='24px' sx={{ textIndent: '-24px' }}>
                {featureList.map((feature, index) => (
                    <ListItem>
                        <ListIcon key={index} as={FiCheck} color='green.500' />
                        {feature}
                    </ListItem>
                ))}
            </List>
        </Flex>
    )
}

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderRadius='md'
                _checked={{
                    bg: 'white',
                }}
                _focus={{
                    boxShadow: 'none',
                }}
                px={5}
                py={1}>
                {props.children}
            </Box>
        </Box>
    )
}

interface RadioSwitchProps {
    paymentFrequency: string
    setPaymentFrequency: (paymentFrequency: 'monthly' | 'annually') => void
}

// Use the `useRadioGroup` hook to control a group of custom radios.
const RadioSwitch = ({
    paymentFrequency,
    setPaymentFrequency,
}: RadioSwitchProps) => {
    const options = ['Monthly Billing', 'Yearly Billing']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'frequency',
        defaultValue: 'Monthly Billing',
        onChange: () =>
            setPaymentFrequency(
                paymentFrequency === 'monthly' ? 'annually' : 'monthly'
            ),
    })

    const group = getRootProps()

    return (
        <Box display='flex' justifyContent='center'>
            <HStack
                {...group}
                bg='gray.100'
                paddingX={'0.2rem'}
                paddingY={'0.2rem'}
                borderRadius={6}
                justify='space-between'>
                {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                })}
            </HStack>
        </Box>
    )
}

export default PricingPlanFourTierToggle
