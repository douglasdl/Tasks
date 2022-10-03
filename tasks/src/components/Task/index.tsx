import { 
    CheckBox,
    CheckMark,
    Container, 
    Name,
    Trash, 
} from './styles';
import { Text } from 'react-native';

interface TaskProps {
    id: string;
    done: boolean;
    title: string;
    onToggle: () => void;
    onRemove: () => void;
}

export function Task({ id, done, title, onToggle, onRemove }: TaskProps) {

    return (
        <Container>

            <CheckBox done={done}
                onPress={ onToggle }
            >
                <CheckMark done={done}>
                    ✓
                </CheckMark>
            </CheckBox>

            <Name done={done}>
                { title }
            </Name>
            <Trash
                onPress={ onRemove }
            >
                <Text>
                    🗑
                </Text>
            </Trash>
        </Container>
    );
}

