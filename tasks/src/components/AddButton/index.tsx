import { 
    Container, 
    Icon, 
} from './styles';

interface ButtonProps {
    onAdd?: () => void;
}

export function AddButton({onAdd}: ButtonProps) {
    return (
        <Container
            onPress={onAdd}
        >
            <Icon>
                +
            </Icon>
        </Container>
    );
}

