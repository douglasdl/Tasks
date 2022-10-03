import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    border-top-color: ${theme.COLORS.GRAY_400};
    border-top-width: 1,
`;

export const Contents = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
`;

export const IconContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 6px;
    margin-top: 48px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.GRAY_300};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const SubTitle = styled.Text`
    color: ${theme.COLORS.GRAY_300};
    font-size: 14px;
    font-weight: normal;
`;