import { v4 as uuidv4 } from 'uuid';
import { Container, Counter, CounterText, CreatedContainer, CreatedText, DoneContainer, DoneText, InputContainer, SummaryContainer, TaskInput, TasksContainer, TasksListContainer } from './styles';
import { Alert, FlatList, ScrollView } from 'react-native';
import { AddButton } from '../AddButton';
import theme from '../../theme';
import { Task } from '../Task';
import { useState } from 'react';
import { EmptyList } from '../EmptyList';

interface TaskProps {
    id: string;
    done: boolean;
    title: string;
    onRemove?: () => void;
}

const dummyTasks:TaskProps[] = [
    { 
        id: '0001',
        done: false,
        title: 'Tarefa 1',
    },
    { 
        id: '0002',
        done: true,
        title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
    { 
        id: '0003',
        done: true,
        title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    }
] 

export function Main({ id, done, title, onRemove}: TaskProps) {

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    function handleAddTask(title: string) {
        if(title === '') {
            return Alert.alert('Tarefa não informada!', 'Insira o nome da tarefa!');
        }
        // if(tasks.includes(task => task.title === "Tarefa 1")) {
        //     return Alert.alert('Tarefa repetida', 'Já existe uma tarefa com esse nome!');
        // }
        setTasks(prevState => [
            ...prevState,
            { 
                id: uuidv4().toString(),
                done: false,
                title: title,
            },
        ]);
        setTaskTitle('');
    }

    function handleToggleTask(id: string) {
        // Check / Uncheck
        let updatedTasks = tasks.map(task => task.id === id ? {...task, done: !task.done} : task);
        // Sort order
        updatedTasks = updatedTasks.sort((a, b) => a.done && b.done ? 0 : !a.done && b.done ? -1 : 1
    )
        setTasks(updatedTasks);
    }

    function handleDeleteTask(title: string) {
        return Alert.alert('Apagar Tarefa', `Deseja apagar a tarefa "${title}"?`, [
            {
                text: 'Sim',
                onPress: () => {setTasks(prevState => prevState.filter(task => task.title !== title))}
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ]);
    }

    return (
        <Container>
            <InputContainer>
                <TaskInput 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.COLORS.GRAY_300}
                    onChangeText={(text:string) => setTaskTitle(text)}
                    value={taskTitle}
                />
                <AddButton 
                    onAdd={() => handleAddTask(taskTitle)}
                />
            </InputContainer>

            <TasksContainer>
                <SummaryContainer>
                    <CreatedContainer>
                        <CreatedText>
                            Criadas
                        </CreatedText>
                        <Counter>
                            <CounterText>
                                {tasks.length}
                            </CounterText>
                        </Counter>
                    </CreatedContainer>

                    <DoneContainer>
                        <DoneText>
                            Concluídas
                        </DoneText>
                        <Counter>
                            <CounterText>
                                {tasks.filter(task => task.done === true).length}
                            </CounterText>
                        </Counter>
                    </DoneContainer>
                </SummaryContainer>


                <TasksListContainer>
                    
                    <FlatList 
                        data={tasks}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Task 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                done={item.done}
                                onToggle={() => handleToggleTask(item.id)}
                                onRemove={() => handleDeleteTask(item.title)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <EmptyList />
                        )}
                    />
                </TasksListContainer>

            </TasksContainer>
        </Container>
    );
}

