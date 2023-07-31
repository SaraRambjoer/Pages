import './App.css'; 
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Aquarium } from './Pages/Aquarium';
import { Layout } from './Pages/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Aquarium" element={<Aquarium />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
