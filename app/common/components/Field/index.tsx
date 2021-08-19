import React from 'react';

import { TextInput, TextInputProps } from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import { useTheme, Column, Text } from 'native-base';

import { Props } from './types';
import { getStyles } from './styles';
import If from '../If';

function Field(props: TextInputProps & Props) {
    const { colors } = useTheme();
    const styles = getStyles({
        colors: colors,
    });

    if (props.mask) {
        return (
            <Column space={2}>
                <Text style={styles.label}>{props.label || props.placeholder}</Text>
                <TextInputMask
                    {...props}
                    style={styles.container}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.gray[400]}
                    onChangeText={props.onChange}
                    onBlur={props.onBlur}
                    value={props.value}
                    autoCapitalize={props.autoCapitalize}
                    type={props.mask}
                    options={props.maskOptions}
                />
                <If condition={!!props.error}>
                    <Text style={styles.errorText}>{props.error}</Text>
                </If>
            </Column>
        )
    }
    return (
        <Column space={2}>
            <Text style={styles.label}>{props.label || props.placeholder}</Text>
            <TextInput
                {...props}
                style={styles.container}
                placeholder={props.placeholder}
                placeholderTextColor={colors.gray[400]}
                onChangeText={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
                autoCapitalize={props.autoCapitalize}
            />
            <If condition={!!props.error}>
                <Text style={styles.errorText}>{props.error}</Text>
            </If>
        </Column>
    );
}

export default Field;
