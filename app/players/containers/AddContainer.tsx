import React from 'react';

import { FormScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';

function AddContainer() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <FormScreen
            onGoBack={handleGoBack}
        />
    );
}

export default AddContainer;
