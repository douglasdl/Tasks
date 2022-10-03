import { Home } from "./src/screens/Home";
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native'; 
import { StatusBar } from "react-native";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<StatusBar 
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Home />
		</ThemeProvider>
	);
}