import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, Row, IconButton, View, Column } from 'native-base';

import { getStyles } from './styles';
import { Props } from './types';
import Icon from 'react-native-vector-icons/Ionicons';

function Header(props: Props) {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Row style={styles.row}>
        <Row style={styles.titleRow}>
          <IconButton
            style={props.leftIcon ? styles.leftIcon : {}}
            variant="ghost"
            size="md"
            icon={props.leftIcon
              ? <Icon name={props.leftIcon || ''} size={32} />
              : <View />
            }
            onPress={() => props.onPressLeftIcon ? props.onPressLeftIcon() : {}}
          />
          <Column>
            <Text bold fontSize="2xl">{props.title}</Text>
            <Text fontSize="sm">{props.subtitle}</Text>
          </Column>
        </Row>
        <IconButton
          style={styles.rightIcon}
          variant={props.rightIcon ? 'solid' : 'ghost'}
          size="md"
          icon={props.rightIcon
            ? <Icon name={props.rightIcon || ''} size={24} color="#fff" />
            : <View style={{ height: 24 }} />
          }
          onPress={() => props.onPressRightIcon ? props.onPressRightIcon() : {}}
        />
      </Row>
    </SafeAreaView>
  );
}

export default Header;
