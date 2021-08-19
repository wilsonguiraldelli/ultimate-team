import React from 'react';
import { useSelector } from 'react-redux';
import { ListScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { SaturdayProps } from 'saturday/types';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();

  const current = useSelector<any, SaturdayProps>(({ saturday }) => saturday.current);

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
