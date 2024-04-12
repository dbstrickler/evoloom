import { View, TouchableOpacity, Text } from 'react-native';
import { s } from './Tile.style';
import { useState } from 'react';

const Tile = () => {
    const [isComplete, setIsComplete] = useState(false);

    return (
        <View style={s.tile}>
            <View style={s.headerRow}>
                <Text style={s.text}>Task Title</Text>
                <TouchableOpacity
                    onPress={() => {
                        setIsComplete((v) => {
                            console.log(v);
                            return !v;
                        });
                    }}
                >
                    {isComplete && <Text>Complete</Text>}
                    {!isComplete && <Text>Not Complete</Text>}
                </TouchableOpacity>
            </View>

            <View style={s.footer}></View>
        </View>
    );
};

export default Tile;
