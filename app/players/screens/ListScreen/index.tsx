import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from 'common/components';
import { getStyles } from './styles';

import { Props } from './types';

function ListScreen(props: Props): React.ReactElement {

  const styles = getStyles();

  console.log('CURRENT', props.current);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon="add"
        onPressRightIcon={props.onAdd}
        title="Jogadores"
        subtitle={props.current?.date}
        leftIcon="arrow-back"
        onPressLeftIcon={props.onGoBack}
      />
    </SafeAreaView>
  );
}

export default ListScreen;
