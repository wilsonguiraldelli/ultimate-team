import React from "react";

import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, IconButton, Row } from "native-base";

import { Props } from './types';
import { getStyles } from './styles';

function TeamList(props: Props): React.ReactElement {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      {props.players.map(player => (
        <TouchableOpacity
          key={`${player.id}`}
        >
          <Row
            alignItems="center"
            justifyContent="space-between"
            style={styles.playerContainer}
          >
            <Text
              width="80%"
            >
              {player.name_nickename}
            </Text>
            <Row
              alignItems="center"
            >
              <Text>{player.position}</Text>
              <IconButton
                variant="ghost"
                size="md"
                icon={<Icon name='close' size={32} />}
                onPress={() => props.removePlayer(player)}
              />
            </Row>
          </Row>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TeamList;
