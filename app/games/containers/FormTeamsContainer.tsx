import React from 'react';
import { FormTeamsScreen } from 'games/screens';
import { useNavigation } from '@react-navigation/native';

function FormTeamsContainer(): React.ReactElement {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <FormTeamsScreen
      onGoBack={handleGoBack}
    />
  );
}

export default FormTeamsContainer;
