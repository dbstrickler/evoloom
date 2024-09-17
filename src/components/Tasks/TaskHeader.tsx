import { View, Text, type ViewStyle, type StyleProp } from 'react-native';
import CheckBox from '../MyCheckbox/Checkbox';
import { newStyles } from './Tile.style';
import { Calendar } from '../RandomComponents/random';
import type { TaskBase } from '../types';
import { useState, type SetStateAction } from 'react';

const TaskHeader = ({
    item,
    isSubtask = false,
    setNumCompleteSubtasks,
}: {
    item: TaskBase;
    isSubtask?: boolean;
    setNumCompleteSubtasks: React.Dispatch<SetStateAction<number>>;
}) => {
    const [checked, setChecked] = useState(item.IsComplete);

    const toggleComplete = () => {
        setChecked((checked) => {
            if (setNumCompleteSubtasks) {
                setNumCompleteSubtasks((numComplete: number) =>
                    checked ? (numComplete -= 1) : (numComplete += 1)
                );
            }
            return !checked;
        });
    };

    return (
        <View
            style={[
                {
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: isSubtask ? 2 : 8,
                    width: isSubtask ? '87%' : '100%',
                },
            ]}
        >
            <View
                style={{
                    paddingStart: isSubtask ? 10 : 0,
                    flexDirection: 'column',
                }}
            >
                <CheckBox onToggle={toggleComplete} checked={checked} />
            </View>
            <View
                style={{
                    flex: isSubtask ? 0 : 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}
            >
                <Text
                    style={isSubtask ? newStyles.subTitle : newStyles.mainTitle}
                >
                    {item.Title}
                </Text>
            </View>
            {!isSubtask ? <Calendar /> : null}
        </View>
    );
};

export default TaskHeader;
