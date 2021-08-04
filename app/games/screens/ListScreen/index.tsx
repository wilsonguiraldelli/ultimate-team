import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from 'common/components';

import { Props } from './types';
import { getStyles } from './styles';

function ListScreen(_props: Props): React.ReactElement {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Jogos"
      />
    </SafeAreaView>
  );
}

export default ListScreen;
