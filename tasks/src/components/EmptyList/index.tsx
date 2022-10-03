import theme from '../../theme';
import { 
    Container, 
    Contents, 
    Icon,
    IconContainer,
    SubTitle,
    Title, 
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function EmptyList() {
    return (
        <Container>
            <Contents>
                <IconContainer>
                    <MaterialCommunityIcons 
                        name="clipboard-text-outline" 
                        size={56} 
                        color={theme.COLORS.GRAY_400}
                    />
                </IconContainer>

                <Title>
                    Você ainda não tem tarefas cadastradas
                </Title>
                <SubTitle>
                    Crie tarefas e organize seus itens a fazer
                </SubTitle>
            </Contents>
        </Container>
    );
}

