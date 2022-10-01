import { styles } from './styles';
import { Text, View, Image } from 'react-native';
import LogoSvg from '../../assets/Clipboard.svg';



export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>LOGO</Text>
            {/* <LogoSvg width={100} height={100} /> */}
        </View>
    );
}

