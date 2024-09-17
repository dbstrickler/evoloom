import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import 'react-native-url-polyfill/auto';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import ExpandableList from './components/ExpandableList/ExpandbleList';
import type { TaskType } from './components/types';
import { isColor } from 'react-native-reanimated';
library.add(fab, far, fas);
let ScreenHeight = Dimensions.get('screen').height;

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let customFonts = {
        'Audio-wide': require('../assets/fonts/Audiowide-Regular.ttf'),
    };
    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync(customFonts);
            } catch (e) {
                console.warn(e);
            } finally {
                setFontsLoaded(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setFontsLoaded`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const data: TaskType[] = [
        {
            Id: 0,
            Title: 'aaaaaaaaaaaa',
            IsComplete: false,
            SubTasks: [
                { Id: 10, Title: 'Subtask 1', isComplete: false },
                {
                    Id: 11,
                    Title: 'Yet another task to do and this hasl wrap 2',
                    isComplete: false,
                },
            ],
        },
        {
            Id: 1,
            Title: 'Yet another task to do and this will wrap',
            IsComplete: false,
            SubTasks: [],
        },
        {
            Id: 2,
            Title: 'Yet another task to do',
            IsComplete: false,
            SubTasks: [],
        },
        {
            Id: 3,
            Title: 'Yet another task to do',
            IsComplete: false,
            SubTasks: [],
        },
        {
            Id: 4,
            Title: 'Yet another task to do',
            IsComplete: false,
            SubTasks: [],
        },
        {
            Id: 5,
            Title: 'Yet another task to do',
            IsComplete: false,
            SubTasks: [],
        },
    ];

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <LinearGradient
                    colors={['#f7e7fa', '#d2b4d8']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.24 }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: ScreenHeight,
                    }}
                    onLayout={onLayoutRootView}
                >
                    <SafeAreaView
                        style={{
                            flex: 1,
                        }}
                    >
                        <Header />
                        <View style={{ flex: 1 }}>
                            <ExpandableList data={data} />
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </SafeAreaProvider>
        );
    }
};

export default App;
