import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginHorizontal: 24,
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: -31,
        marginBottom: 32,
        marginHorizontal: 24,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: theme.COLORS.GRAY_500,
        borderRadius: 6,
        marginRight: 4,
        color: theme.COLORS.GRAY_100,
        lineHeight: 1.4,
        padding: 16,
        fontSize: 16,
        fontWeight: 'regular',
    },
    tasksContainer: {
        marginHorizontal: 24,
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    createdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createdText: {
        fontSize: 14,
        color: theme.COLORS.BLUE,
        fontWeight: 'bold',
    },
    doneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    doneText: {
        fontSize: 14,
        color: theme.COLORS.PURPLE,
        fontWeight: 'bold',
    },
    counter: {
        fontSize: 12,
        color: theme.COLORS.GRAY_200,
        fontWeight: 'bold',
        backgroundColor: theme.COLORS.GRAY_400,
        padding: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
        marginLeft: 8,
    },
    tasksListContainer: {
        borderTopColor: theme.COLORS.GRAY_400,
        borderTopWidth: 1,
    },
});

