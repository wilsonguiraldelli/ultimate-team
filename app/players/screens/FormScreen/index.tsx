import React from 'react';

import { SafeAreaView } from 'react-native';
import { Header } from 'common/components';

import { Props } from './types';

function FormScreen(props: Props) {
    return (
        <SafeAreaView>
            <Header
                title="Adicionar jogador"
                leftIcon="arrow-back"
                onPressLeftIcon={props.onGoBack}
            />
        </SafeAreaView>
    );
}

export default FormScreen;
