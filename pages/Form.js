import {
    Image,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    useColorMode,
} from "@chakra-ui/react"
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"

const Form = () => {
    const { colorMode } = useColorMode()

    return (
        <Box
            bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
            w='350px'
            p={3}
            boxShadow='sm'
            rounded='lg' alignContent={'center'} align='center'>
            <Image src='./security.png' w='80px' mx='auto' mt={12} mb={10} />
            <Tabs variant='enclosed-colored' isFitted m={4}>
                <TabList>
                    <Tab>Sign Up</Tab>
                    <Tab>Login</Tab>
                </TabList>
                <TabPanels mt={3}>
                    <TabPanel>
                        <SignupForm />
                    </TabPanel>
                    <TabPanel>
                        <LoginForm />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Form