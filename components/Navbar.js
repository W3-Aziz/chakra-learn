import { Box, Flex, IconButton, Image, Stack, toggleColorMode, useColorMode } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';



function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode()
    const bgColor = { light: 'gray.300', dark: 'gray.600' };
    const textColor = { light: 'black', dark: 'gray.100' };

    const router = useRouter()

    return (
        <Flex w={'100%'} bg={bgColor[colorMode]} color={textColor[colorMode]} justify='center' align={'center'} fontSize={['md', 'lg', 'xl', 'xl']} boxShadow='md'
            p={2}>
            <Flex w={['100vw', '100vw', '80vw', '80vw']} justify='space-around'>
                <Box>
                    <Image h={'4vh'} src='./logo.svg' alt='Logo of chakra ui' />
                </Box>
                <Stack spacing={8}
                    color={textColor[colorMode]}
                    justify='center'
                    align='center'
                    isInline>
                    <Box position={'relative'} opacity={router.pathname !== '/' ? 0.4 : 1}>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </Box>

                    <Box position={'relative'} opacity={router.pathname !== '/' ? 0.4 : 1}>
                        <Link href='/Form'>
                            <a>Form</a>
                        </Link>
                    </Box>

                    <Box position={'relative'} opacity={router.pathname !== '/' ? 0.4 : 1}>
                        <Link href='/Card'>
                            <a>Card</a>
                        </Link>
                    </Box>

                    <Box position={'relative'} opacity={router.pathname !== '/' ? 0.4 : 1}>
                        <Link href='/List'>
                            <a>List</a>
                        </Link>
                    </Box>
                </Stack>
                <Box>
                    <IconButton rounded={'full'} onClick={toggleColorMode} icon={colorMode === 'light' ? 'moon' : 'sun'}>
                        Change Color Mode
                    </IconButton>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar