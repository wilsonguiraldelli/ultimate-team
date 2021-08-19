import React, { ReactElement } from "react";

import { theme, Box, Text, Row } from 'native-base';
import { useWindowDimensions } from 'react-native';

import { Props } from './types';
import { getStyles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

function Toast(props: Props): ReactElement {
    const styles = getStyles();

    if (props.type === 'success') {
        return (
            <Box
                bg={theme.colors.green[500]}
                width={useWindowDimensions().width - 32}
                style={styles.container}
            >
                <Row style={styles.row}>
                    <Text color="#FFF">{props.message}</Text>
                    <Icon color="#FFF" name="checkmark" size={32} />
                </Row>
            </Box>
        )
    }

    if (props.type === 'warning') {
        return (
            <Box
                bg={theme.colors.orange[500]}
                width={useWindowDimensions().width - 32}
                style={styles.container}
            >
                <Row style={styles.row}>
                    <Text color="#FFF">{props.message}</Text>
                    <Icon color="#FFF" name="alert" size={32} />
                </Row>
            </Box>
        )
    }

    if (props.type === 'error') {
        return (
            <Box
                bg={theme.colors.red[500]}
                width={useWindowDimensions().width - 32}
                style={styles.container}
            >
                <Row style={styles.row}>
                    <Text color="#FFF">{props.message}</Text>
                    <Icon color="#FFF" name="warning-outline" size={32} />
                </Row>
            </Box>
        )
    }

    return (
        <Box
            bg={theme.colors.black}
            width={useWindowDimensions().width - 32}
            style={styles.container}
        >
            <Row style={styles.row}>
                <Text color="#FFF">{props.message}</Text>
                <Icon color="#FFF" name="checkmark" size={32} />
            </Row>
        </Box>
    )
}

export default Toast;