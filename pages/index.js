import { Box, useColorMode, Link, IconButton, Text } from "@chakra-ui/react";


export default function index() {
    const {colorMode} = useColorMode()
    return (
        <Box fontSize='2xl' textAlign='center'>
            You can explore different examples from the navbar above ⬆️ <br />
            Learn more about Chakr-UI @
            <Link href='https://chakra-ui.com/'>www.chakra-ui.com</Link> <br />
            Chakra-ui is made an maintaned by Segun Adebayo.
            <br /> Segun Adebayo
            <a href='https://twitter.com/thesegunadebayo' target='blank'>
                <IconButton icon='at-sign' rounded='full' variantColor='blue' mx='3' />
            </a>
        </Box>
    )
}
