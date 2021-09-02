import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from 'common/components';

import { Props } from './types';
import { getStyles } from './styles';
import { Center } from 'native-base';
import { FormTeamsButton } from 'games/components';

function ListScreen(props: Props): React.ReactElement {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Jogos"
      />
      <Center flex={1}>
        <FormTeamsButton
          onPress={props.onFormTeam}
        />
      </Center>
    </SafeAreaView>
  );
}

export default ListScreen;
