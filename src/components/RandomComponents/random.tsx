import { Bar } from 'react-native-progress';
import { containers, s } from '../Tasks/Tile.style';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const ProgessBar = ({ progress }: { progress: number }) => (
    <View style={containers.progressBar}>
        <Bar
            style={{ width: '100%' }}
            progress={progress}
            width={null}
            height={17}
            borderRadius={6}
            color="#631878"
            borderColor="#631878"
        />
    </View>
);

export const Calendar = () => (
    <View>
        <TouchableOpacity style={s.calendar}>
            <FontAwesomeIcon
                icon={['fas', 'calendar-days']}
                size={25}
                color="#ffa834"
            />
        </TouchableOpacity>
    </View>
);

export const ExpandIcon = ({
    isExpanded,
    toggleIcon,
}: {
    isExpanded: boolean;
    toggleIcon: () => void;
}) => {
    return (
        <TouchableOpacity style={s.expandIcon} onPress={() => toggleIcon()}>
            <FontAwesomeIcon
                icon={['fas', `${isExpanded ? 'caret-up' : 'caret-down'}`]}
                size={25}
                color="#631878"
            />
        </TouchableOpacity>
    );
};
