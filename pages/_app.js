import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar';


function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Navbar />
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    )
}

export default MyApp
