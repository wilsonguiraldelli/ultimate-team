import React from 'react';
import { ListScreen } from 'players/screens';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectCurrentSaturday } from 'saturday/hooks';

import { updatePlayers } from 'saturday/store/actions';
import { form } from 'players/store/actions';
import { PlayerProps } from 'players/types';
import { useEffect } from 'react';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const current = selectCurrentSaturday();

  const handleAdd = () => {
    navigation.navigate('players-add');
  };

  const handleGoBack = () => {
    navigation.reset({
      index: 1,
      routes: [
        { name: 'Home' }
      ]
    })
  }

  const handleAnalytics = () => {
    navigation.navigate('players-analytics');
  };

  const handleDelete = (id: string | number[]) => {
    const players = current.players.filter(player => player.id !== id);

    dispatch(updatePlayers({
      saturday_id: current.id,
      players,
    }))
  }

  const handleEdit = (player: PlayerProps, index: number) => {
    dispatch(form.setCurrent({ player, index }))

    navigation.navigate('players-edit')
  }

  return (
    <ListScreen
      onAdd={handleAdd}
      onGoBack={handleGoBack}
      onDelete={handleDelete}
      onGoAnalytics={handleAnalytics}
      onEdit={handleEdit}
      current={current}
    />
  );
}

export default ListContainer;
