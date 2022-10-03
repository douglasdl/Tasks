import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    width: 100%;
    height: 173px;
    background: ${theme.COLORS.GRAY_700};

    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 110px;
    height: 32px;

`;