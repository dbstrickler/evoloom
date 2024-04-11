import { View, TouchableOpacity, Text } from 'react-native';
import { s } from './Header.style';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Header = () => {
    const [isComplete, setIsComplete] = useState(false);

    return (
        <View style={s.header}>
            <TouchableOpacity
                style={{
                    paddingTop: 15,
                    paddingRight: 15,
                    paddingBottom: 15,
                    paddingLeft: 15,
                }}
            >
                <FontAwesomeIcon icon="fas fa-edit" size={30} color="#631878" />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    paddingTop: 15,
                    paddingRight: 15,
                    paddingBottom: 15,
                    paddingLeft: 15,
                }}
            >
                <FontAwesomeIcon icon="fas fa-gear" size={30} color="#631878" />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
