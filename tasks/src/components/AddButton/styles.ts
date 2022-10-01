import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: 52,
        height: 52,
        backgroundColor: theme.COLORS.BLUE_DARK,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.COLORS.GRAY_100,
        fontSize: 24,
        fontWeight: 'bold',
    }
});

