import React from 'react';

import { FormScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { Player } from 'players/types';
import { useDispatch, useSelector } from 'react-redux';

import { addPlayer } from 'saturday/store/actions';
import { SaturdayProps } from 'saturday/types';
import { selectCurrentSaturday } from 'saturday/hooks';

function AddContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const current = selectCurrentSaturday();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (player: Player) => {
    const players = current.players;
    players.splice(Number(player.order) - 1, 0, player)

    dispatch(addPlayer({ saturday_id: current.id, players }))

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
