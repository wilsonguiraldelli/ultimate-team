import React from 'react';
import { ListScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();


  const handleAdd = () => {
    navigation.navigate('players-add');
  };

  return (
    <ListScreen
      onAdd={handleAdd}
    />
  );
}

export default ListContainer;
