import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    tile: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF00',
        // this is for Android
        elevation: 1,

        // this is for iOS
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 4,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 1,
    },
    titleText: {
        color: '#631878',
        fontSize: 17,
        fontWeight: 'bold',
        flexDirection: 'column',
    },
    separator: {
        flexDirection: 'column',
        color: '#631878',
        fontSize: 17,
        fontWeight: 'bold',
        paddingStart: 10,
        paddingEnd: 10,
        paddingBottom: 2,
    },
    calendar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: 2,
    },
    expandIcon: {
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        paddingEnd: 50,
    },
});

export const containers = StyleSheet.create({
    checkbox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '17%',
    },
    task: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '83%',
        height: '100%',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    titleRowWithSubtasks: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '50%',
    },
    progressBar: {
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        alignItems: 'center',
    },
});
