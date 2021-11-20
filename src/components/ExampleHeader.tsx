import {
    Flex,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Slide,
} from '@chakra-ui/react'

// The header component will house the preview/code switch, sizing switch and preview button
export const ExampleHeader: React.FunctionComponent = ({ children }) => {
    return (
        <Box>
            <Tabs>
                <TabList pos='relative'>
                    <Tab _focus={{ boxShadow: 'none' }}>Preview</Tab>
                    <Tab _focus={{ boxShadow: 'none' }}>Code</Tab>
                    <Box position='absolute' right='10' top='2'>
                        Test
                    </Box>
                </TabList>
                <TabPanels width='100%'>
                    <TabPanel>{children[0]}</TabPanel>
                    <TabPanel>{children[1]}</TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
