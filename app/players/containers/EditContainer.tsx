import React from 'react';

import { FormScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { updatePlayers } from 'saturday/store/actions';
import { selectCurrentSaturday } from 'saturday/hooks';

import { PlayerProps, PlayerForm } from 'players/types';

function EditContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const current = selectCurrentSaturday();
  const currentPlayer = useSelector<any, PlayerProps>(({ players }) => players.form.current)

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (player: PlayerForm) => {
    const players = current.players.filter(listPlayer => listPlayer.id !== currentPlayer.id);
    
    players.splice(Number(player.order) - 1, 0, {
      ...player,
      id: currentPlayer.id
    })

    dispatch(updatePlayers({ saturday_id: current.id, players }))

    handleGoBack();
  };

  return (
    <FormScreen
      onGoBack={handleGoBack}
      onSubmit={handleSubmit}
      playersListSize={current?.players?.length ? current?.players?.length + 1 : 1}
      initialValues={{
        order: String(currentPlayer.order),
        name_nickename: currentPlayer.name_nickename,
        position: currentPlayer.position,
        payment: currentPlayer.payment,
        phone: currentPlayer.phone,
      }}
    />
  );
}

export default EditContainer;
