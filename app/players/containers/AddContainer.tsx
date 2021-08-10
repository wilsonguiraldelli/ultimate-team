import React from 'react';

import { FormScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { Player } from 'players/types';
import { useDispatch } from 'react-redux';

import { list } from 'players/store/actions';

function AddContainer() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSubmit = (player: Player) => {
        console.log('Values', player);
        dispatch(list.add(player));
    };

    return (
        <FormScreen
            onGoBack={handleGoBack}
            onSubmit={handleSubmit}
            initialValues={{
                name: '',
                nickname: '',
                position: '',
                payment: 'N/P',
            }}
        />
    );
}

export default AddContainer;
