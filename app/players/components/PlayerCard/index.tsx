import { Row, Column, Text, theme, Menu, Container, Tooltip } from "native-base";
import React, { Fragment } from "react";
import { Pressable, Animated } from "react-native";
import { Swipeable, RectButton } from "react-native-gesture-handler";

import { DateTime } from 'luxon';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Props } from "./types";
import { getStyles } from './styles';

function PlayerCard(props: Props): React.ReactElement {
  const styles = getStyles();

  const today = DateTime.now().toLocaleString();
  const isPlaying = props.date === today;


  const renderOptions = () => (
    <Row>
      <Pressable style={styles.deleteContainer}>
        <MaterialIcon name="delete" size={32} color='#FFF' onPress={props.onDelete} />
      </Pressable>
    </Row>
  );

  return (
    <Swipeable
      renderRightActions={renderOptions}
    >
      <Pressable
        onPress={() => props.onSelect()}
        style={styles.container}
      >
        <Row
          borderBottomWidth={0.5}
          borderBottomColor={theme.colors.gray[300]}
          space={3}
          paddingX={8}
          paddingY={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Row>
            <Text fontSize={16}>{`${props.index} - `}</Text>
            <Text fontSize={16}>{props.player.name_nickename}</Text>
          </Row>
          <IonIcon
            name={props.player.payment === 'N/P'
              ? "alert-circle-outline"
              : "checkmark-circle-outline"
            }
            color={props.player.payment === 'N/P'
              ? theme.colors.red[500]
              : theme.colors.green[500]
            }
            size={32} />
        </Row>
      </Pressable>
    </Swipeable>
  )
}
export default PlayerCard;
