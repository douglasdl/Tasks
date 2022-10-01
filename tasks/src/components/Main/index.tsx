import { styles } from './styles';
import { FlatList, Text, TextInput, View, } from 'react-native';
import { AddButton } from '../AddButton';
import theme from '../../theme';



export function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.COLORS.GRAY_300}
                />
                <AddButton />
            </View>

            <View style={styles.tasksContainer}>
                <View style={styles.summaryContainer}>
                    <View style={styles.createdContainer}>
                        <Text style={styles.createdText}>
                            Criadas
                        </Text>
                        <Text style={styles.counter}>
                            0
                        </Text>
                    </View>

                    <View style={styles.doneContainer}>
                        <Text style={styles.doneText}>
                            Concluídas
                        </Text>
                        <Text style={styles.counter}>
                            0
                        </Text>
                    </View>
                </View>

                <View style={styles.tasksListContainer}>
                    <FlatList 
                        keyExtractor={(item) => item}
                        data={[]}
                        renderItem={({ item }) => (
                            <Text>
                                {item}
                            </Text>    
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

