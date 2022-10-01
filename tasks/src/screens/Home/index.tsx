import { styles } from './styles';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';


export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Main />
        </View>
    );
}

