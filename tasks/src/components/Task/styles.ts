import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import theme from '../../theme';

interface TypeProps {
    done: boolean;
}

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 64px;
    background: ${theme.COLORS.GRAY_500};
    border-color: ${theme.COLORS.GRAY_400};
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    align-items: center;
    margin-bottom: 8px;
`;

export const Name = styled.Text<TypeProps>`
    width: 235px;
    font-size: 14px;
    font-weight: normal;
    margin-left: 8px;
    margin-right: 8px;
    color: ${({done}) => done === true ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    text-decoration: ${({done}) => done === true ? 'line-through' : 'none'};
    text-decoration-color: ${({done}) => done === true ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
`;

export const CheckBox = styled.TouchableOpacity<TypeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 12px;
    border-color: ${theme.COLORS.BLUE_DARK};
    border-style: solid;
    border-width: ${({done}) => done === true ? '0px' : '2px'};
    border-radius: 999px;
    padding: 3.27px;
    background: ${({done}) => done === true ? theme.COLORS.PURPLE_DARK : 'transparent' };
`;

export const CheckMark = styled.Text<TypeProps>`
    color: ${({done}) => done === true ? theme.COLORS.GRAY_100 : 'transparent'};
`;

export const Trash = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;