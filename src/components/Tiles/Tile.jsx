import { Text, View } from 'react-native';
import { s } from './Tile.style';
import { useState } from 'react';
import CheckBox from '../MyCheckbox/Checkbox';
import propTypes from 'prop-types';

const Tile = ({ title }) => {
    const [isComplete, setIsComplete] = useState(false);

    return (
        <View style={s.tile}>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '17%',
                }}
            >
                <CheckBox
                    checked={isComplete}
                    onToggle={() => {
                        setIsComplete((complete) => {
                            return !complete;
                        });
                    }}
                    circleSize={45}
                    outerColor="#631878"
                    innerColor="#631878"
                    checkSize={40}
                />
            </View>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '75%',
                    height: '100%',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        height: '50%',
                    }}
                >
                    <Text
                        style={{
                            color: '#631878',
                            fontSize: 17,
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    );
};

Tile.propTypes = {
    title: propTypes.string,
};

export default Tile;
