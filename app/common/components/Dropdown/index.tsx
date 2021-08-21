import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker';

import { useTheme, Column, Text, Modal, Row, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { Props } from './types';
import { getStyles } from './styles';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';
import If from '../If';

function Dropdown(props: Props) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { colors } = useTheme();
  const styles = getStyles({
    colors: colors,
  });

  const valueToShow = props.options.find(option => option.value === props.value);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Column
          space={2}
        >
          <Text style={styles.label}>{props.label}</Text>
          <Row>
            <View style={styles.container}>
              <Text
                style={valueToShow?.label
                  ? styles.value
                  : styles.placeholder
                }
              >
                {valueToShow?.label || props.placeholder}
              </Text>
            </View>
          </Row>
          <If condition={!!props.error}>
            <Text style={styles.errorText}>{props.error}</Text>
          </If>
        </Column>
      </TouchableOpacity>
      <Modal
        isOpen={modalVisible}
        onClose={() => {
          setModalVisible(false);
          props.onBlur();
        }}
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
                  setModalVisible(false);
                  props.onBlur();
                }}
              />
            </Row>

            <Picker
              onValueChange={(itemValue: any) => props.onChange(itemValue)}
              selectedValue={props.value}
            >
              {props.options.map(option => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </Picker>
          </Column>
        </Modal.Content>
      </Modal>
    </View>
  );
}

export default Dropdown;
