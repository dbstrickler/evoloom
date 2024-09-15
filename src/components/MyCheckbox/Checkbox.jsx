'use strict';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

/**
 * @callback toggleFunc
 * @param {boolean=} value
 * @returns {void}
 */
/**
 * @typedef {Object} Props
 * @property {boolean} [checked]
 * @property {number} [circleSize]
 * @property {number} [checkSize]
 * @property {string} [outerColor]
 * @property {string} [checkColor]
 * @property {toggleFunc} onToggle
 */

/**
 *
 * @param {Props} Props
 * @returns
 */
const CheckBox = ({
    checked = false,
    circleSize = 26,
    checkSize = 23,
    outerColor = '#631878',
    checkColor = '#631878',
    onToggle,
}) => {
    const customStyle = StyleSheet.create({
        _circleOuterStyle: {
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
            borderColor: outerColor,
            borderWidth: 3,
        },
        _circleFilterStyle: {
            width: circleSize - 3.5,
            height: circleSize - 3.5,
            borderRadius: circleSize / 2,
            backgroundColor: '#fcf2fe',
        },
    });

    const _onToggle = useCallback(() => {
        if (onToggle) {
            onToggle(!checked);
        }
    }, [checked, onToggle]);

    return (
        <TouchableOpacity onPress={_onToggle}>
            <View style={[styles.checkBoxContainer]}>
                <View
                    style={[styles.alignStyle, customStyle._circleOuterStyle]}
                >
                    <View
                        style={[
                            styles.alignStyle,
                            customStyle._circleFilterStyle,
                        ]}
                    >
                        {checked ? (
                            <FontAwesomeIcon
                                icon={['fas', 'check']}
                                size={checkSize}
                                color={checkColor}
                            />
                        ) : null}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    alignStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBoxLabel: {
        marginLeft: 5,
        marginRight: 5,
    },
});

export default CheckBox;
