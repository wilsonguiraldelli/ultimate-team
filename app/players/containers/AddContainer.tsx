import React from 'react';

import { FormScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { Player } from 'players/types';
import { useDispatch, useSelector } from 'react-redux';

import { list } from 'players/store/actions';
import { SaturdayProps } from 'saturday/types';

function AddContainer() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

  const current = useSelector<any, SaturdayProps>(({ saturday }) => saturday.current);
  console.log('Current', current);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSubmit = (player: Player) => {
        dispatch(list.add(player));
    };

    return (
        <FormScreen
            onGoBack={handleGoBack}
            onSubmit={handleSubmit}
            playersListSize={current?.players?.length || 1}
            initialValues={{
                order: current?.players?.length || 1,
                name: '',
                nickname: '',
                position: '',
                payment: 'N/P',
                phone: '',
            }}
        />
    );
}

export default AddContainer;
