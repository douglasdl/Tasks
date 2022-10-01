import { Home } from "./src/screens/Home";
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native'; 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}