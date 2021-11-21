import {
    Flex,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Link,
} from '@chakra-ui/react'
import { HiOutlineExternalLink } from 'react-icons/hi'

interface ExampleHeaderProps {
    previewURL: string
    children: React.ReactNode
}

export const ExampleHeader: React.FunctionComponent<ExampleHeaderProps> = ({
    children,
    previewURL,
}) => {
    return (
        <Box>
            <Tabs>
                <Flex
                    justify='space-between'
                    align='center'
                    borderBottom='1px'
                    borderColor='gray.300'>
                    <TabList padding={2} borderBottom='none'>
                        <Flex
                            bg='gray.200'
                            borderRadius='10px'
                            paddingTop={'7px'}
                            paddingBottom={'8px'}
                            paddingX={'7px'}
                            align='center'>
                            <Tab
                                padding={'5px'}
                                width={20}
                                borderRadius={8}
                                border='none'
                                _selected={{ background: 'white' }}
                                _focus={{
                                    boxShadow: 'none',
                                    background: 'white',
                                }}>
                                Preview
                            </Tab>
                            <Tab
                                padding={'5px'}
                                width={20}
                                borderRadius={8}
                                border='none'
                                _selected={{ background: 'white' }}
                                _focus={{
                                    boxShadow: 'none',
                                    background: 'white',
                                }}>
                                Code
                            </Tab>
                        </Flex>
                    </TabList>
                    <Link
                        href={previewURL}
                        isExternal
                        bg='gray.200'
                        padding={2}
                        borderRadius={6}
                        mr={4}
                        _hover={{ background: 'gray.300' }}>
                        <HiOutlineExternalLink />
                    </Link>
                </Flex>
                <TabPanels width='100%'>
                    <TabPanel>{children[0]}</TabPanel>
                    <TabPanel>{children[1]}</TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
