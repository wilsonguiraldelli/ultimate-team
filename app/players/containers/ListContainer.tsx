import React from 'react';
import { ListScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();


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
    />
  );
}

export default ListContainer;
