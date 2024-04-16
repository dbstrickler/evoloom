import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    tile: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF00',
        elevation: 1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 4,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 1,
    },
    text: {
        color: '#631878',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 26,
        marginLeft: 8,
    },
    headerRow: {
        flexDirection: 'row',
    },
    footer: {},
});
