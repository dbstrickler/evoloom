import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    tile: {
        width: '100%',
        height: '15%',
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
        justifyContent: 'center',
        height: '100%',
    },
    expandIcon: {
        flexDirection: 'row',
        width: '100%',
        alignContent: 'flex-end',
        justifyContent: 'center',
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
        height: '100%',
        alignItems: 'center',
    },
});

export const newStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'green',
        textAlign: 'center',
    },
    subheader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fcf2fe',
        shadowColor: '#631878c2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        flex: 1,
    },
    itemTouchable: {
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#631878',
    },
    itemContent: {
        marginTop: 10,
        fontSize: 14,
        color: '#666',
    },
});
