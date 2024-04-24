'use-strict';
import { Text, TouchableOpacity, View } from 'react-native';
import { s, containers } from './Tile.style';
import { useEffect, useState } from 'react';
import CheckBox from '../MyCheckbox/Checkbox';
import { Bar } from 'react-native-progress';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

/**
 * @typedef {Object} Props
 * @property {String} title title of task
 * @property {Array<import('../types').SubTask>} [subTasks]
 *
 */

/**
 *
 * @param {Props} Props
 * @returns
 */
const Tile = ({ title, subTasks = [] }) => {
    const [isComplete, setIsComplete] = useState(false);

    const hasSubtasks = subTasks.length;

    const numComplete = subTasks.length
        ? subTasks.filter((t) => t.isComplete).length / subTasks.length
        : 0;

    useEffect(() => {
        console.log(`${title} isComplete`, isComplete);
    }, [isComplete]);
    return (
        <View style={s.tile}>
            <View style={containers.checkbox}>
                <CheckBox
                    checked={isComplete}
                    onToggle={() => {
                        setIsComplete((complete) => {
                            return !complete;
                        });
                    }}
                    circleSize={45}
                    checkSize={40}
                />
            </View>
            <View style={containers.task}>
                <View
                    style={
                        hasSubtasks
                            ? containers.titleRowWithSubtasks
                            : containers.titleRow
                    }
                >
                    <Text style={s.titleText}>{title}</Text>
                    <Text style={s.separator}>|</Text>
                    <TouchableOpacity style={s.calendar}>
                        <FontAwesomeIcon
                            icon={['fas', 'calendar-days']}
                            size={25}
                            color="#ffa834"
                        />
                    </TouchableOpacity>
                </View>
                {hasSubtasks ? (
                    <View style={{ flexDirection: 'row', height: '50%' }}>
                        <View
                            style={{
                                flexDirection: 'column',
                                width: '100%',
                                paddingEnd: 20,
                                alignItems: 'flex-start',
                            }}
                        >
                            <View style={containers.progressBar}>
                                <Bar
                                    style={{ width: '100%' }}
                                    progress={numComplete}
                                    width={null}
                                    height={17}
                                    borderRadius={6}
                                    color="#631878"
                                    borderColor="#631878"
                                />
                            </View>
                            <TouchableOpacity style={s.expandIcon}>
                                <FontAwesomeIcon
                                    icon={['fas', 'caret-down']}
                                    size={25}
                                    color="#631878"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}
            </View>
        </View>
    );
};

export default Tile;
