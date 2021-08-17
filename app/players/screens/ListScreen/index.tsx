import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from 'common/components';
import { getStyles } from './styles';

import { Props } from './types';

function ListScreen(props: Props): React.ReactElement {

  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon="add"
        onPressRightIcon={props.onAdd}
        title="Jogadores"
        leftIcon="arrow-back"
        onPressLeftIcon={props.onGoBack}
      />
    </SafeAreaView>
  );
}

export default ListScreen;
