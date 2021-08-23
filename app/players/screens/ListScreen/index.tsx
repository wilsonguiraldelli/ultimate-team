import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { Header, If } from 'common/components';
import { PlayerCard } from 'players/components';

import { getStyles } from './styles';
import { Props } from './types';

import { Box, Fab, IconButton, View } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

function ListScreen(props: Props): React.ReactElement {

  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon="add"
        onPressRightIcon={props.onAdd}
        title="Jogadores"
        subtitle={props.current?.date}
        leftIcon="arrow-back"
        onPressLeftIcon={props.onGoBack}
      />
      <FlatList
        data={props.current.players}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <PlayerCard
            player={item}
            index={index + 1}
            onDelete={() => props.onDelete(item.id)}
            onSelect={() => props.onEdit(item, index + 1)}
          />
        )}

      />
      <IconButton
        style={styles.floatingButton}
        variant="solid"
        size="lg"
        onPress={props.onGoAnalytics}
        icon={<Icon size={32} name="analytics" color="#FFF" />}
      />
    </SafeAreaView>
  );
}

export default ListScreen;
