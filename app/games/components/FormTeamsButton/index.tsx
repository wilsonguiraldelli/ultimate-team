import React from "react";
import { TouchableOpacity } from "react-native";
import { Row, Text, useTheme } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

import { Props } from './types';
import { getStyles } from './styles';

function FormTeamsButton(props: Props) {
  const { colors } = useTheme()
  const styles = getStyles({ colors: colors });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress()}
    >
      <Row justifyContent="center" space={3}>
        <Text fontSize="lg" bold color="#FFF">Formar times</Text>
        <Icon
          name="people"
          color="#FFF"
          size={24}
        />
      </Row>
    </TouchableOpacity>
  )
}

export default FormTeamsButton;
