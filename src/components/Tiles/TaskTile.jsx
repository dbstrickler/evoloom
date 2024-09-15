'use-strict';
import { Text, TouchableOpacity, View } from 'react-native';
import { newStyles } from './Tile.style';
import { useState } from 'react';
import CheckBox from '../MyCheckbox/Checkbox';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

export const CollapsableContainer = ({ children, expanded }) => {
    const [height, setHeight] = useState(0);
    const onLayout = (e) => {
        const layoutHeight = e.nativeEvent.layout.height;
        if (layoutHeight > 0 && layoutHeight !== height) {
            setHeight(layoutHeight);
        }
    };
    const animatedStyle = useAnimatedStyle(() => {
        const animatedHeight = expanded ? withTiming(height) : withTiming(0);
        return { height: animatedHeight };
    });
    return (
        <Animated.View style={[animatedStyle, { overflow: 'hidden' }]}>
            <View onLayout={onLayout} style={{ position: 'absolute' }}>
                {children}
            </View>
        </Animated.View>
    );
};

/**
 * @typedef {Object} Item
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */
/**
 * @typedef {Object} Props
 * @property {Item} item Item to display
 * @property {Array<import('../types').SubTask>} [subTasks]
 *
 */

/**
 *
 * @param {Props} Props
 * @returns
 */

export const Tile = ({ item }) => {
    const [checked, setChecked] = useState(false);
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={newStyles.itemContainer}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                }}
            >
                <CheckBox
                    onToggle={() => {
                        setChecked((checked) => {
                            return !checked;
                        });
                    }}
                    checked={checked}
                />
                <TouchableOpacity
                    onPress={toggleExpand}
                    style={newStyles.itemTouchable}
                >
                    <Text style={newStyles.itemTitle}>{item.title}</Text>
                </TouchableOpacity>
            </View>
            <CollapsableContainer expanded={expanded}>
                <Text style={newStyles.itemContent}>{item.content}</Text>
            </CollapsableContainer>
        </View>
    );
};

export default Tile;
