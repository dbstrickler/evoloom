import { Bar } from 'react-native-progress';
import { containers, s } from '../Tiles/Tile.style';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const myProgessBar = (
    <View style={containers.progressBar}>
        <Bar
            style={{ width: '100%' }}
            progress={0}
            width={null}
            height={17}
            borderRadius={6}
            color="#631878"
            borderColor="#631878"
        />
    </View>
);

export const calendar = (
    <TouchableOpacity style={s.calendar}>
        <FontAwesomeIcon
            icon={['fas', 'calendar-days']}
            size={25}
            color="#ffa834"
        />
    </TouchableOpacity>
);

/**
 * @callback setStateFunction
 * @param {boolean=} value
 * @returns {void}
 */
/**
 * @typedef {Object} Props
 * @property {boolean} isExpanded will set the direction of the arrow
 * @property {setStateFunction} setIsExpanded set
 */

/**
 *
 * @param {Props} Props
 * @returns
 */
export const expandIcon = ({ isExpanded, setIsExpanded }) => {
    return (
        <TouchableOpacity
            style={s.expandIcon}
            onPress={() => {
                setIsExpanded(!isExpanded);
            }}
        >
            <FontAwesomeIcon
                icon={['fas', `${isExpanded ? 'caret-up' : 'caret-down'}`]}
                size={25}
                color="#631878"
            />
        </TouchableOpacity>
    );
};
