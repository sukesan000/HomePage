import './App.css'
import { Button, ChakraProvider, theme } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button>aaa</Button>
    </ChakraProvider>
  )
}

export default App
