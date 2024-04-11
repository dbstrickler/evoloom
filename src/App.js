import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';

library.add(fab, far, fas);
let ScreenHeight = Dimensions.get('screen').height;

const App = () => {
    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={['#fcf2fe', '#d2b4d8']}
                style={s.background}
            >
                <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <View>
                        <Header />
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </SafeAreaProvider>
    );
};

const s = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: ScreenHeight,
    },
});

export default App;
