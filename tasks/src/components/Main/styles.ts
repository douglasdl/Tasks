import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    margin-left: 24px;
    margin-right: 24px;
`;

export const InputContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: -31px;
    margin-bottom: 32px;
    height: 54px;
    width: 330px;
`;

export const TaskInput = styled.TextInput`
    display: flex;
    flex: 1;
    height: 54px; 
    background: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-right: 4px;
    color: ${theme.COLORS.GRAY_100};
    padding: 16px;
    font-size: 16px;
    font-weight: regular;
`;

export const TasksContainer = styled.View`
    margin-left: 0px;
    margin-right: 0px;
`;

export const SummaryContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const CreatedContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CreatedText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color:  ${theme.COLORS.BLUE};
`;

export const DoneContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DoneText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color:  ${theme.COLORS.PURPLE};
`;

export const Counter = styled.View`
    background: ${theme.COLORS.GRAY_400};
    padding: 2px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 999px;
    margin-left: 8px;
`;

export const CounterText = styled.Text`
    font-size: 12px;
    color: ${theme.COLORS.GRAY_200};
    font-weight: bold;
`;

export const TasksListContainer = styled.View`
    border-top-color: ${theme.COLORS.GRAY_400};
    border-top-width: 0,
`;