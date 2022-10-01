import { styles } from './styles';
import { Text, View } from 'react-native';



export function AddButton() {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>+</Text>
        </View>
    );
}

