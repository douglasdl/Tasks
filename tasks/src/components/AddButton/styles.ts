import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    background: ${theme.COLORS.BLUE_DARK};
    border-radius: 6px;
`;

export const Icon = styled.Text`
    color: ${theme.COLORS.GRAY_100};
    font-size: 24px;
    font-weight: bold;
`;