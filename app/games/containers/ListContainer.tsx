import React from 'react';
import { ListScreen } from 'games/screens';
import { useNavigation } from '@react-navigation/native';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();

  const handleFormTeams = () => {
    navigation.navigate('games-form-teams')
  }

  return (
    <ListScreen
      onFormTeam={handleFormTeams}
    />
  );
}

export default ListContainer;
