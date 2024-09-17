'use-strict';
import { FlatList, Text, View } from 'react-native';
import { newStyles } from './Tile.style';
import { useEffect, useState } from 'react';
import CheckBox from '../MyCheckbox/Checkbox';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { ExpandIcon, ProgessBar } from '../RandomComponents/random';
import type { MainTask, TaskBase } from '../types';
import TaskHeader from './TaskHeader';

export const CollapsableContainer = ({
    children,
    expanded,
}: {
    children?: React.ReactNode;
    expanded: boolean;
}) => {
    const [height, setHeight] = useState(0);
    const onLayout = (e: { nativeEvent: { layout: { height: number } } }) => {
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

export const Tile = ({ item }: { item: MainTask }) => {
    const [expanded, setExpanded] = useState(false);
    const [subTasks, setSubtasks] = useState(item.SubTasks);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const [myProgress, setMyProgress] = useState(0);
    const [numSubtasksComplete, setNumSubtasksCompleted] = useState(0);

    useEffect(() => {
        if (subTasks.length) {
            const toSet = parseFloat(
                (numSubtasksComplete / subTasks.length).toFixed(2)
            );

            setMyProgress(toSet);
        }
    }, [numSubtasksComplete]);

    return (
        <View style={newStyles.itemContainer}>
            <TaskHeader
                item={item}
                setNumCompleteSubtasks={setNumSubtasksCompleted}
            />

            {/* add logic to only show if subTasks exist */}
            {subTasks.length ? (
                <>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingTop: 10,
                            paddingBottom: 10,
                        }}
                    >
                        <ProgessBar progress={myProgress} />
                    </View>
                    <CollapsableContainer expanded={expanded}>
                        <FlatList
                            data={subTasks}
                            renderItem={({ item }: { item: TaskBase }) => (
                                <TaskHeader
                                    item={item}
                                    isSubtask
                                    setNumCompleteSubtasks={
                                        setNumSubtasksCompleted
                                    }
                                />
                            )}
                            keyExtractor={(item: TaskBase) =>
                                item.Id.toString()
                            }
                        />
                    </CollapsableContainer>
                    <ExpandIcon
                        toggleIcon={toggleExpanded}
                        isExpanded={expanded}
                    />
                </>
            ) : null}

            {/* also only show if subtasks exist */}
        </View>
    );
};

export default Tile;
