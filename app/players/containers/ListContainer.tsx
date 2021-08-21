import React from 'react';
import { ListScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { selectCurrentSaturday } from 'saturday/hooks';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();

  const current = selectCurrentSaturday();

  const handleAdd = () => {
    navigation.navigate('players-add');
  };

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <ListScreen
      onAdd={handleAdd}
      onGoBack={handleGoBack}
      current={current}
    />
  );
}

export default ListContainer;
