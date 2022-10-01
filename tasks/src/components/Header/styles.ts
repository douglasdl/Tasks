import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 173,
        backgroundColor: theme.COLORS.GRAY_700,

        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 110,
        height: 32,

       
        color: theme.COLORS.BLUE,
        textAlign: 'center',
        fontSize: 24,
    }
});

