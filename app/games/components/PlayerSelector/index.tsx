import React from "react";

import { Props } from './types';
import { getStyles } from './styles';

import { TouchableOpacity } from "react-native";
import { View, Row, Text } from "native-base";
import { If } from "common/components";

function PlayerSelector(props: Props): React.ReactElement {
  const styles = getStyles();

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Row
        space={3}
        alignItems="center"
        style={styles.container}
      >
        <Text style={styles.text}>{props.player.name_nickename}</Text>
        <If condition={!!props.player.position}>
          <View style={styles.positionContainer}>
            <Text
              fontSize="xs"
              style={styles[props?.player?.position]}
              bold
            >
              {props.player.position}
            </Text>
          </View>
        </If>
      </Row>
    </TouchableOpacity>
  )
}

export default PlayerSelector;