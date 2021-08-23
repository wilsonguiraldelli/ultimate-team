import React from 'react';

import { FormScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { PlayerForm, PlayerProps } from 'players/types';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';

import { updatePlayers } from 'saturday/store/actions';
import { selectCurrentSaturday } from 'saturday/hooks';

function AddContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const current = selectCurrentSaturday();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (player: PlayerForm) => {
    const players = current.players;
    const id = uuid.v4();

    players.splice(Number(player.order) - 1, 0, {...player, id})

    dispatch(updatePlayers({ saturday_id: current.id, players }))

    handleGoBack();
  };

  return (
    <FormScreen
      onGoBack={handleGoBack}
      onSubmit={handleSubmit}
      playersListSize={current?.players?.length ? current?.players?.length  + 1 : 1}
      initialValues={{
        order: current?.players?.length ? String(current?.players?.length  + 1) : '1',
        name_nickename: '',
        position: '',
        payment: 'N/P',
        phone: '',
      }}
    />
  );
}

export default AddContainer;
