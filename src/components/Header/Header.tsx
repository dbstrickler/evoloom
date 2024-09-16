import { View, TouchableOpacity, Text } from 'react-native';
import { s } from './Header.style';
import { g } from '../global.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import 'expo';

const Header = () => {
    return (
        <View style={s.header}>
            <TouchableOpacity style={g.touchable}>
                <FontAwesomeIcon
                    icon={['fas', 'edit']}
                    size={30}
                    color="#631878"
                />
            </TouchableOpacity>
            <TouchableOpacity style={g.touchable}>
                <Text style={s.logo}>EvoLoom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={g.touchable}>
                <FontAwesomeIcon
                    icon={['fas', 'gear']}
                    size={30}
                    color="#631878"
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
