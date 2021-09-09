import React from 'react';
import { FormTeamsScreen } from 'games/screens';
import { useNavigation } from '@react-navigation/native';
import { selectCurrentSaturday } from 'saturday/hooks';

function FormTeamsContainer(): React.ReactElement {
  const navigation = useNavigation();

  const current = selectCurrentSaturday();
  const sortablePlayers = current?.players?.filter((_players, index) => index <= 13);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <FormTeamsScreen
      onGoBack={handleGoBack}
      playersToSort={sortablePlayers}
    />
  );
}

export default FormTeamsContainer;
