import React, { useState } from 'react';

import { useWindowDimensions } from 'react-native';
import { default as RNDateTimePicker } from '@react-native-community/datetimepicker';
import { Modal, Row, Column, IconButton, Text, useTheme } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { getStyles } from './styles';
import { Props } from './types';

function DateTimePicker(props: Props): React.ReactElement {
    const [date, setDate] = useState(new Date());
    const { colors } = useTheme();

    const styles = getStyles({ colors: colors });

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <Modal.Content
                minWidth={useWindowDimensions().width}
                style={styles.modalContent}
            >
                <Column>
                    <Row style={styles.headerRow}>
                        <Text style={styles.placeholder}>{props.placeholder || ''}</Text>
                        <IconButton
                            style={styles.icon}
                            variant="ghost"
                            size="md"
                            icon={
                                <Icon
                                    name="checkmark"
                                    size={32}
                                    color={colors.primary[500]}
                                />
                            }
                            onPress={() => {
                                props.onSubmit(date)
                            }}
                        />
                    </Row>
                    <RNDateTimePicker
                        value={date}
                        locale="pt-BR"
                        display="spinner"
                        textColor="#000"
                        onChange={(_event: any, selectedDate: any) => setDate(selectedDate)}
                    />
                </Column>
            </Modal.Content>
        </Modal>
    );
};

export default DateTimePicker;